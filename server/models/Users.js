module.exports = (sequelize, DataTypes) => {

  // Creo la estrucctura de la tabla de la siguiente forma
  const Users = sequelize.define("Users", {
    names: {      // Defino la columna de mi tabla como un objeto
      type: DataTypes.STRING,       // Defino el tipo de dato de mi columna
      allowNull: false        // Defino si la columna puede tener datos nulos  
    },
    email: {      
      type: DataTypes.STRING,
      allowNull: false       
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false  
    }
  })
  // Relaciones entre tablas con sequelize
  // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade"
  //   })
  // }
  // Retorno la tabla que quiero crear
  return Users
}