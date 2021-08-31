const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receta', {
    id_receta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_merme: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ingredientes: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'receta',
    timestamps: false
  });
};
