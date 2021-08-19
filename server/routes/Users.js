const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

// Para el registro de usuarios
router.post('/', async(req, res) => {
  const {names, email, password} = req.body
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({names: names, email: email, password: hash})
  })
  res.json("Success")
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

module.exports = router  // De esta forma puedo llmar a router desde otro file