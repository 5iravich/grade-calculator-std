const path = require("path");

const express = require("express");

const gradesController = require('../controllers/grades')

const router = express.Router();

router.get("/",gradesController.getProducts);

module.exports = router;