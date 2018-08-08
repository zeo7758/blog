import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/index/main'
import about from '@/page/about/about'
import login from '@/page/login/login'
import editor from '@/page/editor/editor'
import articleList from '@/page/articleList/articleList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/main',
            name: 'main',
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
    ]
})
