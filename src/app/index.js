const path = require('path')
const Koa = require('koa')
const staticServe = require('koa-static');
const { koaBody } = require('koa-body')
const cors = require('@koa/cors')
const loadRouter = require('@/routes')
const errorHandler = require('@/middlewares/errorHandler')
const beforeUpload = require('@/utils/upload')

const app = new Koa()

app.use(cors()) // 处理跨域

app.use(errorHandler) // 错误处理中间件

app.use(staticServe('src/public/upload')) // 首先在src/public/upload文件夹下加载静态资源
app.use(staticServe('src/public')) // src/public/upload文件夹中没有就到src/public下加载

app.use(koaBody({
  multipart: true, // 解析多个文件
  formidable: {
    uploadDir: path.resolve(__dirname, '../public/upload'),
    keepExtensions: true, //保留文件后缀
    maxFieldsSize: 10 * 1024 * 1024, // 文件上传大小限制
    onFileBegin: (name,file) => beforeUpload(name,file,app),
    onError(err) {
      console.error(err)
    },
  },
}))

loadRouter(app)

module.exports = app
