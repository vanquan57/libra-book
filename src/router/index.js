import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'default.layout',
            component: DefaultLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: 'auth/login',
                    name: 'auth.login',
                    component: LoginView
                }
            ]
        }
    ]
});

export default router;
