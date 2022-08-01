module.exports = (sequelize, DataTypes) => {
  const Estoque = sequelize.define('Estoque', {

    estoque_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qtd_total_estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },


  }, { tablename: 'estoque' })
  /*  Estoque.associate = (models) => {
     Estoque.belongsTo(models.Carrinho, {
       constraint: true,
       foreignKey: 'carrinho_produto_id',
     })
   }
  */
  return Estoque;
}

