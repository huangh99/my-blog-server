const errorHandler = async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) {
      ctx.body = {
        code: 404,
        message: '访问的内容不存在',
      }
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = errorHandler
