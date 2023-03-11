const criarHistoricoPedidoModel = (sequelize, dataTypes) => {
  const colunas = {
    idhistorico_pedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    status_pedido: {
      type: dataTypes.STRING,
      allowNull: false
    },
    idpedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },


  };

  const opcoes = {
    tableName: 'historico_pedidos',
    timestamps: false
  };

  const HistoricoPedido = sequelize.define('HistoricoPedido', colunas, opcoes);

  HistoricoPedido.associate = (models) => {
    HistoricoPedido.belongsTo(models.Pedido, {

      as: 'pedidos',
      foreignKey: 'idpedidos'
    });


  }
  return HistoricoPedido;
};

module.exports = criarHistoricoPedidoModel;