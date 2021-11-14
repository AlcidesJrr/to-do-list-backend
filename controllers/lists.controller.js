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
            res.send({message: `Tarefa ${list.titulo} adicionada com sucesso.`})
        })
        .catch((err) => {
            console.erro(err);
            res.status(500).send({message: `Erro no servidor!!`})
        })
    }

    editList =  async (req, res) => {
        const listEdit = req.body;
        await listsServices.edit(req.params.id)
        .then(() => {
            res.send({message: `Tarefa ${list.titulo} editada com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({message: 'Ops! Alguma coisa aconteceu de errado.'})
        })
    }

    deleteList = async (req, res) => {
        await listsServices.delete(req.params.id)
        .then(() => {
            res.send({message: `${list.titulo} excluido com sucesso!`})
        })
        .catch( err => {
            res.status(500).send({message: 'Ops! Alguma coisa aconteceu de errado.'})
        })
    }
}

module.exports = ListsController;
