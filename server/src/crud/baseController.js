class BaseController {
    constructor(Service) {
        this.service = new Service();
    }

    async create(req, res) {
        const obj = req.body;

        if(!!obj && this.isValidObject(obj)) {
            const data = await this.service.create(obj);
            res.status(201).send({message: `Create successfully`, data});
        } else {
            return res.status(400).send({message: 'Not a valid object'});
        }
    }

    async getById(req, res) {
        const id = req.params.id;
        const obj = await this.service.getById(id);

        if(!!obj){
            res.status(200).send(obj);
        } else {
            res.status(404).send({message: `Object with id ${id} not found`})
        }
    }

    async getAll(req, res) {
        const list = await this.service.getAll();
        res.status(200).send(list);
    }

    async update(req, res) {
        const id = req.params.id;
        const obj = req.body;
        if (!!obj && this.isValidObject(obj)) {
            const object = this.service.update(id, obj);
            res.status(200).send({message: "Update successfully", object});
        } else {
            return res.status(400).send({message: 'Not a valid object'});
        }
    }

    async deleteFn(req, res) {
        const id = req.params.id;
        await this.service.delete(id);
        res.status(200).send({message: "Delete successfully"});
    }

    isValidObject(obj){
        return true;
    }
}

module.exports = BaseController;