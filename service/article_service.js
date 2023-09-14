const ArticleModel = require('../model/article_model')
class ArticleService{
  async createArticleInfo(title,content){
    try {
      const res = await ArticleModel.create({title,content})
      return res.dataValues
    } catch (error) {
      log.error(error)
    }
  }
}

module.exports = new ArticleService()