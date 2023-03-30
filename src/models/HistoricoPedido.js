const criarHistoricoPedidoModel = (sequelize, dataTypes) => {
  const colunas = {
    idhistorico_pedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    pedidos_idpedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },

    data_compra: {
      types: dataTypes.DATE,
      allowNull: false
    },

    status_pedido: {
      type: dataTypes.STRING,
      allowNull: false
    },
   
    usuarios_idusuarios: {
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
  
    HistoricoPedido.belongsTo(models.Usuario, {

      as: 'usuarios',
      foreignKey: 'idusuarios'
    });

  }
  return HistoricoPedido;
};

module.exports = criarHistoricoPedidoModel;