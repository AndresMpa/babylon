const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    field: 'create_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'User',
      timestamps: false,
      tableName: USER_TABLE,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
