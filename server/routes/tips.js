const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {  // Solo incluyo el "/" porque la ruta es /posts
  await models.tip.findAll()
  .then(tips => {
     res.send(tips)
  })
  .catch(error => res.status(400).send(error))
})


module.exports = router
