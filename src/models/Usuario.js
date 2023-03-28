const criarUsuarioModel = (sequelize, dataTypes) => {
    const colunas = {
      idusuarios: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
      nome: {
        type: dataTypes.STRING,
        allowNull: false
      },
      sobrenome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: dataTypes.STRING,
        allowNull: false
    },
    documento_usuario: {
        type: dataTypes.STRING(20),
        allowNull: false
    },
    telefone: {
        type: dataTypes.STRING(11),
        allowNull: false
    },
    data_nascimento: {
        type: dataTypes.DATE,
        allowNull: true
    },
    idadmin: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    
    foto_usuario: {
      type: dataTypes.STRING,
      allowNull: true
  }
    
    };
  
    const opcoes = {
      tableName: 'usuarios',
      timestamps: false
    };
  
    const Usuario = sequelize.define('Usuario', colunas, opcoes);
  
    return Usuario;
  };
  
  module.exports = criarUsuarioModel;