<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/logo.png" alt="Logo" />
                    </router-link>
                </div>

                <nav class="main-nav">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/sobre">Sobre</router-link></li>
                        <li><router-link to="/noticias">Notícias</router-link></li>
                        <li><router-link to="/eventos">Eventos</router-link></li>
                        <li><router-link to="/empresas">Empresas</router-link></li>
                        <!-- Menu Admin apenas para usuários com perfil admin -->
                        <li v-if="authStore.isAdmin">
                            <router-link to="/admin" class="admin-link">
                                <i class="fas fa-cog"></i> Admin
                            </router-link>
                        </li>
                    </ul>
                </nav>

                <div class="user-menu">
                    <template v-if="authStore.isAuthenticated">
                        <div class="user-profile" @click="toggleDropdown">
                            <img :src="authStore.userAvatar" alt="Avatar" class="avatar">
                            <span>{{ authStore.userName }}</span>
                            <i class="fas fa-chevron-down"></i>

                            <div class="dropdown-menu" v-show="showDropdown">
                                <router-link to="/perfil">Meu Perfil</router-link>
                                <a href="#" @click.prevent="logout">Sair</a>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <router-link to="/login" class="btn btn-login">Login</router-link>
                        <router-link to="/cadastro" class="btn btn-signup">Cadastre-se</router-link>
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const showDropdown = ref(false);

function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
}

function logout() {
    authStore.logout();
    showDropdown.value = false;
    router.push('/');
}
</script>

<style scoped>
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
}

.logo img {
    height: 40px;
}

.main-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.main-nav li {
    margin: 0 1rem;
}

.main-nav a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.router-link-active {
    color: #48c774;
}

.admin-link {
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #333;
}

.admin-link i {
    margin-right: 0.5rem;
}

.user-menu {
    display: flex;
    align-items: center;
}

.btn {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    margin-left: 1rem;
}

.btn-login {
    color: #48c774;
    border: 1px solid #48c774;
}

.btn-signup {
    background-color: #48c774;
    color: white;
}

.user-profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0.5rem 0;
    min-width: 150px;
    margin-top: 0.5rem;
}

.dropdown-menu a {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
}

.dropdown-menu a:hover {
    background-color: #f9f9f9;
    color: #48c774;
}
</style>