const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getUsers = (req,res) => 
{
    const sql = `SELECT * FROM user`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getUser = (req,res) => 
{
    const sql = `SELECT * FROM user WHERE idUsuario = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertUser = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO user(id,folio,userName,userPassword,phoneNumber,eMail)VALUES(?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.folio, body.userName, body.userPassword,body.phoneNumber, body.eMail], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateUser = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE user SET folio = ?, userName = ?, userPassword = ?, phoneNumber = ?, eMail = ? WHERE id = ?`;
    conexion.query(sql, [body.folio, body.userName, body.userPassword,body.phoneNumber, body.eMail, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteUser = (req, res) => 
{
    const sql = `DELETE FROM user WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};