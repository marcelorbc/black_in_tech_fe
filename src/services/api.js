import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
    config => {
        const authStore = useAuthStore();
        if (authStore.token) {
            config.headers.Authorization = `Bearer ${authStore.token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Interceptor de resposta para tratamento centralizado de erros
api.interceptors.response.use(
    response => response,
    error => {
        // Tratamento de erros específicos aqui
        if (error.response && error.response.status === 401) {
            const authStore = useAuthStore();
            authStore.logout();
        }

        return Promise.reject(error);
    }
);

export default api; 