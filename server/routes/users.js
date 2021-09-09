const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

// Para el registro de usuarios
router.post('/', async(req, res) => {
  const {cedula, nombres, apellidos, username, email, password, celular, nacimiento} = req.body
  bcrypt.hash(password, 10).then((hash) => {
    models.users.create({
      id_cedula:cedula, username:username, password: hash, nombre: nombres, apellido: apellidos, celular: celular, fecha_nacimiento: nacimiento, email: email, rol:"CLIENT"
    })
    res.json(hash)
  })
})

router.post('/login', async(req, res) => {
  const { email, password } = req.body
  const user = await models.users.findOne({  // Busco el usuario con ese username
    where: { email: email }
   })
  
  if (!user) res.json({error: "El usuario no existe"})
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json( {error: "Combinación incorrecta de nombre de usuario y contraseña"} )
    const accessToken = sign({username: user.username, id_cedula:user.id_cedula}, "importansecret")
    res.json(accessToken)
  })
})

module.exports = router