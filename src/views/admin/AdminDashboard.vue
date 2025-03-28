<template>
    <div class="admin-dashboard">
        <div class="container">
            <h1 class="title is-2">Painel de Administração</h1>
            <p class="subtitle is-5">Bem-vindo(a) ao painel administrativo do portal</p>

            <div class="admin-grid">
                <div class="admin-card" @click="navigateTo('/admin/usuarios')">
                    <div class="icon-container">
                        <i class="fas fa-users"></i>
                    </div>
                    <h2>Usuários</h2>
                    <p>Gerenciar usuários e permissões de acesso</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/noticias')">
                    <div class="icon-container">
                        <i class="fas fa-newspaper"></i>
                    </div>
                    <h2>Notícias</h2>
                    <p>Adicionar e editar notícias do portal</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/eventos')">
                    <div class="icon-container">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h2>Eventos</h2>
                    <p>Gerenciar eventos e calendário</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/empresas')">
                    <div class="icon-container">
                        <i class="fas fa-building"></i>
                    </div>
                    <h2>Empresas</h2>
                    <p>Gerenciar cadastro de empresas</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/cursos')">
                    <div class="icon-container">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h2>Cursos</h2>
                    <p>Gerenciar cursos e treinamentos</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/vagas')">
                    <div class="icon-container">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h2>Vagas</h2>
                    <p>Gerenciar vagas de emprego</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/relatorios')">
                    <div class="icon-container">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <h2>Relatórios</h2>
                    <p>Visualizar estatísticas e relatórios</p>
                </div>

                <div class="admin-card" @click="navigateTo('/admin/configuracoes')">
                    <div class="icon-container">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h2>Configurações</h2>
                    <p>Configurações gerais do portal</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
    // Verifica se o usuário é admin, caso contrário redireciona
    if (!authStore.isAdmin) {
        router.push('/');
    }
});

function navigateTo(path) {
    router.push(path);
}
</script>

<style scoped>
.admin-dashboard {
    padding: 2rem 0;
    min-height: calc(100vh - 80px);
    background-color: #f8f9fa;
}

.admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.admin-card {
    background-color: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.admin-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.icon-container {
    background-color: #48c774;
    color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.icon-container i {
    font-size: 2rem;
}

.admin-card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
}

.admin-card p {
    color: #666;
    font-size: 0.9rem;
}
</style>