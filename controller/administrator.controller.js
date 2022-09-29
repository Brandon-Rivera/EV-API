const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getAdministrators = (req,res) => 
{
    const sql = `SELECT * FROM administrator`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getAdministrator = (req,res) => 
{
    const sql = `SELECT * FROM administrator WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getAdministratorByAdminName = (req,res) => 
{
    const sql = `SELECT * FROM administrator WHERE adminName = ?`;
    conexion.query(sql, [req.params.adminName] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertAdministrator = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO administrator(id,adminName,adminPassword,eMail)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.adminName, body.adminPassword, body.eMail], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateAdministrator = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE administrator SET adminName = ?, adminPassword = ?, eMail = ? WHERE id = ?`;
    conexion.query(sql, [body.adminName, body.adminPassword, body.eMail, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteAdministrator = (req, res) => 
{
    const sql = `DELETE FROM administrator WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};