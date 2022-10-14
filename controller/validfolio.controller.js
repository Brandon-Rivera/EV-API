const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getvalidFolios = (req,res) => 
{
    const sql = `SELECT * FROM validFolio`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getvalidFolio = (req,res) => 
{
    const sql = `SELECT * FROM validFolio WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertvalidFolio = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO validFolio(folio)VALUES(?)`;
    conexion.query(sql, [body.folio], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updatevalidFolio = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE validFolio SET folio = ? WHERE id = ?`;
    conexion.query(sql, [body.folio, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deletevalidFolio = (req, res) => 
{
    const sql = `DELETE FROM validFolio WHERE folio = ?`;    
        conexion.query(sql, [req.params.folio] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};