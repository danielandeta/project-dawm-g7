const express = require('express')
const router = express.Router()
const { Comments } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

// Obtener todos los comentarios de un post
router.get('/:name', async(req, res) => {
  const nameMermelada = req.params.name  //obtengo los parametros de la url con params
  const comments = await Comments.findAll({ //obtengo los datos con la condicion anterior
    where: {sabor: nameMermelada}
  })
  res.json(comments)
})

router.post('/', validateToken, async(req, res) => {
  const comment = req.body
  console.log(req.body)
  const username = req.user.username
  console.log(req.user)
  comment.username = username
  await Comments.create(comment)
  res.json(comment)
})
module.exports = router 