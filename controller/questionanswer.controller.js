const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config')
const conexion = mysql.createConnection(mysqlConfig);


module.exports.getQuestionsAnswers = (req, res) => {
    const sql = `SELECT * FROM questionAnswer`;
    conexion.query(sql, (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getQuestionAnswer = (req, res) => {
    const sql = `SELECT * FROM questionAnswer WHERE idUser = ?`;
    conexion.query(sql, [req.params.idUser], (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.getQuestionAnswerByTime = (req, res) => {
    const body = req.body;
    const sql = `SELECT * FROM questionAnswer WHERE idMember = ? AND timeAnswered = ?`;
    conexion.query(sql, [body.idMember, body.timeAnswered], (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.insertQuestionAnswer = (req, res) => {
    const body = req.body;
    const sql = `INSERT INTO questionAnswer(id, idQuestion, idUser, idMember, timeAnswered, idRow, answer)VALUES(? ,?, ?, ?, ?,?,?)`;
    conexion.query(sql, [body.id, body.idQuestion, body.idUser, body.idMember, body.timeAnswered, body.idRow, body.answer], (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.updateQuestionAnswer = (req, res) => {
    const body = req.body;
    const sql = `UPDATE questionAnswer SET idQuestion = ?, idUser = ?, idMember = ?, timeAnswered = ?, idRow = ?, answer = ? WHERE id = ?`;
    conexion.query(sql, [body.idQuestion, body.idUser, body.idMember, body.timeAnswered, body.idRow, body.answer, body.id], (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    })
};

module.exports.deleteQuestionAnswer = (req, res) => {
    const sql = `DELETE FROM questionAnswer WHERE id = ?`;
    conexion.query(sql, [req.params.id], (error, results, fields) => {
        if (error) {
            res.json({ mensaje: "Valores inválidos" });
        }
        res.json(results);
    });
};

module.exports.SubidaQuestionAnswer = (req, res) => {
    const body = req.body;
    const sql = `INSERT INTO questionAnswer(id, idQuestion, idUser, idMember, timeAnswered, idRow, answer)VALUES(? ,?, ?, ?, ?,?,?)`;
    const insert = (i) =>
        new Promise((resolve, reject) => conexion.query(sql, [body[i].id, body[i].idQuestion, body[i].idUser, body[i].idMember, body[i].timeAnswered, body[i].idRow, body[i].answer], (error, results, fields) => {
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