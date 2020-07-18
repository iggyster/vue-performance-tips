import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? '/vue-performance-tips/' : '/',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import(/* webpackChunkName: "main" */"../views/Main")
        },
        {
            path: '/functional-component',
            name: 'functional-component',
            component: () => import(/* webpackChunkName: "bench-functional" */"../views/Functional")
        },
        {
            path: '/conditional-rendering',
            name: 'conditional-rendering',
            component: () => import(/* webpackChunkName: "bench-show" */"../views/Conditional")
        },
        {
            path: '/keep-alive',
            component: () => import(/* webpackChunkName: "bench-keep-alive" */"../views/Keep"),
            children: [
                {
                    path: '',
                    name: 'keep-alive-prev',
                    component: () => import(/* webpackChunkName: "bench-keep-alive-off" */"../components/Benchmarks/KeepAlive/KeepAliveOff"),
                },
                {
                    path: '/next',
                    name: 'keep-alive-next',
                    component: () => import(/* webpackChunkName: "bench-keep-alive-on" */"../components/Benchmarks/KeepAlive/KeepAliveOn"),
                },
            ],
        },
        {
            path: '/child-component',
            name: 'child-component',
            component: () => import(/* webpackChunkName: "bench-child" */"../views/Child")
        },
        {
            path: '/local-var',
            name: 'local-var',
            component: () => import(/* webpackChunkName: "bench-local" */"../views/LocalVar")
        },
        {
            path: '/deferred-components',
            name: 'deferred-components',
            component: () => import(/* webpackChunkName: "bench-deferred" */"../views/Deferred")
        },
    ],
});

export default router
