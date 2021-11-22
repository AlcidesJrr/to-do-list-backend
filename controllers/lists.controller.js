const ListsService = require('./../services/lists.service');

const listsService = new ListsService;

class ListsController {
    getLists = async (req, res) => {
        const lists = await listsService.findAll();
        res.status(200).send(lists);
    }

    getList = async (req, res) => {
        const list = await listsService.findById(req.params.id);
        if(!list) {
            res.status(404).send({error: 'Tarefa não encontrada!'})
            return;
        }
        res.status(200).send(list);
    }

    createList = async (req, res) => {
        if(!req.body){
            return;
        }
        await listsService.create(req.body)
        .then(() => {
            res.send({message: `Tarefa adicionada com sucesso.`})
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({message: `Erro no servidor!!`})
        })
    }

    editList =  async (req, res) => {
        const listEdit = req.body;
        await listsService.edit(req.params.id, listEdit)
        .then(() => {
            res.send({message: `Tarefa editada com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({message: 'Ops! Alguma coisa aconteceu de errado.'})
        })
    }

    deleteList = async (req, res) => {
        await listsService.delete(req.params.id)
        .then(() => {
            res.send({message: `Excluido com sucesso!`})
        })
        .catch( err => {
            res.status(500).send({message: 'Ops! Alguma coisa aconteceu de errado.'})
        })
    }
}

module.exports = ListsController;
