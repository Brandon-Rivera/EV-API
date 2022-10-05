const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getFeedbacks = (req,res) => 
{
    const sql = `SELECT * FROM feedback`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getFeedback = (req,res) => 
{
    const sql = `SELECT * FROM feedback WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getFeedbackByFeedLevel = (req,res) => 
{
    const sql = `SELECT * FROM feedback WHERE feedLevel = ?`;
    conexion.query(sql, [req.params.feedLevel] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertFeedback = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO feedback(feedName,feedLevel, feedDescription)VALUES(?, ?, ?)`;
    conexion.query(sql, [body.feedName, body.feedLevel, body.feedDescription], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateFeedback = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE feedback SET feedName = ?,feedLevel = ?, feedDescription = ? WHERE id = ?`;
    conexion.query(sql, [body.feedName, body.feedLevel, body.feedDescription, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteFeedback = (req, res) => 
{
    const sql = `DELETE FROM feedback WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};