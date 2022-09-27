const express = require('express');
const jwt = require('jsonwebtoken');
const middleware = express.Router();
const {key} = require('../config/jwt');

middleware.use((req, res, next) => {
    const token = req.headers['x-access-token']
    if (token) {
        const decode = jwt.verify(token, key.key, (error, decoded) => {
            if(error)
                return res.status(403).json({mensaje: 'Token inválido'})
            else
                next()
                //Si es necesario, se pueden establecer valores a req
                //Para enviar información al path solicitado
        })
    }else{
        return res.status(401).send({mensaje: 'Token no propocionado'});
    }
})

module.exports = middleware;