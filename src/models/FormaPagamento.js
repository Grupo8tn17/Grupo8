const criarFormaPagamentoModel = (sequelize, dataTypes) => {
    const colunas = {
      idforma_pagamentos: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },

    };
  
    const opcoes = {
      tableName: 'forma_pagamentos',
      timestamps: false
    };
  
    const FormaPagamento = sequelize.define('FormaPagamento', colunas, opcoes);
  
    return FormaPagamento;
  };
  
  module.exports = criarFormaPagamentoModel;