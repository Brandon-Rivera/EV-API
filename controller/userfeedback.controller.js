const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getUserFeedbacks = (req,res) => 
{
    const sql = `SELECT * FROM userFeedback`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getUserFeedback= (req,res) => 
{
    const sql = `SELECT * FROM userFeedback WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUserFeedback = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO userFeedback(id,idUser,idFeedback,timeSent)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.idUser, body.idFeedback, body.timeSent], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUserFeedback = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE userFeedback SET idUser = ?,idFeedback = ?,timeSent = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser, body.idFeedback, body.timeSent, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUserFeedback = (req, res) => 
{
    const sql = `DELETE FROM userFeedback WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};