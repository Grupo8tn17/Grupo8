const criarCarrinhoModel = (sequelize, dataTypes) => {
    const colunas = {
      idcarrinho: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    valor_total: {
        type: dataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    quantidade: {
        type: dataTypes.INTEGER,
        allowNull: false
 },
    cupom_desconto: {
    type: dataTypes.STRING,
    allowNull: true
},
idusuarios: {
  type: dataTypes.INTEGER.UNSIGNED,
  allowNull: false
},

    };
  
    const opcoes = {
      tableName: 'carrinho',
      timestamps: false
    };
    
  
    const Carrinho = sequelize.define('Carrinho', colunas, opcoes);

    Carrinho.associate = (models) => {
      Carrinho.belongsTo(models.Usuario, {
                       
        as: 'usuarios', 
        foreignKey: 'idusuarios'
      });
  
  };
  return Carrinho;
  }
  
  module.exports = criarCarrinhoModel;