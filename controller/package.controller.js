const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getPackages = (req,res) => 
{
    const sql = `SELECT * FROM package`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getPackage = (req,res) => 
{
    const sql = `SELECT * FROM package WHERE idUser = ?`;
    conexion.query(sql, [req.params.idUser] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getPackageByDate = (req,res) => 
{
    const body = req.body; 
    const sql = `SELECT * FROM package WHERE idUser = ? AND dateCreated = ?`;
    conexion.query(sql, [body.idUser, body.dateCreated] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertPackage = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO package(id,idUser, idFood, dateCreated)VALUES(?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.idUser, body.idFood, body.dateCreated], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updatePackage = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE package SET idUser = ?, idFood = ?, dateCreated = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser,body.idFood, body.dateCreated, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deletePackage = (req, res) => 
{
    const sql = `DELETE FROM package WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};