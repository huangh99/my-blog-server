const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/',(ctx,next)=>{
  ctx.body = 'hello koa'
})

router.get('/news',(ctx,next)=>{
  ctx.body = '新闻'
})

router.get('/data',(ctx,next)=>{
  console.log(ctx);
  ctx.body = ctx
})

// app.use(async(ctx)=>{
//   ctx.body = 'hello'
// })

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3600,()=>{
  console.log('Server is running on http://localhost:3600')
})