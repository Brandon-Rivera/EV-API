const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getMemberdiseases = (req,res) => 
{
    const sql = `SELECT * FROM memberDisease`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getMemberdisease = (req,res) => 
{
    const sql = `SELECT * FROM memberDisease WHERE idMember = ?`;
    conexion.query(sql, [req.params.idMember] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertMemberdisease = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO memberDisease(idMember,idDisease)VALUES(?, ?)`;
    conexion.query(sql, [body.idMember, body.idDisease], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateMemberdisease = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE memberDisease SET idDisease = ? WHERE idMember = ?`;
    conexion.query(sql, [body.idDisease,body.idMember], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteMemberdisease = (req, res) => 
{
    const sql = `DELETE FROM memberDisease WHERE idMember = ?`;    
        conexion.query(sql, [req.params.idMember] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};