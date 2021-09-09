const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factura_detalle', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_merme: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mermelada',
        key: 'id'
      }
    },
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'factura',
        key: 'id'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'factura_detalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_factura",
        using: "BTREE",
        fields: [
          { name: "id_factura" },
        ]
      },
      {
        name: "id_merme",
        using: "BTREE",
        fields: [
          { name: "id_merme" },
        ]
      },
    ]
  });
};
