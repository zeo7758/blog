const router = require('koa-router')();
const mongoose = require('mongoose');
const user = require('../models/User');
// console.log(user);
mongoose.connect('mongodb://localhost:27017/blog');

router.post('/signIn', async(ctx, next) => {
     console.log('signi2');
     let params = ctx.request.body;
     let {name, password} = params;

    await user.findOne({userName: name, passWord: password}, (err,res) => {
         if(err) {
             console.log(111);
             ctx.body = {
                 status: 202,
                 success: false,
                 msg: err,
             }
         }else {
             if(res) {
                  console.log(res);
                  ctx.session = {
                      userName:res['userName'],
                      userId: res['userId']
                  }
                 ctx.body = {
                     status: 200,
                     success: true,
                     msg: '登录成功',
                 }

             }else {
                 console.log(333);
                 ctx.body =  {
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
  ctx.body = {data: true}
});

module.exports = router
