const criarFormaPagamentoModel = (sequelize, dataTypes) => {
    const colunas = {
      idforma_pagamentos: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    idcarrinho: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    idpedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
  },
  idusuarios: {
    type: dataTypes.INTEGER.UNSIGNED,
    allowNull: false
},

    };
  
    const opcoes = {
      tableName: 'forma_pagamentos',
      timestamps: false
    };
  
    const FormaPagamento = sequelize.define('FormaPagamento', colunas, opcoes);

    FormaPagamento.associate = (models) => {
      FormaPagamento.belongsTo(models.Pedido, {
                       
        as: 'pedidos', 
        foreignKey: 'idpedidos'
      });

      HistoricoPedido.associate = (models) => {
        HistoricoPedido.belongsTo(models.Carrinho, {
                         
          as: 'carrinho', 
          foreignKey: 'idcarrinho'
        });

        HistoricoPedido.associate = (models) => {
          HistoricoPedido.belongsTo(models.Usuario, {
                           
            as: 'usuarios', 
            foreignKey: 'idusuarios'
          });
  
    return FormaPagamento;
  };
  }
  }
  }
  module.exports = criarFormaPagamentoModel;