const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//const multer = require('multer');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config/jwt'); //El punto se refiere a la dirección actual
const user = require('./routes/user');

app.use(cors());
app.use(express.json());
//app.use(multer().array());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', user);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
});