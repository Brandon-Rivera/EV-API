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

module.exports.insertMemberdiseaseDOS = (req, res) => 
{
    const body = req.body;
    const sql = `INSERT INTO memberDisease(idMember,idDisease)VALUES(?, ?)`;
    const insert = (i) =>
        new Promise((resolve, reject) => conexion.query(sql, [body[i].idMember, body[i].idDisease], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        }));
    const insertAll = async () => {
        const results = [];
        for (const i in body) {
            const result = await insert(i);
            results.push(result);
        }
        return results;
    }

    insertAll().then(results => res.json(results));
};

module.exports.updateMemberdiseaseDOS = (req, res) => 
{
    const body = req.body;
    const sql = `UPDATE memberDisease SET idDisease = ? WHERE idMember = ?`;
    const insert = (i) =>
        new Promise((resolve, reject) => conexion.query(sql, [body[i].idMember, body[i].idDisease], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        }));
    const insertAll = async () => {
        const results = [];
        for (const i in body) {
            const result = await insert(i);
            results.push(result);
        }
        return results;
    }

    insertAll().then(results => res.json(results));
};