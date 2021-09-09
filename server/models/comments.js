module.exports = (sequelize, DataTypes) => {

  // Creo la estrucctura de la tabla de la siguiente forma
  const Comments = sequelize.define("Comments", {
    commentBody: {      // Defino la columna de mi tabla como un objeto
      type: DataTypes.STRING,       // Defino el tipo de dato de mi columna
      allowNull: false        // Defino si la columna puede tener datos nulos  
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sabor: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  })

  // Retorno la tabla que quiero crear
  return Comments
}