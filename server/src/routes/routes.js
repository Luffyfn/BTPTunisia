const express = require("express");
const router = express.Router();

const moesController = require("../controllers/moes.controller");

// Auth and register
router.post('/register', moesController.register);

module.exports = router;