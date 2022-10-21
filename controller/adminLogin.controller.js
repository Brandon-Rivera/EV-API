const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const dataValidation = require('../helpers/dataValidation');

module.exports.insertLogin = (req, res) => 
{
    const admin = req.body.adminName;
    const password = req.body.adminPassword;
    
    let start = true;
    start = dataValidation.stringCheck(admin,start);
    start = dataValidation.stringCheck(password,start);

    if(start){
        const sql = `SELECT id FROM administrator
            WHERE adminName = ? AND adminPassword = SHA2(?,224)`;
        conexion.query(sql, [admin, password], (error, results, fields) =>{
            if(error){
                res.send({mensaje: error});
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
                    admin: admin
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
        res.json({ mensaje: "Valores inválidos" })
    }
};

module.exports.insertAdmin = (req, res) => 
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
                res.json({mensaje:"Error en la conexión"});
            }
            //console.log(JSON.stringify(results1))
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.id);
            let idAdmin = arrtemp[0];
            if(!(!isNaN(idAdmin) && idAdmin > 0)){
                const sql2 = `SELECT id FROM administrator WHERE eMail = ?`;
                const sql3 = `SELECT id FROM whiteList WHERE eMail = ?`;
                conexion.query(sql3, [body.eMail], (error3, results3, fields) =>{
                    if(error3){
                        res.json({mensaje:"Error en la conexión"});
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results3)));
                    let arrtemp1 = result1.map(object => object.id);
                    let idAdmin1 = arrtemp1[0];
                    console.log(idAdmin1);
                    if(idAdmin1 > 0){
                        conexion.query(sql2, [body.eMail], (error2, results2, fields) =>{
                            if(error2){
                                res.json({mensaje:"Error en la conexión"});
                            }
                            let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                            let arrtemp1 = result1.map(object => object.id);
                            let idAdmin1 = arrtemp1[0];
                            if(!(!isNaN(idAdmin1) && idAdmin1 > 0)){
                                const sql = `INSERT INTO administrator(adminName,adminPassword,eMail)VALUES(?, SHA2(?,224), ?)`;
                                conexion.query(sql, [body.adminName, body.adminPassword, body.eMail], (error, results, fields) =>{
                                    if(error){
                                        res.json({mensaje:"Error al crear el administrador"})
                                    }
                                    res.json({mensaje:"Administrador creado"})
                                });
                            }
                            else{
                                res.json({mensaje:"Correo existente"})
                            }
                        });
                    }
                    else{
                        res.json({mensaje:"Correo NO existe en WhiteList"})
                    }
                });
            }
            else{
                res.json({mensaje:"Nombre de administrador existente"})
            }
        });
    }
    else{
        res.json({mensaje:"Valores inválidos"})
    }
};