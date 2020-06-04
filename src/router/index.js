import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import("../views/Main")
        },
        {
            path: '/functional',
            name: 'Functional',
            component: () => import("../views/Functional")
        }
    ],
})

export default router
