const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tip', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion_p: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descripcion_t: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ruta: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    id_user: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tip',
    timestamps: false
  });
};
