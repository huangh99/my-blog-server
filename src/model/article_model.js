const { DataTypes } = require('@sequelize/core')

const sequelize = require('@/db/sequelize')

const ArticleModel = sequelize.define(
  'article',
  {
    title: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      defaultValue: '',
      comment: '文章标题',
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
      comment: '文章内容',
    },
    author: {
      type: DataTypes.CHAR(64),
      allowNull: true,
      comment: '作者',
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否删除，true是，false否',
    }
  },
  {
    timestamps: true,
  }
)

// 强制同步数据库（创建数据表）
// ArticleModel.sync({ force: true })

module.exports = ArticleModel
