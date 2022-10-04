const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getQuestions = (req,res) => 
{
    const sql = `SELECT * FROM questions`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getQuestion = (req,res) => 
{
    const sql = `SELECT * FROM questions WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertQuestion = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO questions(questionType,questionDescription,isActive)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.questionType, body.questionDescription, body.isActive], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateQuestion = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE questions SET questionType = ?,questionDescription = ?,isActive = ? WHERE id = ?`;
    conexion.query(sql, [body.questionType, body.questionDescription, body.isActive, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteQuestion = (req, res) => 
{
    const sql = `DELETE FROM questions WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};