const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
// const ejs = require('ejs');
const session = require('koa-session-minimal');
const route = require('koa-router');
const views = require('koa-views');
const staticCache = require('koa-static-cache');
const config = require('./config/default');
const koaStatic = require('koa-static');

const user = require('./routers/user');
const article = require('./routers/article');
// const article = require('./routers/article');

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
// const static = koaStatic(path.join(__dirname , './../dist/static'))
//
// app.use(static)
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
app.use(user.routes())
app.use(article.routes());


app.listen(config.port, () => {
    console.log('localhost:3001');
})
