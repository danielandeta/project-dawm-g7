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

router.get('/byId/:id', async(req, res) => {
  const saborMermelada = req.params.id  //obtengo los parametros de la url con params
  const mermelada = await models.mermelada.findOne({
    where: {sabor: saborMermelada}
  })
  res.json(mermelada)
})

module.exports = router