const criarEnderecoModel = (sequelize, dataTypes) => {
  const colunas = {
    idenderecos: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    logradouro: {
      type: dataTypes.STRING,
      allowNull: false
    },
    endereco_numero: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: dataTypes.STRING,
      allowNull: true
    },
    cep: {
      type: dataTypes.INTEGER(8),
      allowNull: false
    },
    bairro: {
      type: dataTypes.STRING,
      allowNull: false
    },
    cidade: {
      type: dataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: dataTypes.STRING(2),
      allowNull: false
    },
    pais: {
      type: dataTypes.STRING,
      allowNull: false
    },
    usuarios_idusuarios: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }



  };

  const opcoes = {
    tableName: 'enderecos',
    timestamps: false
  };

  const Endereco = sequelize.define('Endereco', colunas, opcoes);

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, {

      as: 'usuarios',
      foreignKey: 'usuarios_idusuarios'
    });

  }
  return Endereco;
}
module.exports = criarEnderecoModel;