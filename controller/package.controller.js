const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getPackages = (req,res) => 
{
    const sql = `SELECT * FROM package`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getPackage = (req,res) => 
{
    const sql = `SELECT * FROM package WHERE idUser = ?`;
    conexion.query(sql, [req.params.idUser] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertPackage = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO package(idUser, idFood, quantity, dateCreated)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.idUser, body.idFood, body.quantity, body.dateCreated], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updatePackage = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE package SET idUser = ?, idFood = ?, quantity= ?, dateCreated = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser,body.idFood, body.quantity, body.dateCreated, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deletePackage = (req, res) => 
{
    const sql = `DELETE FROM package WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.deletePackageDOS = (req, res) => 
{
    const body = req.body
    const sql = `DELETE FROM package WHERE idUser = ? and idFood = ?`;    
        conexion.query(sql, [body.idUser,body.idFood] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};