const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getDiseases = (req,res) => 
{
    const sql = `SELECT * FROM disease`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getDisease = (req,res) => 
{
    const sql = `SELECT * FROM disease WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertDisease = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO disease(diseaseName,disDescription)VALUES(?, ?)`;
    conexion.query(sql, [body.diseaseName, body.disDescription], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateDisease = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE disease SET diseaseName = ?, disDescription = ? WHERE id = ?`;
    conexion.query(sql, [body.diseaseName, body.disDescription, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteDisease = (req, res) => 
{
    const sql = `DELETE FROM disease WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};