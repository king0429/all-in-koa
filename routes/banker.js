const router = require('koa-router')()

router.get('/banker/register', function (ctx, next) {
  ctx.body = '注册'
})

module.export = router
