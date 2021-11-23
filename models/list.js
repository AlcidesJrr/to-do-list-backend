const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: {type: String, required:true},
    prioridade: {type: String, required: true},
    status: {type: String, required: true},
    prazo: {type: Date, default: Date.now},
    dataCriacao: {type: Date, default: Date.now}
    
})

const ListModel = mongoose.model('lists', listSchema)

module.exports = ListModel;
