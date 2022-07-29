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


  }, { tablename: 'carrinho' })

  Carrinho.associate = (models) => {
    Carrinho.belongsTo(models.Product, {
      constraint: true,
      foreignKey: 'produto_id'
    })

    Carrinho.belongsTo(models.Usuarios, {
      constraint: true,
      foreignKey: 'usuario_id'
    })
  }/*
   Carrinho.associate = (models) => {
     Carrinho.belongsTo(models.User, {
       constraint: true,
       foreignKey: 'usuario_id'
     })
   }*/
  return Carrinho
}

