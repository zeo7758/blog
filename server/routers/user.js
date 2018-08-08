const router = require('koa-router')();

router.get('/signIn', async(ctx, next) => {
     console.log('signin get');
  ctx.body = {data: 1}
});
router.post('/signIn', async(ctx, next) => {
     console.log('signin');
     let params = ctx.request.body
     ctx.body = {data: params}
});

router.post('/signOut', async(ctx, next) => {
  // ctx.router available
  console.log('signout');
  ctx.body = {data: true}
});

module.exports = router
