const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb+srv://dbUser:WAakQrG1BBA21lCi@todolist.ypeuw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Conexão com o mongo executada!')
    }).catch((err) => {
        console.error(err);
    })
        
}

module.exports = Conn;
