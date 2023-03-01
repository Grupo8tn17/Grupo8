const criarMarcaModel = (sequelize, dataTypes) => {
    const colunas = {
      idmarcas: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: dataTypes.INTEGER(14),
        allowNull: false
    },
    endereco: {
        type: dataTypes.STRING,
        allowNull: false
    },

    };
  
    const opcoes = {
      tableName: 'marcas',
      timestamps: false
    };
  
    const Marca = sequelize.define('Marca', colunas, opcoes);
  
    return Marca;
  };
  
  module.exports = criarMarcaModel;
