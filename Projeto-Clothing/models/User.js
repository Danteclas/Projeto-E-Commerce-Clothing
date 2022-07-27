module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    foto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data_criacao: {
      type: DataTypes.DATE,
      allowNull: false
    },

    carrinho_produto_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      allowNull: false
    }
  }, { tablename: 'users', timeStamp: true })

  Users.associate = (models) => {
    Users.belongsTo(models.Carrinho, {
      constraint: true,
      foreignKey: 'carrinho_produto_id'
    })
  }

  return Users;
}