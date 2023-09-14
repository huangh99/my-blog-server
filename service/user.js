const User = require('../model/user')

class UserService{
  async createUser(username,password){
    // 插入数据
    const res = await User.create({
      username:username,
      password // ES6属性名和属性值相同可简写
    })

    return res.dataValues
  }
}

module.exports = new UserService()