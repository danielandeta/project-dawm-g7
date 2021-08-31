const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id_cedula: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "CLIENT"
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cedula" },
        ]
      },
    ]
  });
};
