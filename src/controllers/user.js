const { createUser } = require('@/service/user')

class UserController {
  async testGet(ctx) {

    console.log(ctx.request.query);
    ctx.body = ctx.request.query
  }

  async testPost(ctx) {
    // 1.获取数据
    const { username, password } = ctx.request.body
    // 2.操作数据库
    const res = await createUser(username, password)
    // // 3.返回结果
    ctx.body = res
  }
}

module.exports = new UserController()