const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getQuestions = (req,res) => 
{
    const sql = `SELECT * FROM questions`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getQuestion = (req,res) => 
{
    const sql = `SELECT * FROM questions WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertQuestion = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO questions(questionType,question,questionDescription,isActive, qOptions) VALUES( ?, ?, ?, "T", ?)`;
    conexion.query(sql, [body.questionType, body.question, body.questionDescription, body.qOptions], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateQuestion = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE questions SET isActive = "F" WHERE question = ?`;
    conexion.query(sql, [body.question], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteQuestion = (req, res) => 
{
    const sql = `DELETE FROM questions WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};