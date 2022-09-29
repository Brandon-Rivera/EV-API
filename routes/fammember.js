const express = require('express');
const router = express.Router();
const famMemberController = require('../controller/fammember.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/famMember', famMemberController.getFamMembers);
router.get('/famMember/:id', famMemberController.getFamMember);
router.get('/famMemberByIdUser/:idUser', famMemberController.getFamMemberByIdUser);
router.post('/famMember', famMemberController.insertFamMember);
router.put('/famMember', famMemberController.updateFamMember);
router.delete('/famMember/:id', famMemberController.deleteFamMember);

module.exports = router;