const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin
const moment = require('moment');
const fs = require('fs')
// 注册页面
router.get('/signup', async(ctx, next) => {
    await checkNotLogin(ctx)
    await ctx.render('signup', {
        session: ctx.session,
    })
})

// module.exports = router

// 
// conset Router = require('koa-router');
// const router = new Router();
//
// router.get('/signUp', async (ctx, next) => {
//     await checkNotLogin(ctx);
//     await ctx.render('signup', {
//         session: ctx.session,
//     })
// })

module.exports = router;
