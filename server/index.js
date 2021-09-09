const express = require('express')
const app = express()
const db = require('./models')  // Obtengo los models
const cors = require('cors')

app.use(express.json())
app.use(cors())

const usersRouter = require('./routes/users')
app.use('/auth', usersRouter)
const tipRouter = require('./routes/tips')
app.use("/tip", tipRouter)
const mermeladaRouter = require('./routes/mermeladas')
app.use("/mermeladas", mermeladaRouter)
const compraRouter = require('./routes/compras')
app.use("/compra", compraRouter)
const commentsRouter = require('./routes/comments')
app.use("/comments", commentsRouter)

db.sequelize.sync().then(() => {  // Cargo los tablas cuando se ejecute el server
  app.listen(3001, () => {
    console.log('Server running on port 3001 :)')
  })

})
