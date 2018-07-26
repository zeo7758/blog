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

app.listen('8888')
