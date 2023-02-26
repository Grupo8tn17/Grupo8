const criarPedidoModel = (sequelize, dataTypes) => {
    const colunas = {
      idpedidos: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    codigo_pedido: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    data_pedido: {
        type: dataTypes.DATE,
        allowNull: false
 }

    };
  
    const opcoes = {
      tableName: 'pedidos',
      timestamps: false
    };
  
    const Pedido = sequelize.define('Pedido', colunas, opcoes);
  
    return Pedido;
  };
  
  module.exports = criarPedidoModel;