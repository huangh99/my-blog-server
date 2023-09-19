const path = require('path')
const Router = require('koa-router')
const router = new Router({ prefix: '/file' })

router.post('/upload', (ctx) => {
  const file = ctx.request.files.file
  const filePath = `${ctx.origin}/${file.newPath}`
  ctx.body = {
    code: 200,
    message: '上传成功',
    result: {
      fileName: file.originalFilename,
      filePath,
    },
  }
})

module.exports = router
