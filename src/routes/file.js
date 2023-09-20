const Router = require('koa-router')
const router = new Router({ prefix: '/file' })
const FileController = require('@/controllers/file_controller')

router.post('/upload', FileController.upload)

module.exports = router
