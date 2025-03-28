<template>
    <div class="admin-configuracoes">
        <div class="page-header">
            <h1 class="title is-3">Configurações do Portal</h1>
            <button class="button is-success" @click="salvarConfiguracoes">
                <span class="icon">
                    <i class="fas fa-save"></i>
                </span>
                <span>Salvar Alterações</span>
            </button>
        </div>

        <div class="columns">
            <div class="column is-3">
                <aside class="menu">
                    <p class="menu-label">
                        Configurações Gerais
                    </p>
                    <ul class="menu-list">
                        <li><a :class="{ 'is-active': secaoAtiva === 'geral' }"
                                @click="secaoAtiva = 'geral'">Informações do Site</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'seo' }" @click="secaoAtiva = 'seo'">SEO</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'contatos' }"
                                @click="secaoAtiva = 'contatos'">Contatos</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'social' }" @click="secaoAtiva = 'social'">Redes
                                Sociais</a></li>
                    </ul>
                    <p class="menu-label">
                        Aparência
                    </p>
                    <ul class="menu-list">
                        <li><a :class="{ 'is-active': secaoAtiva === 'home' }" @click="secaoAtiva = 'home'">Página
                                Inicial</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'temas' }" @click="secaoAtiva = 'temas'">Temas e
                                Cores</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'banners' }"
                                @click="secaoAtiva = 'banners'">Banners</a></li>
                    </ul>
                    <p class="menu-label">
                        Sistema
                    </p>
                    <ul class="menu-list">
                        <li><a :class="{ 'is-active': secaoAtiva === 'emails' }"
                                @click="secaoAtiva = 'emails'">Configurações de Email</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'integracao' }"
                                @click="secaoAtiva = 'integracao'">Integrações</a></li>
                        <li><a :class="{ 'is-active': secaoAtiva === 'backup' }" @click="secaoAtiva = 'backup'">Backup e
                                Manutenção</a></li>
                    </ul>
                </aside>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <!-- Seção: Geral -->
                        <div v-if="secaoAtiva === 'geral'">
                            <h2 class="title is-4">Informações do Site</h2>

                            <div class="field">
                                <label class="label">Nome do Site</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="config.nome" placeholder="Nome do site">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Descrição</label>
                                <div class="control">
                                    <textarea class="textarea" v-model="config.descricao"
                                        placeholder="Breve descrição do site"></textarea>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Logo</label>
                                <div class="file has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="logo">
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Escolher arquivo...
                                            </span>
                                        </span>
                                        <span class="file-name">
                                            logo.png
                                        </span>
                                    </label>
                                </div>
                                <div class="logo-preview mt-2">
                                    <img src="https://via.placeholder.com/150x50" alt="Logo atual">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Favicon</label>
                                <div class="file has-name">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="favicon">
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Escolher arquivo...
                                            </span>
                                        </span>
                                        <span class="file-name">
                                            favicon.ico
                                        </span>
                                    </label>
                                </div>
                                <div class="favicon-preview mt-2">
                                    <img src="https://via.placeholder.com/32" alt="Favicon atual">
                                </div>
                            </div>
                        </div>

                        <!-- Seção: SEO -->
                        <div v-if="secaoAtiva === 'seo'">
                            <h2 class="title is-4">Configurações de SEO</h2>

                            <div class="field">
                                <label class="label">Meta Title</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="config.seo.title"
                                        placeholder="Título para buscadores">
                                </div>
                                <p class="help">Recomendado: até 60 caracteres</p>
                            </div>

                            <div class="field">
                                <label class="label">Meta Description</label>
                                <div class="control">
                                    <textarea class="textarea" v-model="config.seo.description"
                                        placeholder="Descrição para buscadores"></textarea>
                                </div>
                                <p class="help">Recomendado: até 160 caracteres</p>
                            </div>

                            <div class="field">
                                <label class="label">Palavras-chave</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="config.seo.keywords"
                                        placeholder="Palavras-chave separadas por vírgula">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Google Analytics ID</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="config.seo.googleAnalyticsId"
                                        placeholder="Ex: UA-XXXXX-Y">
                                </div>
                            </div>
                        </div>

                        <!-- Outras seções seriam implementadas de forma similar -->
                        <div v-if="secaoAtiva !== 'geral' && secaoAtiva !== 'seo'">
                            <h2 class="title is-4">{{ getTituloSecao() }}</h2>
                            <p class="notification is-light">
                                Esta seção está em desenvolvimento.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const secaoAtiva = ref('geral');
const config = ref({
    nome: 'Portal de Notícias e Eventos',
    descricao: 'Seu portal completo de notícias, eventos, vagas e cursos.',
    logo: '/img/logo.png',
    favicon: '/img/favicon.ico',
    seo: {
        title: 'Portal de Notícias, Eventos e Vagas | Seu guia completo',
        description: 'O melhor portal para ficar atualizado com notícias, eventos, oportunidades de emprego e cursos de capacitação.',
        keywords: 'notícias, eventos, vagas, empregos, cursos, capacitação',
        googleAnalyticsId: 'UA-123456789-1'
    },
    contatos: {
        email: 'contato@portal.com',
        telefone: '(11) 3333-4444',
        endereco: 'Av. Principal, 1000 - Centro'
    },
    redessociais: {
        facebook: 'portaloficial',
        instagram: 'portal_oficial',
        twitter: 'portal_oficial',
        linkedin: 'portal-oficial'
    }
});

function getTituloSecao() {
    switch (secaoAtiva.value) {
        case 'contatos': return 'Informações de Contato';
        case 'social': return 'Redes Sociais';
        case 'home': return 'Configurações da Página Inicial';
        case 'temas': return 'Temas e Cores';
        case 'banners': return 'Banners Promocionais';
        case 'emails': return 'Configurações de Email';
        case 'integracao': return 'Integrações com Outras Plataformas';
        case 'backup': return 'Backup e Manutenção';
        default: return 'Configurações';
    }
}

function salvarConfiguracoes() {
    // Aqui iria a lógica para salvar as configurações
    alert('Configurações salvas com sucesso!');
}
</script>

<style scoped>
.admin-configuracoes {
    padding: 1rem;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.menu {
    padding-right: 1rem;
}

.menu-list a {
    border-radius: 4px;
}

.menu-list a.is-active {
    background-color: #48c774;
}

.logo-preview,
.favicon-preview {
    border: 1px solid #eee;
    padding: 5px;
    display: inline-block;
}
</style>