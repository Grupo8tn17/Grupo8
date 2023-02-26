const criarHistoricoPedidoModel = (sequelize, dataTypes) => {
    const colunas = {
      idhistorico_pedidos: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    status_pedido: {
        type: DataTypes.STRING,
        allowNull: false
    },

    };
  
    const opcoes = {
      tableName: 'historico_pedidos',
      timestamps: false
    };
  
    const HistoricoPedido = sequelize.define('HistoricoPedido', colunas, opcoes);
  
    return HistoricoPedido;
  };
  
  module.exports = criarHistoricoPedidoModel;