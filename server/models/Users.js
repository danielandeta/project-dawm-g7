module.exports = (sequelize, DataTypes) => {

  // Creo la estrucctura de la tabla de la siguiente forma
  const Users = sequelize.define("Users", {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El usuario necesita ser único'
      },
      validate: {
          isEmail: {
              msg: 'Usuario no valido'
          },
          notEmpty: {
              msg: 'Ingrese un usuario'
          }
      }
    },
    // Columna agregada a mano en el archivo
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'El email necesita ser único'
      },
      validate: {
          isEmail: {
              msg: 'Email no valido'
          },
          notEmpty: {
              msg: 'Ingrese un email'
          }
      }  
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false  
    },
    celular: {
      type: DataTypes.STRING
    },
    nacimiento: {
      type:DataTypes.DATE,
      allowNull: false  
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: true  
    },  
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    // Columna agregada a mano en el archivo
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
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
}/*
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false  
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false  
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'El usuario necesita ser único'
        },
        validate: {
            isEmail: {
                msg: 'Usuario no valido'
            },
            notEmpty: {
                msg: 'Ingrese un usuario'
            }
        }
      },
      // Columna agregada a mano en el archivo
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'El email necesita ser único'
        },
        validate: {
            isEmail: {
                msg: 'Email no valido'
            },
            notEmpty: {
                msg: 'Ingrese un email'
            }
        }  
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false  
      },
      celular: {
        type: DataTypes.STRING
      },
      nacimiento: {
        type:DataTypes.DATE,
        allowNull: false  
      },
      rol: {
        type: DataTypes.STRING,
        allowNull: false  
      },  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Columna agregada a mano en el archivo
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};*/