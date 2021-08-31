const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factura_detalle', {
    id_merme: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'factura_detalle',
    timestamps: false
  });
};
