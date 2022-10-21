const express = require('express');
const router = express.Router();
const famMemberController = require('../controller/fammember.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/famMember', middleware, famMemberController.getFamMembers);
router.get('/famMember/:id', middleware, famMemberController.getFamMember);
router.get('/famMemberByIdUser/:idUser', middleware, famMemberController.getFamMemberByIdUser);
router.post('/famMember', middleware, famMemberController.insertFamMember);
router.put('/famMember', middleware, famMemberController.updateFamMember);
router.delete('/famMember/:id', middleware, famMemberController.deleteFamMember);
router.put('/famMemberIsAct', middleware, famMemberController.updateFamMemberIsActive);

module.exports = router;