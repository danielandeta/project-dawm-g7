const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {  // Solo incluyo el "/" porque la ruta es /posts
  await models.mermelada.findAll()
  .then(mermeladas => {
     res.send(mermeladas)
  })
  .catch(error => res.status(400).send(error))
})

module.exports = router