import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    // Estado
    const user = ref(null);
    const isAuthenticated = ref(false);

    // Dados mockados para teste
    const mockUsers = [
        {
            id: 1,
            nome: 'Administrador',
            email: 'admin@example.com',
            senha: 'admin123',
            perfil: 'admin',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 2,
            nome: 'Usuário Normal',
            email: 'user@example.com',
            senha: 'user123',
            perfil: 'usuario',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
    ];

    // Getters
    const isAdmin = computed(() => {
        return user.value && user.value.perfil === 'admin';
    });

    const userName = computed(() => {
        return user.value ? user.value.nome : '';
    });

    const userAvatar = computed(() => {
        return user.value ? user.value.avatar : '';
    });

    // Para facilitar o teste, vamos simular um login automático
    // Isso deve ser removido em produção
    function autoLogin() {
        const adminUser = mockUsers[0];
        const { senha: _unused1, ...userWithoutPassword } = adminUser; // eslint-disable-line no-unused-vars
        user.value = userWithoutPassword;
        isAuthenticated.value = true;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    }

    // Actions
    function login(email, senha) {
        const foundUser = mockUsers.find(u => u.email === email && u.senha === senha);

        if (foundUser) {
            const { senha: _unused2, ...userWithoutPassword } = foundUser; // eslint-disable-line no-unused-vars
            user.value = userWithoutPassword;
            isAuthenticated.value = true;
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
            return true;
        }

        return false;
    }

    function logout() {
        user.value = null;
        isAuthenticated.value = false;
        localStorage.removeItem('currentUser');
    }

    function checkAuth() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            user.value = JSON.parse(savedUser);
            isAuthenticated.value = true;
            return true;
        }
        return false;
    }

    // Na primeira carga, verificar se o usuário está logado
    checkAuth();

    return {
        user,
        isAuthenticated,
        isAdmin,
        userName,
        userAvatar,
        login,
        logout,
        checkAuth,
        autoLogin // Apenas para testes
    };
}); 