const criarPedidoModel = (sequelize, dataTypes) => {
<<<<<<< HEAD
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
=======
  const colunas = {
    idpedidos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    codigo_pedido: {
      type: dataTypes.INTEGER,
      allowNull: false
  },
    
    usuarios_idusuarios: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    data_pedido: {
        type: dataTypes.DATE,
        allowNull: false
 },
    subtotal: {
      type: dataTypes.STRING,
      allowNull: false
    },

    total: {
      type: dataTypes.STRING,
      allowNull: false
    },

    valor_frete: {
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
      tableName: 'pedidos',
      timestamps: false
    };
  
    const Pedido = sequelize.define('Pedido', colunas, opcoes);
<<<<<<< HEAD
  
    return Pedido;
=======

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {

      as: 'usuarios',
      foreignKey: 'usuarios_idusuarios'
    });

  }
  return Pedido;
>>>>>>> developer
  };
  
  module.exports = criarPedidoModel;