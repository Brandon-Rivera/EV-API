const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const dataValidation = require('../helpers/dataValidation');

module.exports.insertLogin = (req, res) => 
{
    const user = req.body.userName;
    const password = req.body.userPassword;
    
    let start = true;
    start = dataValidation.stringCheck(user,start);
    start = dataValidation.stringCheck(password,start);

    if(start){
        const sql = `SELECT id FROM user
            WHERE userName = ? AND userPassword = SHA2(?,224)`;
        conexion.query(sql, [user, password], (error, results, fields) =>{
            if(error){
                res.send({mensaje: error});
            }
            
            let mensaje = "Usuario no autenticado";
            let token = "";
            
            const result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.id);
            let idUser = arrtemp[0];
            //console.log(idUser);
            const sql2 = `select id from validFolio where folio = ?`;
            conexion.query(sql2, [body.eMail], (error2, results2, fields) =>{
                if(error2){
                     res.json({mensaje:"Error en la conexión"});
                }
                let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                let arrtemp1 = result1.map(object => object.id);
                let idUser1 = arrtemp1[0];
                if( idUser1 > 0){
                    if(!isNaN(idUser) && idUser > 0)
                    {
                        const payload = {
                            id: idUser,
                            usuario: user
                        }
                        token = jwt.sign(payload, config.key, {expiresIn: 7200})
                        mensaje = 'Usuario autenticado'
                    }

                    res.json
                    ({
                        mensaje: mensaje,
                        token: token,
                        id: idUser
                    });
                }
                  
                else{
                    res.json({mensaje: "Folio existente"});
                }
            });
        });
    }
    else{
        res.json({ mensaje: "Valores inválidos" })
    }
};

module.exports.insertUsuario = (req, res) => 
{
    const body = req.body;
    let start = true;
    
    start = dataValidation.intCheck(body.folio,start);
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.userPassword,start);
    start = dataValidation.stringCheck(body.phoneNumber,start);
    start = dataValidation.stringCheck(body.eMail,start);
    
    if(start){
        const sql1 = `SELECT id FROM user WHERE userName = ?`;
        conexion.query(sql1, [body.userName], (error1, results1, fields) =>{
            if(error1){
                res.json({mensaje:"Error en la conexión"});
            }
            //console.log(JSON.stringify(results1))
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.id);
            let idUser = arrtemp[0];
            if(!(!isNaN(idUser) && idUser > 0)){
                const sql2 = `SELECT id FROM user WHERE eMail = ?`;
                conexion.query(sql2, [body.eMail], (error2, results2, fields) =>{
                    if(error2){
                        res.json({mensaje:"Error en la conexión"});
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                    let arrtemp1 = result1.map(object => object.id);
                    let idUser1 = arrtemp1[0];
                    if(!(!isNaN(idUser1) && idUser1 > 0)){
                        const sql = `INSERT INTO user(folio,userName,userPassword,phoneNumber,eMail)VALUES(?, ?, SHA2(?,224), ?, ?)`;
                        conexion.query(sql, [body.folio, body.userName, body.userPassword,body.phoneNumber, body.eMail], (error, results, fields) =>{
                            if(error){
                                res.json({mensaje:"Error al crear el usuario"})
                            }
                            res.json({mensaje:"Usuario creado"})
                        });
                    }
                    else{
                        res.json({mensaje:"Correo existente"})
                    }
                });
            }
            else{
                res.json({mensaje:"Usuario existente"})
            }
        });
    }
    else{
        res.json({mensaje:"Valores inválidos"})
    }
};