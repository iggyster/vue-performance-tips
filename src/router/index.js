import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import("../views/Main")
        },
        {
            path: '/functional',
            name: 'functional',
            component: () => import("../views/Functional")
        },
        {
            path: '/show',
            name: 'show',
            component: () => import("../views/Show")
        },
        {
            path: '/keep-alive',
            component: () => import("../views/KeepAlive"),
            children: [
                {
                    path: '',
                    name: 'keep-alive-prev',
                    component: () => import("../components/Benchmarks/KeepAlive/KeepAliveOff"),
                },
                {
                    path: '/next',
                    name: 'keep-alive-next',
                    component: () => import("../components/Benchmarks/KeepAlive/KeepAliveOn"),
                },
            ],
        },
        {
            path: '/child',
            name: 'child',
            component: () => import("../views/Child")
        },
        {
            path: '/local-var',
            name: 'local-var',
            component: () => import("../views/LocalVar")
        },
        {
            path: '/deferred',
            name: 'deferred',
            component: () => import("../views/Deferred")
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
