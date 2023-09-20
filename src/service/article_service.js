const ArticleModel = require('@/model/article_model')
class ArticleService {
  async createArticleInfo(title, content) {
    const res = await ArticleModel.create({ title, content })
    return res
  }

  async getArticlePage(pageNum, pageSize, isDelete) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await ArticleModel.findAndCountAll({
      where: {
        isDelete
      },
      attributes: ['id', 'title', 'content'],
      offset: offset,
      limit: pageSize
    })
    return {
      total: count,
      list: rows
    }
  }

  async getArticleDetail(id) {
    const res = await ArticleModel.findByPk(id, {
      attributes: { exclude: ['isDelete'] }
    })
    return res
  }

  async updateArticleInfo(id, { title, content, author, isDelete }) {
    const updateOpt = {}
    title && Object.assign(updateOpt, { title })
    content && Object.assign(updateOpt, { content })
    author && Object.assign(updateOpt, { author })
    if(isDelete || isDelete === false){
      Object.assign(updateOpt, { isDelete })
    }
    const res = await ArticleModel.update(updateOpt, {
      where: { id }
    })
    return res
  }

  async destroyArticleInfo(id) {
    const res = await ArticleModel.destroy({
      where: { id }
    })
    return res
  }
}

module.exports = new ArticleService()
