const {
  createArticleInfo,
  getArticlePage,
  getArticleDetail,
  updateArticleInfo,
  destroyArticleInfo
} = require('@/service/article_service')

class ArticleController {
  async queryArticle(ctx) {
    const { pageNum = 1, pageSize = 10, isDelete = false } = ctx.request.query
    try {
      const res = await getArticlePage(Number(pageNum), Number(pageSize), !!isDelete)
      ctx.body = {
        code: 200,
        message: '查询成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }

  async queryArticleDetail(ctx) {
    const { id } = ctx.query
    try {
      const res = await getArticleDetail(id)
      ctx.body = {
        code: 200,
        message: '查询成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createArticle(ctx) {
    const { title, content } = ctx.request.body
    try {
      const res = await createArticleInfo(title, content)
      ctx.body = {
        code: 200,
        message: '新增成功',
        result: {
          id: res.id
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  async updateArticle(ctx) {
    const { id, title, content } = ctx.request.body
    try {
      await updateArticleInfo(id, { title, content })
      ctx.body = {
        code: 200,
        message: '更新成功',
        result: null
      }
    } catch (error) {
      console.error(error)
    }
  }

  async deleteArticle(ctx) {
    const { id } = ctx.request.body
    try {
      await updateArticleInfo(id, { isDelete: true })
      ctx.body = {
        code: 200,
        message: '删除成功',
        result: null
      }
    } catch (error) {
      console.error(error)
    }
  }

  async restoreArticle(ctx) {
    const { id } = ctx.request.body
    try {
      await updateArticleInfo(id, { isDelete: false })
      ctx.body = {
        code: 200,
        message: '移出成功',
        result: null
      }
    } catch (error) {
      console.error(error)
    }
  }

  async destroyArticle(ctx) {
    const { id } = ctx.request.body
    try {
      await destroyArticleInfo(id)
      ctx.body = {
        code: 200,
        message: '删除成功',
        result: null
      }
    } catch (error) {
      console.error(error)
    }
  }

  async publishArticle(ctx) {
    // 1.获取数据
    const { id } = ctx.request.body
    // 2.操作数据库
    const res = await createUser(name)
    // 3.返回结果
    console.log(res)
    ctx.body = res
  }
}

module.exports = new ArticleController()
