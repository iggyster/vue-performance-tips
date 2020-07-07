import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import(/* webpackChunkName: "main" */"../views/Main")
        },
        {
            path: '/functional',
            name: 'functional',
            component: () => import(/* webpackChunkName: "bench-functional" */"../views/Functional")
        },
        {
            path: '/show',
            name: 'show',
            component: () => import(/* webpackChunkName: "bench-show" */"../views/Show")
        },
        {
            path: '/keep-alive',
            component: () => import(/* webpackChunkName: "bench-keep-alive" */"../views/KeepAlive"),
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
            path: '/child',
            name: 'child',
            component: () => import(/* webpackChunkName: "bench-child" */"../views/Child")
        },
        {
            path: '/local-var',
            name: 'local-var',
            component: () => import(/* webpackChunkName: "bench-local" */"../views/LocalVar")
        },
        {
            path: '/deferred',
            name: 'deferred',
            component: () => import(/* webpackChunkName: "bench-deferred" */"../views/Deferred")
        },
        {
            path: '/lazy-component',
            name: 'lazy-component',
            component: () => import("../views/LazyComponent")
        },
        {
            path: '/lazy-module',
            name: 'lazy-module',
            component: () => import("../views/LazyModule")
        },
    ],
});

export default router
