const { DataTypes } = require('@sequelize/core')

const sequelize = require('../db/sequelize')

const ArticleModel = sequelize.define(
  'article',
  {
    title: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '文章标题',
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
      comment: '文章内容',
    },
    // author: {
    //   type: DataTypes.CHAR(64),
    //   allowNull: false,
    //   comment: '作者',
    // },
  },
  {
    timestamps: true,
  }
)

// 强制同步数据库（创建数据表）
// Article.sync({ force: true })

module.exports = ArticleModel
