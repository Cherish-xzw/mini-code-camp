import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            name: 'Course',
            path: '/course',
            component: require('../views/Course.vue')
        },
        {
            name: 'Challenge',
            path: '/challenge/:id',
            component: require('../views/Challenge.vue')
        },
        {
            path:'/',
            component:require('../components/Hello.vue')
        }
    ]
})

