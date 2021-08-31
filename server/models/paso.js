const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paso', {
    id_paso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_receta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paso',
    timestamps: false
  });
};
