const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getwhiteLists = (req,res) => 
{
    const sql = `SELECT * FROM whiteList`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getwhiteList = (req,res) => 
{
    const sql = `SELECT * FROM whiteList WHERE eMail = ?`;
    conexion.query(sql, [req.params.eMail] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertwhiteList = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO whiteList(eMail)VALUES(?)`;
    conexion.query(sql, [body.eMail], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updatewhiteList = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE whiteList SET eMail = ? WHERE id = ?`;
    conexion.query(sql, [body.eMail, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deletewhiteList = (req, res) => 
{
    const sql = `DELETE FROM whiteList WHERE eMail = ?`;    
        conexion.query(sql, [req.params.eMail] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};