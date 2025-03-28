import { useAuthStore } from '@/stores/authStore'
import NoticiaDetalhadaView from '@/views/subPages/NoticiaDetalhadaView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Noticias from '../views/subPages/NoticiasView.vue'

// Layouts
import AdminLayout from '@/layouts/AdminLayout.vue'

// Admin views
import AdminConfiguracoes from '@/views/admin/AdminConfiguracoes.vue'
import AdminCursos from '@/views/admin/AdminCursos.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'
import AdminEmpresas from '@/views/admin/AdminEmpresas.vue'
import AdminEventos from '@/views/admin/AdminEventos.vue'
import AdminNoticias from '@/views/admin/AdminNoticias.vue'
import AdminRelatorios from '@/views/admin/AdminRelatorios.vue'
import AdminUsuarios from '@/views/admin/AdminUsuarios.vue'
import AdminVagas from '@/views/admin/AdminVagas.vue'

import HomeView from '@/views/HomeView.vue'

// Importe a página de cadastro
import CadastroView from '@/views/auth/CadastroView.vue'
import LoginView from '@/views/auth/LoginView.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: () => {
            const authStore = useAuthStore()
            return authStore.isAuthenticated ? (authStore.isAdmin ? '/admin' : '/home') : '/home'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: "/companies",
        name: "companies",
        component: () => import('@/views/subPages/CompaniesView.vue')
    },
    {
        path: "/eventos",
        name: "events",
        component: () => import('@/views/subPages/EventsView.vue')
    },
    {
        path: '/noticias',
        name: 'noticias',
        component: Noticias
    },
    {
        path: '/noticias/:id',
        name: 'noticia-detalhada',
        component: NoticiaDetalhadaView
    },
    {
        path: '/sobre-nos',
        name: 'QuemSomos',
        component: () => import('@/views/subPages/QuemSomosView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/PageNotFound.vue')
    },
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true, requiresAdmin: true },
        children: [
            {
                path: '',
                name: 'admin-dashboard',
                component: AdminDashboard,
                meta: {
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    order: 1
                }
            },
            {
                path: 'usuarios',
                name: 'admin-usuarios',
                component: AdminUsuarios,
                meta: {
                    title: 'Gerenciar Usuários',
                    icon: 'mdi-account-group',
                    order: 2
                }
            },
            {
                path: 'noticias',
                name: 'admin-noticias',
                component: AdminNoticias,
                meta: {
                    title: 'Gerenciar Notícias',
                    icon: 'mdi-newspaper',
                    order: 3
                }
            },
            {
                path: 'eventos',
                name: 'admin-eventos',
                component: AdminEventos,
                meta: {
                    title: 'Gerenciar Eventos',
                    icon: 'mdi-calendar',
                    order: 4
                }
            },
            {
                path: 'empresas',
                name: 'admin-empresas',
                component: AdminEmpresas,
                meta: {
                    title: 'Gerenciar Empresas',
                    icon: 'mdi-domain',
                    order: 5
                }
            },
            {
                path: 'cursos',
                name: 'admin-cursos',
                component: AdminCursos,
                meta: {
                    title: 'Gerenciar Cursos',
                    icon: 'mdi-school',
                    order: 6
                }
            },
            {
                path: 'vagas',
                name: 'admin-vagas',
                component: AdminVagas,
                meta: {
                    title: 'Gerenciar Vagas',
                    icon: 'mdi-briefcase',
                    order: 7
                }
            },
            {
                path: 'relatorios',
                name: 'admin-relatorios',
                component: AdminRelatorios,
                meta: {
                    title: 'Relatórios',
                    icon: 'mdi-chart-bar',
                    order: 8
                }
            },
            {
                path: 'configuracoes',
                name: 'admin-configuracoes',
                component: AdminConfiguracoes,
                meta: {
                    title: 'Configurações',
                    icon: 'mdi-cog',
                    order: 9
                }
            }
        ]
    },
    {
        path: '/admin/:pathMatch(.*)*',
        redirect: '/admin'
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: CadastroView,
        meta: { requiresAuth: false }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL || '/'),
    routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    // Verificar se a rota requer autenticação
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'login', query: { redirect: to.fullPath } })
        return
    }

    // Verificar se a rota requer permissões de administrador
    if (to.meta.requiresAdmin && !authStore.isAdmin) {
        next({ name: 'home' })
        return
    }

    next()
})

export default router 