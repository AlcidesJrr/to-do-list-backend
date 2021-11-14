const ListsModel = require('./../models/list');

class listsService {
    findAll = async () => await ListsModel.find();

    findById = async (id) => {
        return await ListsModel.findById(id)
    };

    create = async (list) => {
        return await ListsModel.create(list)
    };

    edit = async (id, list) => {
        return await ListsModel.findByIdAndUpdate(id, list)
    };

    delete =  async (id) => {
        return await ListsModel.findByIdAndDelete(id)
    };
}

module.exports = listsService;