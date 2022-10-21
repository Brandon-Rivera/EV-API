const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getidealsValues = (req,res) => 
{
    const sql = `SELECT * FROM idealValues`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getidealValues = (req,res) => 
{
    const sql = `SELECT * FROM idealValues WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertIdealValues = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO idealValues(person,carbohydrates, lipids, proteins, isActive)VALUES(?, ?, ?, ? ,"T")`;
    conexion.query(sql, [body.person, body.carbohydrates, body.lipids, body.proteins], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateIdealValues = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE idealValues SET person = ?,carbohydrates = ?, lipids = ?, proteins = ?, isActive = ? WHERE id = ?`;
    conexion.query(sql, [body.person, body.carbohydrates, body.lipids, body.proteins, body.isActive, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteIdealValues = (req, res) => 
{
    const sql = `DELETE FROM idealValues WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};