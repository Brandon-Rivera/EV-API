const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const dataValidation = require('../helpers/dataValidation');
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getUsers = (req,res) => 
{
    const sql = `SELECT * FROM user`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getUser = (req,res) => 
{
    const sql = `SELECT * FROM user WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getUserByFolio = (req,res) => 
{
    const sql = `SELECT * FROM user WHERE folio = ?`;
    conexion.query(sql, [req.params.folio] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getUserByName = (req,res) => 
{
    const sql = `SELECT id FROM user WHERE userName = ?`;
    conexion.query(sql, [req.params.userName] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertUser = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO user(folio,userName,userPassword,phoneNumber,eMail)VALUES(?, ?, ?, ?, ?)
    
    `;
    conexion.query(sql, [body.folio, body.userName, body.userPassword,body.phoneNumber, body.eMail], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
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
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteUser = (req, res) => 
{
    const sql = `DELETE FROM user WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};