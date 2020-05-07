const EstablishmentController = require('../../src/components/establishment/establishmentController');

let controller;

beforeAll((done) => {
    controller = new EstablishmentController();
    done();
});

describe('body requests to establishment', () => {
    test('with invalid body is denied', () => {
        const invalidBody = {
            nome: 'Estabelecimento 1',
            endereco: 'Rua dos bobos',
            latitude: '54213415313212',
            longitude: '54213415313212',
            situacao: 'AT',
            cidade_id: 1,
            jornada: 'texto inválido',
            rotas_maior_duracao: true,
            agrupamento_itens_diferentes: true,
            destino: 1      
        }
        expect(controller.isValidObject(invalidBody)).toBe(false);
    });

    test('with valid body is accepted', () => {
        const validBody = {
            nome: 'Estabelecimento 1',
            endereco: 'Rua dos bobos',
            latitude: '54213415313212',
            longitude: '54213415313212',
            situacao: 'AT',
            cidade_id: 1,
            jornada: 1,
            rotas_maior_duracao: true,
            agrupamento_itens_diferentes: true,
            destino: 1      
        }
        expect(controller.isValidObject(validBody)).toBeTruthy();
    });
});

