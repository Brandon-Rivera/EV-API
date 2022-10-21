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
    const sql = `UPDATE package SET idUser = ?, idFood = ?, quantity = ?, dateCreated = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser,body.idFood, body.quantity, body.dateCreated, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updatePackageName = (req, res) => 
{
    const body = req.body; 
    const sql1 = `SELECT id FROM food WHERE foodName = ?`;
    conexion.query(sql1, [body.foodName], (error1, results1, fields) =>{
        if(error1){
            res.json({mensaje:"Error en la conexión"});
        }
        //console.log(JSON.stringify(results1))
        let result = Object.values(JSON.parse(JSON.stringify(results1)));
        let arrtemp = result.map(object => object.id);
        let idFood = arrtemp[0];
        
        if(idFood > 0){
            const sql = `UPDATE package SET quantity= ? WHERE idUser = ? AND idFood = ?`;
            conexion.query(sql, [body.quantity, body.idUser, idFood], (error, results, fields) =>{
                if(error){
                    res.json({ mensaje: "Valores inválidos" });
                }
                res.json(results);
        })}
        else{
            res.json({mensaje: "No existe ese nombre de comida"})
        }
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
        conexion.query(sql, [body.idUser, body.idFood] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertPackageNEW = (req, res) => 
{   const body = req.body; 
    const sql1 = `SELECT id FROM food WHERE foodName = ?`;
    conexion.query(sql1, [body.foodName], (error1, results1, fields) =>{
        if(error1){
            res.json({mensaje:"Error en la conexión"});
        }
        //console.log(JSON.stringify(results1))
        let result = Object.values(JSON.parse(JSON.stringify(results1)));
        let arrtemp = result.map(object => object.id);
        let idAdmin = arrtemp[0];
        
        if(idAdmin > 0){
            const sql = `INSERT INTO package(idUser, idFood, quantity, dateCreated)VALUES(?, ?, ?, ?)`;
            conexion.query(sql, [body.idUser, idAdmin, body.quantity, body.dateCreated], (error, results, fields) =>{
                if(error){
                    res.json({ mensaje: "Valores inválidos" });
                }
                res.json(results);
        })}
        else{
            res.json({mensaje: "No exitse ese nombre de comida"})
        }
    })
};