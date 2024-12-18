import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import VerifyEmail from '@/views/VerifyEmail.vue';
import ResetPassword from '@/views/ResetPassword.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'default.layout',
            component: DefaultLayout,
            meta: {
                breadcrumb: 'Home'
            },
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
                },
                {
                    path: 'about',
                    name: 'about',
                    component: AboutView,
                    meta: {
                        breadcrumb: 'About'
                    }
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: ContactView,
                    meta: {
                        breadcrumb: 'Contact'
                    }
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'not-found',
                    component: NotFoundView,
                    meta: {
                        breadcrumb: 'Not Found'
                    }
                }
            ]
        }
    ]
});

export default router;
