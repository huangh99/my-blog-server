const { Sequelize } = require('@sequelize/core')
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('@/config/default')

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
  port: MYSQL_PORT,
  define: {
    freezeTableName: true // 强制表名称等于模型名称
  }
})

// sequelize.authenticate().then(()=>{
//   console.log('Connection has been established successfully.');
// }).catch(error=>{
//   console.error('Unable to connect to the database:', error);
// })

module.exports = sequelize