const { createArticleInfo, getArticlePage } = require('@/service/article_service')

class ArticleController {
  async queryArticle(ctx){
    const res = await getArticlePage()
    ctx.body = {
      code:200,
      result:res
    }
  }

  async createArticle(ctx) {
    const {title,content} = ctx.request.body
    const res = await createArticleInfo(title,content)

    ctx.body = {
      code:200,
      result:res
    }
  }

  async testPost(ctx) {
    // 1.获取数据
    const { name } = ctx.request.body
    // 2.操作数据库
    const res = await createUser(name)
    // 3.返回结果
    console.log(res);
    ctx.body = res
  }
}

module.exports = new ArticleController()