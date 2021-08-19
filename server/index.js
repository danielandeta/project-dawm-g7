const express = require('express')
const app = express()
const db = require('./models')  // Obtengo los models
const cors = require('cors')

app.use(express.json())
app.use(cors()) 

const usersRouter = require('./routes/Users')
app.use('/auth', usersRouter)

db.sequelize.sync().then(() => {  // Cargo los tablas cuando se ejecute el server
  app.listen(3001, () => {
    console.log('Server running on port 3001 :)')
  })

})