import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/index/main'
import about from '@/page/about/about'
import login from '@/page/login/login'
import editor from '@/page/editor/editor'
import articleList from '@/page/articleList/articleList'
import singerArticle from '@/page/singerArticle/singerArticle'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'mains',
            }
        },
        {
            path: '/main',
            name: 'mains',
            component: main
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/articleList',
            name: 'articleList',
            component: articleList
        },
        {
            path: '/editor',
            name: 'editor',
            component: editor
        },
        {
            path: '/singerArticle/:id',
            name: 'singerArticle',
            component: singerArticle
        },
    ]
})
