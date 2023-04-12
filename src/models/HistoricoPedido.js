const criarHistoricoPedidoModel = (sequelize, dataTypes) => {
  const colunas = {
    idhistorico_pedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

<<<<<<< HEAD
    status_pedido: {
      type: dataTypes.STRING,
      allowNull: false
    },
    idpedidos: {
=======
    pedidos_idpedidos: {
>>>>>>> developer
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },

<<<<<<< HEAD
=======
    data_compra: {
      type: dataTypes.DATE,
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
>>>>>>> developer

  };

  const opcoes = {
    tableName: 'historico_pedidos',
    timestamps: false
  };

  const HistoricoPedido = sequelize.define('HistoricoPedido', colunas, opcoes);

  HistoricoPedido.associate = (models) => {
    HistoricoPedido.belongsTo(models.Pedido, {

      as: 'pedidos',
<<<<<<< HEAD
      foreignKey: 'idpedidos'
    });

=======
      foreignKey: 'pedidos_idpedidos'
    });
  
    HistoricoPedido.belongsTo(models.Usuario, {

      as: 'usuarios',
      foreignKey: 'usuarios_idusuarios'
    });
>>>>>>> developer

  }
  return HistoricoPedido;
};

module.exports = criarHistoricoPedidoModel;