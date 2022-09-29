const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getFamMembers = (req,res) => 
{
    const sql = `SELECT * FROM famMember`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getFamMember = (req,res) => 
{
    const sql = `SELECT * FROM famMember WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.getFamMemberByIdUser = (req,res) => 
{
    const sql = `SELECT * FROM famMember WHERE idUser = ?`;
    conexion.query(sql, [req.params.idUser] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};

module.exports.insertFamMember = (req, res) => 
{
    const body = req.body; 
    const sql = `INSERT INTO famMember(id,idUser,isLeader, names, lastNameD, lastNameM, sex, birthDate, weightV, height, isPregnant)VALUES(?, ?, ?,?,?,?,?,?,?,?,?)`;
    conexion.query(sql, [body.id, body.idUser, body.isLeader, body.names, body.lastNameD, body.lastNameM, body.sex, body.birthDate, body.weightV, body.height, body.isPregnant], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.updateFamMember = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE famMember SET idUser = ?, isLeader = ?, names = ?, lastNameD = ?, lastNameM = ?, sex = ?, birthDate = ?, weightV = ?, height = ?, isPregnant = ? WHERE id = ?`;
    conexion.query(sql, [body.idUser, body.isLeader, body.names, body.lastNameD, body.lastNameM, body.sex, body.birthDate, body.weightV, body.height, body.isPregnant, body.id], (error, results, fields) =>{
        if(error){
            res.send(error);
        }
        res.json(results);
    })
};

module.exports.deleteFamMember = (req, res) => 
{
    const sql = `DELETE FROM famMember WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.send(error);
        }
        res.json(results);
    });
};