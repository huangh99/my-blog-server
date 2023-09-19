const { DataTypes } = require('@sequelize/core')

const sequelize = require('@/db/sequelize')

const User = sequelize.define(
  'user',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // 唯一
      comment: '用户名，唯一',
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码',
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否为管理员，0不是，1是',
    },
  },
  {
    timestamps: true,
  }
)

// 强制同步数据库（创建数据表）
// User.sync({ force: true })

module.exports = User
