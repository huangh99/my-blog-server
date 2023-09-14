const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const UserController = require('../controllers/user')


router.get('/testGet', UserController.testGet) // 获取所有的 tag 列表

router.post('/testPost', UserController.testPost) // 注册

module.exports = router