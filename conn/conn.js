const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/lists', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Conexão com o mongo executada!')
    }).catch((err) => {
        console.error(err);
    })
        
}

module.exports = Conn;