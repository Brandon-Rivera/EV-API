const express = require('express')
const multer = require('multer');
const app = express()
const port = process.env.PORT || 3000;

//const multer = require('multer');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config/jwt'); //El punto se refiere a la dirección actual

const login = require('./routes/login');
const adminLogin = require('./routes/adminLogin');
const user = require('./routes/user');
const administrator = require('./routes/administrator');
const food = require('./routes/food');
const sLocation = require('./routes/slocation');
const disease = require('./routes/disease');
const feedback = require('./routes/feedback');
const famMember = require('./routes/fammember');
const questions = require('./routes/questions');
const questionsanswer = require('./routes/questionanswer');
const userfeedback = require('./routes/userfeedback');
const memberDisease = require('./routes/memberdisease');
const package = require('./routes/package');
const questionsoptions = require('./routes/questionsoptions');
const whitelist = require('./routes/whitelist');
const validfolio = require('./routes/validfolio');
const idealValues = require('./routes/idealValues');

app.use(cors());
app.use(express.json());
app.use(multer().array());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.set("key", config.key);
app.use('/api', login);
app.use('/api', adminLogin);
app.use('/api', user);
app.use('/api', administrator);
app.use('/api', food);
app.use('/api', sLocation);
app.use('/api', disease);
app.use('/api', feedback);
app.use('/api', famMember);
app.use('/api', questions);
app.use('/api', questionsanswer);
app.use('/api', userfeedback);
app.use('/api', memberDisease);
app.use('/api', package);
app.use('/api', questionsoptions);
app.use('/api', whitelist);
app.use('/api', validfolio);
app.use('/api', idealValues);


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
});