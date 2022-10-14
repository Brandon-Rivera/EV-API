const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getFoods = (req,res) => 
{
    const sql = `SELECT * FROM food`;
        conexion.query(sql, (error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getFood = (req,res) => 
{
    const sql = `SELECT * FROM food WHERE id = ?`;
    conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getFoodByName = (req,res) => 
{
    const sql = `SELECT * FROM food WHERE foodName = ?`;
    conexion.query(sql, [req.params.foodName] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertFood = (req, res) => 
{
    const body = req.body; 
    console.log(body)
    const sql = `INSERT INTO food(foodName,foodDesc,lipidos,carbohidratos,proteinas,measure,stock,expiration) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [body.foodName, body.foodDesc, body.lipidos, body.carbohidratos, body.proteinas, body.measure, body.stock, body.expiration], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateFood = (req, res) => 
{
    const body = req.body; 
    const sql = `UPDATE food SET foodDesc = ?, lipidos = ?, carbohidratos = ?, proteinas = ?, measure = ?, stock = ?, expiration = ? WHERE foodName = ?`;
    conexion.query(sql, [body.foodDesc, body.lipidos, body.carbohidratos, body.proteinas, body.measure, body.stock, body.expiration, body.foodName], (error, results, fields) =>{
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteFood = (req, res) => 
{
    const sql = `DELETE FROM food WHERE id = ?`;    
        conexion.query(sql, [req.params.id] ,(error, results, fields) => {
        if(error){
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};