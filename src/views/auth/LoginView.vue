<template>
    <div class="login-page">
        <div class="container">
            <div class="login-container">
                <div class="login-header">
                    <h1 class="title is-3">Faça seu login</h1>
                    <p class="subtitle is-6">Entre com suas credenciais para acessar o portal</p>
                </div>

                <form @submit.prevent="handleLogin" class="login-form">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left">
                            <input class="input" type="email" v-model="email" placeholder="seu@email.com" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Senha</label>
                        <div class="control has-icons-left">
                            <input class="input" type="password" v-model="senha" placeholder="Sua senha" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox" v-model="lembrar">
                                Lembrar meus dados
                            </label>
                        </div>
                    </div>

                    <div v-if="error" class="notification is-danger is-light">
                        {{ error }}
                    </div>

                    <div class="field">
                        <div class="control">
                            <button type="submit" class="button is-success is-fullwidth"
                                :class="{ 'is-loading': isLoading }">
                                Entrar
                            </button>
                        </div>
                    </div>

                    <div class="help-links">
                        <a href="#" @click.prevent="loginAdmin">Entrar como Admin (teste)</a>
                        <router-link to="/cadastro">Criar uma conta</router-link>
                    </div>
                </form>

                <div class="login-info">
                    <p class="has-text-grey is-size-7 mt-5">Para fins de teste:</p>
                    <div class="login-credentials">
                        <div class="credential-item">
                            <span class="tag is-info">Admin</span>
                            <p>admin@example.com</p>
                            <p>admin123</p>
                        </div>
                        <div class="credential-item">
                            <span class="tag is-success">Usuário</span>
                            <p>user@example.com</p>
                            <p>user123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const senha = ref('');
const lembrar = ref(false);
const error = ref('');
const isLoading = ref(false);

async function handleLogin() {
    isLoading.value = true;
    error.value = '';

    try {
        const success = authStore.login(email.value, senha.value);

        if (success) {
            // Redirecionar para a página inicial ou para onde estava tentando acessar
            if (authStore.isAdmin) {
                router.push('/admin');
            } else {
                router.push('/');
            }
        } else {
            error.value = 'Email ou senha incorretos. Tente novamente.';
        }
    } catch (err) {
        error.value = 'Ocorreu um erro ao tentar fazer login. Tente novamente.';
        console.error(err);
    } finally {
        isLoading.value = false;
    }
}

// Função de teste para entrar automaticamente como admin
function loginAdmin() {
    authStore.autoLogin();
    router.push('/admin');
}
</script>

<style scoped>
.login-page {
    min-height: 100vh;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
}

.login-container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 2rem;
}

.login-header {
    text-align: center;
    margin-bottom: 2rem;
}

.login-form {
    margin-bottom: 1.5rem;
}

.help-links {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 0.9rem;
}

.help-links a {
    color: #48c774;
    text-decoration: none;
}

.help-links a:hover {
    text-decoration: underline;
}

.login-info {
    text-align: center;
    border-top: 1px solid #eee;
    padding-top: 1.5rem;
}

.login-credentials {
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
}

.credential-item {
    font-size: 0.8rem;
    padding: 0.5rem;
}

.credential-item p {
    margin: 0.2rem 0;
}
</style>