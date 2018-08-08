var Router = require('koa-router');

var router = new Router();

router.get('/article', (ctx, next) => {
  // ctx.router available
  ctx.body = {data: 'article'}
});

module.exports = router;
