import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import VerifyEmail from '@/views/VerifyEmail.vue';
import ResetPassword from '@/views/ResetPassword.vue';

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
                },
                {
                    path: 'auth/register',
                    name: 'auth.register',
                    component: RegisterView
                },
                {
                    path: 'auth/verify-email',
                    name: 'auth.verify-email',
                    component: VerifyEmail
                },
                {
                    path: 'auth/password/reset',
                    component: ResetPassword,
                    name: 'reset-password'
                }
            ]
        }
    ]
});

export default router;
