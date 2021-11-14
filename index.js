const express = require('express');
const cors = require('cors');
const Conn =  require('./conn/conn');
const ListsRouter = require('./routes/lists.routes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/lists', ListsRouter)

Conn();

const port = 3001;
app.listen(port, () => {
    console.log(`Servidor conectado na porta ${port}`)
})