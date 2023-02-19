import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/views/HomeView.vue'
import Test from "@/components/Test.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home-view',
            component: HomeView
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
    ],
})
