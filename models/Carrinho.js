const criarCarrinhoModel = (sequelize, dataTypes) => {
    const colunas = {
      idcarrinho: {
        type: dataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  
    valor_total: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    quantidade: {
        type: dataTypes.INTEGER,
        allowNull: false
 },
    cupom_desconto: {
    type: dataTypes.STRING,
    allowNull: true
}

    };
  
    const opcoes = {
      tableName: 'carrinho',
      timestamps: false
    };
    
  
    const Carrinho = sequelize.define('Carrinho', colunas, opcoes);
  
    return Carrinho;
  };
  
  module.exports = criarCarrinhoModel;