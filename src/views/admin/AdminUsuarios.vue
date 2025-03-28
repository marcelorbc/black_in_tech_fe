<template>
    <div class="admin-usuarios">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Usuários</h1>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Adicionar Usuário</span>
            </button>
        </div>

        <div class="filters">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input class="input" type="text" placeholder="Buscar usuários...">
                    <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="control">
                    <button class="button is-info">
                        Buscar
                    </button>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <div class="select">
                        <select>
                            <option value="">Todos os perfis</option>
                            <option value="admin">Administradores</option>
                            <option value="usuario">Usuários comuns</option>
                            <option value="editor">Editores</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-container">
            <table class="table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in mockUsers" :key="index">
                        <td>{{ user.id }}</td>
                        <td>
                            <div class="user-info">
                                <img :src="user.avatar" alt="Avatar" class="avatar">
                                <span>{{ user.nome }}</span>
                            </div>
                        </td>
                        <td>{{ user.email }}</td>
                        <td>
                            <span class="tag" :class="getProfileClass(user.perfil)">
                                {{ user.perfil }}
                            </span>
                        </td>
                        <td>
                            <span class="tag is-success">Ativo</span>
                        </td>
                        <td>
                            <div class="buttons are-small">
                                <button class="button is-info" title="Editar">
                                    <span class="icon is-small">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                </button>
                                <button class="button is-danger" title="Excluir">
                                    <span class="icon is-small">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Anterior</a>
            <a class="pagination-next">Próxima</a>
            <ul class="pagination-list">
                <li><a class="pagination-link is-current">1</a></li>
                <li><a class="pagination-link">2</a></li>
                <li><a class="pagination-link">3</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Dados mockados para exemplo
const mockUsers = ref([
    {
        id: 1,
        nome: 'Administrador',
        email: 'admin@example.com',
        perfil: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80'
    },
    {
        id: 2,
        nome: 'Usuário Normal',
        email: 'user@example.com',
        perfil: 'usuario',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80'
    },
    {
        id: 3,
        nome: 'Editor de Conteúdo',
        email: 'editor@example.com',
        perfil: 'editor',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80'
    },
    {
        id: 4,
        nome: 'Maria Silva',
        email: 'maria@example.com',
        perfil: 'usuario',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80'
    },
    {
        id: 5,
        nome: 'João Pereira',
        email: 'joao@example.com',
        perfil: 'usuario',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80'
    }
]);

function getProfileClass(perfil) {
    switch (perfil) {
        case 'admin':
            return 'is-danger';
        case 'editor':
            return 'is-warning';
        case 'usuario':
            return 'is-info';
        default:
            return 'is-light';
    }
}
</script>

<style scoped>
.admin-usuarios {
    padding: 1rem;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

.table-container {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
}

.buttons {
    display: flex;
    gap: 0.5rem;
}
</style>