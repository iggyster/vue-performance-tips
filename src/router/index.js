import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import RGB from '@/views/RGB'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/rgb',
            name: 'rgb',
            component: RGB,
        },
    ],
});

export default router
