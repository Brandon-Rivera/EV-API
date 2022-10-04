const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const dataValidation = require('../helpers/dataValidation');

module.exports.insertLogin = (req, res) => 
{
    const name = req.body.adminName;
    const password = req.body.adminPassword;
    
    let start = true;
    start = dataValidation.stringCheck(name,start);
    start = dataValidation.stringCheck(password,start);

    if(start){
        const sql = `SELECT id FROM administrator
            WHERE adminName = ? AND adminPassword = SHA2(?,224)`;
        conexion.query(sql, [name, password], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            let mensaje = "Admin no autenticado";
            let token = "";
            const result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.id);
            let idAdmin = arrtemp[0];

            if(!isNaN(idAdmin) && idAdmin > 0)
            {
                const payload = {
                    id: idAdmin,
                    admin: name
                }
                token = jwt.sign(payload, config.key, {expiresIn: 7200})
                mensaje = 'Admin autenticado'
            }

            res.json
            ({
                mensaje: mensaje,
                token: token
            });
        });
    }
    else{
        res.send("Valores inválidos")
    }
};

module.exports.insertUsuario = (req, res) => 
{
    const body = req.body;
    let start = true;
    
    start = dataValidation.stringCheck(body.adminName,start);
    start = dataValidation.stringCheck(body.adminPassword,start);
    start = dataValidation.stringCheck(body.eMail,start);
    
    if(start){
        const sql1 = `SELECT id FROM administrator WHERE adminName = ?`;
        conexion.query(sql1, [body.adminName], (error1, results1, fields) =>{
            if(error1){
                res.json("Error en la conexión");
            }
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.id);
            let idAdmin = arrtemp[0];
            if(!(!isNaN(idAdmin) && idAdmin > 0)){
                const sql2 = `SELECT id FROM administrator WHERE eMail = ?`;
                conexion.query(sql2, [body.eMail], (error2, results2, fields) =>{
                    if(error2){
                        res.json("Error en la conexión");
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                    let arrtemp1 = result1.map(object => object.id);
                    let idAdmin1 = arrtemp1[0];
                    if(!(!isNaN(idAdmin1) && idAdmin1 > 0)){
                        const sql = `INSERT INTO administrator(adminName,adminPassword,eMail) VALUES(?, SHA2(?,224), ?)`;
                        conexion.query(sql, [body.adminName, body.adminPassword, body.eMail], (error, results, fields) =>{
                            if(error){
                                res.json("Error al crear el administrador");
                            }
                            res.json("Administrador creado");
                        });
                    }
                    else{
                        res.json("Correo ya existente")
                    }
                });
            }
            else{
                res.json("Administrador ya existente")
            }
        });
    }
    else{
        res.json("Valores inválidos")
    }
};