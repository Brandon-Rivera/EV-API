const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getSLocations = (req,res) => 
{
    const sql = `SELECT * FROM sLocation`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getSLocation = (req,res) => 
{
    const sql = `SELECT * FROM sLocation WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getSLocationByUser = (req,res) => 
{
    const sql = `SELECT * FROM sLocation WHERE idUser = ?`;
    conexion.query(sql, [req.params.idUser] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertSLocation = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO sLocation(id,idUser,placeName,lat,lon,street,extNum,intNum,suburb,postalCode,city,stateN)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.id, body.idUser, body.placeName, body.lat, body.lon, body.street, body.extNum, body.intNum, body.suburb, body.postalCode, body.city, body.stateN], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateSLocation = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE sLocation SET idUser = ?, placeName = ?, lat = ?, lon = ?, street = ?, extNum = ?, intNum = ?, suburb = ?, postalCode = ?, city = ?, stateN = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser, body.placeName, body.lat, body.lon, body.street, body.extNum, body.intNum, body.suburb, body.postalCode, body.city, body.stateN, body.id], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteSLocation = (req, res) => 
{
    const sql = `DELETE FROM sLocation WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};