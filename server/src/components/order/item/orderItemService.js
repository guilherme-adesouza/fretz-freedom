const BasicService = require('../../../crud/baseService');
const ItemService = require('../../item/itemService');
const EstablishmentService = require('../../establishment/establishmentService');
const OrderItemDAO = require('./orderItemDAO');
const { loggedUser } = require('../../../utils/security');

class OrderItemService extends BasicService {

	constructor(props) {
        super(OrderItemDAO);
        this.itemService = new ItemService();
        this.establishmentService = new EstablishmentService();
    };
    
    async addItems(req, {orderId, items}) {
        const user = loggedUser(req);
        const establishment = this.establishmentService.getById(user.id);
        let itemType = null;
        let data = [];
        for (let pedido_item of items) {
            const item = await this.itemService.getById(pedido_item.item_id);
            if (!item) return {error: {status: 400, message: 'Item not found'}};
            if (!establishment.agrupamento_itens_diferentes && 
                !!itemType && itemType !== item.grupo_item_id) {
                return {error: {status: 400, message: 'Your establishment not permit different items groups'}};
            }
            itemType = item.grupo_item_id;
            const values = {pedido_id: orderId, ...pedido_item};
            console.log('values', values);
            const object = this.beforePersist(values, 'CREATE');
            const result =  await this.DAO.insert({values: object});
            data.push(result);
        }
        return data;
	}
}

module.exports = OrderItemService;
