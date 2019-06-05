const router = require('koa-router')()
const indexModule = require('../modules/index')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
console.log(indexModule)

router.get('/string', indexModule.hello)

router.get('/json', indexModule.database)

module.exports = router
