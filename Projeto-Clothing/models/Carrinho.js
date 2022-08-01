module.exports = (sequelize, DataTypes) => {
  const Carrinho = sequelize.define('Carrinho', {
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usuario_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //configurar as relações

  }, { tablename: 'carrinho' })

  Carrinho.associate = (models) => {
    Carrinho.belongsTo(models.Produtos, {
      constraint: true,
      foreignKey: 'produto_id'
    }),

      Carrinho.belongsTo(models.Usuarios, {
        constraint: true,
        foreignKey: 'usuario_id'
      })
  }
  return Carrinho;
}

