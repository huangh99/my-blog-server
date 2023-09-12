class ArticleController {
  // 初始化数据 关于页面（用于评论关联）
  async testGet(ctx) {
    // const result = await ArticleModel.findOne({ where: { id: -1 } })
    // if (!result) {
    //   ArticleModel.create({
    //     id: -1,
    //     title: '关于页面',
    //     content: '关于页面存档，勿删'
    //   })
    // }

    console.log(ctx.request.query);
    ctx.body = ctx.request.query
  }

  async testPost(ctx) {
    // const result = await ArticleModel.findOne({ where: { id: -1 } })
    // if (!result) {
    //   ArticleModel.create({
    //     id: -1,
    //     title: '关于页面',
    //     content: '关于页面存档，勿删'
    //   })
    // }

    console.log(ctx.request.body);
    ctx.body = ctx.request.body
  }
}

module.exports = new ArticleController()
// module.exports = ArticleController