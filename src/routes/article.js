const Router = require('koa-router')
const router = new Router({ prefix: '/article' })

const ArticleController = require('@/controllers/article_controller')


router.get('/page', ArticleController.queryArticle) // 获取所有文章列表

router.get('/detail', ArticleController.queryArticleDetail) // 获取文章详情

router.post('/add', ArticleController.createArticle) // 新增

router.post('/update', ArticleController.updateArticle) // 保存

router.post('/delete', ArticleController.deleteArticle) // 删除（逻辑删除）

router.post('/restore', ArticleController.restoreArticle) // 撤销逻辑删除

router.post('/destroy', ArticleController.destroyArticle) // 销毁（物理删除）

router.post('/publish', ArticleController.publishArticle) // 发表

module.exports = router