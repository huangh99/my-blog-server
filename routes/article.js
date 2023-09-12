const Router = require('koa-router')
const router = new Router({ prefix: '/article' })

const ArticleController = require('../controllers/article')


router.get('/testGet', ArticleController.testGet) // 获取所有的 tag 列表

router.post('/testPost', ArticleController.testPost) // 注册

module.exports = router