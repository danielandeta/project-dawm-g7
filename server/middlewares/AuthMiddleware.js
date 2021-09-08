// Recursos para validar el token
const { verify } = require("jsonwebtoken");
const { Model } = require("sequelize/types");

// Funcion que valida el token
const validateToken = (req, res, next) => {
  // Revisamos la cabecera de la peticion
  const accessToken = req.header("accessToken")
  if (!accessToken) res.json({error: "El usuario no esta logeado"})

  try{
    // Verificamos el token
    const validToken = verify(accessToken, "importansecret")
    req.user = validToken
    if (validToken) {
      return next()
    }
  } catch (err) {
    return res.json({err: err})
  }
}

module.exports = { validateToken }