const express = require("express");
const router = express.Router();


const gradesController = require('../controllers/grades')

router.get("/frmAddSubject",gradesController.getAddProduct);

router.post("/frmAddSubject",gradesController.postAddProduct);

exports.routes = router;