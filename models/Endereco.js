const criarEnderecoModel = (sequelize, dataTypes) => {
    const colunas = {
      idenderecos: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
      logradouro: {
        type: dataTypes.STRING,
        allowNull: false
      },
      endereco_numero: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cep: {
        type: dataTypes.INTEGER(8),
        allowNull: false
    },
    bairro: {
        type: dataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: dataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    }

    
    };
  
    const opcoes = {
      tableName: 'enderecos',
      timestamps: false
    };
  
    const Endereco = sequelize.define('Endereco', colunas, opcoes);
  
    return Endereco;
  };
  
  module.exports = criarEnderecoModel;