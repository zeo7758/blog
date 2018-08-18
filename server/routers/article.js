const Router = require('koa-router');
const router = new Router();
const article = require('./../models/Articles');
const mkd = require('markdown-it')();
// 提交文件
router.post('/addArticle', async (ctx, next) => {
  // ctx.router available
  let params = ctx.request.body;
  // ctx.request.body
  let {title, date1, desc, articleId} = params;
  
  title = title.replace(/[<">']/g, (target) => {
      return {
          '<': '&lt;',
          '"': '&quot;',
          '>': '&gt;',
          "'": '&#39;'
      }[target]
  });

  // console.log(params);
  let userName = ctx.cookies.get('userName');
  let userId = ctx.cookies.get('userId');
  let md = mkd.render(desc)
  ctx.body = await new Promise((resolve, reject) => {
      if(!userId) {
          resolve({
              code:402,
              message:'未登录'
          })
      }
      if(articleId) {
          // 有articleId,编辑已经有的文章
          let type = params.type || 0;

          article.findOne({userId:1,articleId: articleId}, function(err, doc) {
              doc.set({
                  articleName: title,
                  content:desc,
                  time:date1,
                  type:type,
                  md,
              })
              doc.save( function (err, articleList) {
                  if(err) {
                      return reject(err)
                  }else {
                      resolve({
                         code:200,
                         success: true,
                         message:'发表文章成功'
                     })
                  }
              });
          })
      }else {
          article.find({userId:userId}, (err, doc) => {

              let art = new article({
                  userId: userId,
                  articleName: title,
                  content:desc,
                  time:date1,
                  type:1,
                  md,
                  articleId: doc.length + 1
              })
              art.save( (err, articleList) => {
                  if(err) {
                      return reject(err)
                  }else {
                      resolve({
                         code:200,
                         success: true,
                         message:'发表文章成功'
                     })
                  }
              });
          })
      }


      // article.find({userId:userId }, (err, doc) => {
      //     if (err) {
      //         reject(err)
      //     }else {
      //         doc.push()
      //
      //     }
      // })
      // article.insert({
      //     userId: userId,
      //     articleName: title,
      //     content:desc,
      //     time:date1,
      //     type:1,
      //     // articleId: articleList.
      // }, (err, article) => {

          // let articleList = article.articleList;
          // articleList.push({
          //     articleName: title,
          //     content:desc,
          //     time:date1,
          //     type:1,
          //     // articleId: articleList.length
          // })
          // article.set({
          //     articleList
          // })
          // article.save( (err, articleList) => {
          //     if(err) {
          //         return reject(err)
          //     }
          //
          // });
      })
});

// 暂存文章
router.post("/tempSaveArticle", async (ctx, next) => {
      let userId = ctx.cookies.get('userId');
      let params = ctx.request.body;
      let {title, date1, desc, articleId} = params;
      // articleId = 1
      // ctx.body = await new Promise((resolve, reject) => {
      ctx.body = await new Promise((resolve, reject) => {
          if(!userId) {
              resolve({
                  code:402,
                  message:'未登录'
              })
          }
          article.findOne({userId:1,articleId: articleId}, function(err, doc) {
              doc.set({
                  articleName: title,
                  content:desc,
                  time:date1,
                  type:0
              })
              doc.save( function (err, articleList) {
                  if(err) {
                      return reject(err)
                  }else {
                      resolve({
                         code:200,
                         success: true,
                         message:'发表文章成功'
                     })
                  }
              });
          })
      })
})

// 获取文章列表，分为未登录和已登录，未登录，展示type = 1的 文章，表示已经完成--表示访客身份，无编辑按钮。
router.get('/getArticleList', async (ctx, next) => {
     let userId = ctx.cookies.get('userId');
     let {pageIndex, limit} = ctx.request.query;
     // console.log( ctx.request.query)
     limit = Number(limit) || 10;
     pageIndex = Number(pageIndex) || 0;
     let skip = (pageIndex - 1) * limit || 0 ;
     if(skip<0) {skip = 0};
     let Num = 0
     // skip(1)..limit(limit)
     console.log('skip',skip, limit)
     await article.find({userId: 1}, (err, doc) => {
         Num = doc.length
     })
     // console.log(Num)
     ctx.body = await new Promise((resolve, reject) => {
         article.find({userId: 1}).skip(skip).limit(limit).exec( (err, article) => {
                // console.log(11111111);

                if(err) {
                    // console.log(222,err);
                    reject({
                        code: 202,
                        success: false,
                        number:Num,
                        message: '未搜索到'
                    })
                }else {
                    // console.log(3333);
                    resolve({
                        code:200,
                        success: true,
                        number:Num,
                        message: article
                    })
                }
            }
        )
     })

     // article.find({userId: 3},(err, article) => {
     //     // console.log(article);
     //     if(err) {
     //         ctx.body = {
     //             code: 202,
     //             success: false,
     //             message: '未搜索到'
     //         }
     //     }else {
     //         ctx.body = {
     //             code:200,
     //             success: true,
     //             message: article
     //         }
     //     }
     // })
})

// 查询已经有的文章
router.get('/queryArcticle', async (ctx, next) => {
    let articleId = ctx.request.query.articleId || 0;

    console.log(articleId);
    await article.findOne({articleId: articleId}, (err, doc) => {
        if(err) {
            ctx.body = {
                code: 202,
                success: false,
                message: err
            }
        }else {
            ctx.body = {
                code: 200,
                success: true,
                message: doc
            }
        }

    })

})
module.exports = router;
