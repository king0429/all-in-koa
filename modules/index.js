const db = require('../config/mysql')

module.exports = {
  hello: async (ctx, next) => {
    ctx.body = 'hello koa2'
  },
  database: async (ctx, next) => {
    const list = await db.query(`SELECT * FROM api_account limit 3;`)
    console.log(list)
    try {
      ctx.body = {a: list[0]};      
    } catch {
      ctx.body = {code: 500}
    }
  }
}