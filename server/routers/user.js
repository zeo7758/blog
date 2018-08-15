const router = require('koa-router')();
const mongoose = require('mongoose');
const user = require('../models/User');
// console.log(user);
mongoose.connect('mongodb://localhost:27017/blog');

router.post('/signIn', async(ctx, next) => {
     console.log('signIn');
     let params = ctx.request.body;
     let {name, password} = params;

    await user.findOne({userName: name, passWord: password}, (err,res) => {
         if(err) {
             ctx.body = {
                 status: 202,
                 success: false,
                 msg: err,
             }
         }else {
             if(res) {
                  ctx.cookies.set (
                      "userName",res['userName']
                  )
                  ctx.cookies.set (
                      "userId",res['userId']
                  )
                   // userId: res['userId']
                 ctx.body = {
                     status: 200,
                     success: true,
                     msg: '登录成功',
                 }

             }else {
                 console.log(333);
                 ctx.body = {
                      status: 203,
                      success: false,
                      msg: '登录失败',
                  }

             }
         }
     })


});

router.post('/signOut', async(ctx, next) => {
  // ctx.router available
  console.log('signout');
  ctx.cookies.set (
      "userName", null
  )
  ctx.cookies.set (
      "userId", null
  )
  ctx.body = {data: true}
});

module.exports = router
