const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getQuestionsOptionss = (req,res) => 
{
    const sql = `SELECT * FROM questionOptions`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getQuestionsOptions = (req,res) => 
{
    const sql = `SELECT * FROM questionOptions WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertQuestionsOptions= (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO questionOptions(id,idQuestions, optionName, optionValue)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.idQuestions, body.optionName, body.optionValue], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateQuestionsOptions = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE questionOptions SET idQuestions = ?, optionName = ?, optionValue = ? WHERE id = ?`;
    conexion.query(sql, [body.idQuestions, body.optionName, body.optionValue, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteQuestionsOptions = (req, res) => 
{
    const sql = `DELETE FROM questionOptions WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};