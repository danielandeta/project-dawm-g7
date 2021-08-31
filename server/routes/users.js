const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// Para el registro de usuarios
router.post('/', async(req, res) => {
  const {id, nombres, apellidos, username, email, password, celular, nacimiento} = req.body
  bcrypt.hash(password, 10).then((hash) => {
    models.users.create({
      id_cedula:id, username:username, password: hash, nombre: nombres, apellido: apellidos, celular: celular, fecha_nacimiento: nacimiento, email: email, rol:"CLIENT"
    })
    res.json(hash)
  })
})

router.post('/login', async(req, res) => {
  const email = req.body.email
  const password = req.body.password
  const user = await Users.findOne({  // Busco el usuario con ese username
    where: { email: email }
   })

  if (!user) res.json({error: "User doesn't exist :("})
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json( {error: "Wrong username and password Combination"} )
    res.json("You Logged in :)")
  })
})
//router.post()
router.get('/test', async(req, res, next) => {
  await models.users.findAll()
  .then(usuarios => {
     res.send(usuarios)
  })
  .catch(error => res.status(400).send(error))
})

module.exports = router