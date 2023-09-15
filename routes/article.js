const Router = require('koa-router')
const router = new Router({ prefix: '/article' })

const ArticleController = require('../controllers/article_controller')


router.get('/page', ArticleController.queryArticle) // 获取所有文章列表

router.post('/add', ArticleController.createArticle) // 新增

module.exports = router