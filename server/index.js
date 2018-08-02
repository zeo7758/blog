const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const router = require('koa-router');
const views = require('koa-views');
const staticCache = require('koa-static-cache');
const config = require('./config/default');


const app = new Koa();

// session存储配置
// const sessionMysqlConfig= {
//   user: config.database.USERNAME,
//   password: config.database.PASSWORD,
//   database: config.database.DATABASE,
//   host: config.database.HOST,
// }

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig)
// }))


// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
// app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
//   maxAge: 365 * 24 * 60 * 60
// }))
// app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
//   maxAge: 365 * 24 * 60 * 60
// }))
 // mongod --dbpath D:\mongo\data --logpath D:\mongo\log\mongo.log --journal

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
}))

// 路由
//app.use(require('./routers/signin.js').routes())
app.use(require('./routers/signUp.js').routes())
//app.use(require('./routers/posts.js').routes())
//app.use(require('./routers/signout.js').routes())





app.listen('8888')
