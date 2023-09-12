const Koa = require('koa')
const { koaBody } = require('koa-body')
const loadRouter = require('./routes')

const config = require('./config/default')

const app = new Koa()

app.use(koaBody())

loadRouter(app)

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`)
})
