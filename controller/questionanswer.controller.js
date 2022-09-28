const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getQuestionsAnswers = (req,res) => 
{
    const sql = `SELECT * FROM questionAnswer`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getQuestionAnswer = (req,res) => 
{
    const sql = `SELECT * FROM questionAnswer WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertQuestionAnswer = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO questions(id,idQuestion,idUser,timeAnswered,answer)VALUES(?, ?, ?, ?,?)`;
    conexion.query(sql, [body.id, body.idQuestion, body.idUser, body.timeAnswered, body.answer], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateQuestionAnswer = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE questionAnswer SET idQuestion = ?,idUser = ?, timeAnswered = ?, answer = ? WHERE id = ?`;
    conexion.query(sql, [body.idQuestion, body.idUser, body.timeAnswered, body.answer, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteQuestionAnswer = (req, res) => 
{
    const sql = `DELETE FROM questionAnswer WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};