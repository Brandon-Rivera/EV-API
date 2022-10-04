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
        const sql = `SELECT idUsuario FROM user
            WHERE userName = ? AND userPassword = SHA2(?,224)`;
        conexion.query(sql, [user, password], (error, results, fields) =>{
            if(error){
                res.send(error);
            }
            let mensaje = "Usuario no autenticado";
            let token = "";
            const result = Object.values(JSON.parse(JSON.stringify(results)));
            let arrtemp = result.map(object => object.idUsuario);
            let idUser = arrtemp[0];

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
    
    start = dataValidation.intCheck(body.folio,start);
    start = dataValidation.stringCheck(body.userName,start);
    start = dataValidation.stringCheck(body.userPassword,start);
    start = dataValidation.stringCheck(body.phoneNumber,start);
    start = dataValidation.stringCheck(body.email,start);
    
    if(start){
        const sql1 = `SELECT idUsuario FROM usuario WHERE userName = ?`;
        conexion.query(sql1, [body.userName], (error1, results1, fields) =>{
            if(error1){
                res.json("Error en la conexión");
            }
            let result = Object.values(JSON.parse(JSON.stringify(results1)));
            let arrtemp = result.map(object => object.idUsuario);
            let idUser = arrtemp[0];
            if(!(!isNaN(idUser) && idUser > 0)){
                const sql2 = `SELECT idUsuario FROM usuario WHERE email = ?`;
                conexion.query(sql2, [body.email], (error2, results2, fields) =>{
                    if(error2){
                        res.json("Error en la conexión");
                    }
                    let result1 = Object.values(JSON.parse(JSON.stringify(results2)));
                    let arrtemp1 = result1.map(object => object.idUsuario);
                    let idUser1 = arrtemp1[0];
                    if(!(!isNaN(idUser1) && idUser1 > 0)){
                        const sql = `INSERT INTO user(folio,userName,userPassword,phoneNumber,eMail)VALUES(?, ?, ?, ?, ?, ?)`;
                        conexion.query(sql, [body.folio, body.userName, body.userPassword,body.phoneNumber, body.eMail], (error, results, fields) =>{
                            if(error){
                                res.json("Error al crear el usuario");
                            }
                            res.json("Usuario creado");
                        });
                    }
                    else{
                        res.json("Correo existente")
                    }
                });
            }
            else{
                res.json("Usuario existente")
            }
        });
    }
    else{
        res.json("Valores inválidos")
    }
};