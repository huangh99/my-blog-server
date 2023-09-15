const Koa = require('koa')
const { koaBody } = require('koa-body')
const cors = require('koa-cors')
const loadRouter = require('../routes')
const errorHandler = require('../middlewares/errorHandler')

const app = new Koa()
app.use(cors())
app.use(errorHandler) // 错误处理中间件
app.use(koaBody())
loadRouter(app)

module.exports = app