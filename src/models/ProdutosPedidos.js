const criarProdutosPedidosModel = (sequelize, dataTypes) => {
  const colunas = {
    idprodutos_pedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    produtos_idprodutos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    usuarios_idusuarios: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    pedidos_idpedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }

  };

  const opcoes = {
    tableName: 'produtos_pedidos',
    timestamps: false
  };

  const ProdutosPedidos = sequelize.define('ProdutosPedidos', colunas, opcoes);

  ProdutosPedidos.associate = (models) => {
    ProdutosPedidos.belongsTo(models.Produto, {

      as: 'produtos',
      foreignKey: 'produtos_idprodutos'
    });

    ProdutosPedidos.belongsTo(models.Usuario, {

      as: 'Usuario',
      foreignKey: 'usuarios_idusuarios'
    });

    ProdutosPedidos.belongsTo(models.Pedido, {

      as: 'pedidos', 
      foreignKey: 'pedidos_idpedidos'
    })

  };
  return ProdutosPedidos;
}

module.exports = criarProdutosPedidosModel;