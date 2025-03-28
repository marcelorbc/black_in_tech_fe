<template>
    <MainLayout>
        <div class="noticias-page">


            <!-- Destaques Section -->
            <section class="section">
                <div class="container">
                    <div class="columns is-multiline">
                        <!-- Notícia Principal -->
                        <div class="column is-8">
                            <div class="card destaque-principal">
                                <div class="card-image">
                                    <figure class="image is-16by9">
                                        <img :src="noticiaDestaque.imagem" alt="Imagem da notícia em destaque">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <p class="tag is-success mb-2">{{ noticiaDestaque.categoria }}</p>
                                    <h3 class="title is-3">{{ noticiaDestaque.titulo }}</h3>
                                    <p class="subtitle is-6">{{ noticiaDestaque.data }}</p>
                                    <p class="content">
                                        {{ noticiaDestaque.resumo }}
                                    </p>
                                    <button class="button is-success is-outlined"
                                        @click="verNoticia(noticiaDestaque.id)">Ler mais</button>
                                </div>
                            </div>
                        </div>

                        <!-- Últimas Notícias Sidebar -->
                        <div class="column is-4">
                            <h4 class="title is-4 mb-4">Últimas Notícias</h4>
                            <div class="ultimas-noticias">
                                <article v-for="(noticia, index) in ultimasNoticias" :key="index" class="media">
                                    <figure class="media-left">
                                        <p class="image is-96x96">
                                            <img :src="noticia.imagem" alt="Imagem da notícia">
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <h5 class="title is-5">{{ noticia.titulo }}</h5>
                                        <p class="subtitle is-7">{{ noticia.data }}</p>
                                        <p class="is-size-7">{{ noticia.resumo }}</p>
                                        <button class="button is-small is-success is-light mt-2"
                                            @click="verNoticia(noticia.id)">
                                            Ler
                                        </button>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Timeline de Notícias -->
            <section class="section allNews">
                <div class="container">
                    <h3 class="title is-3 mb-6">Todas as Notícias</h3>

                    <div class="timeline-noticias columns is-multiline">
                        <div v-for="(noticia, index) in todasNoticias" :key="index" class="column is-6">
                            <article class="box">
                                <div class="columns is-vcentered">
                                    <div class="column is-5">
                                        <figure class="image is-16by9">
                                            <img :src="noticia.imagem" alt="Imagem da notícia">
                                        </figure>
                                    </div>
                                    <div class="column">
                                        <div class="content">
                                            <p class="tag is-success is-light mb-2">{{ noticia.categoria }}</p>
                                            <h4 class="title is-4">{{ noticia.titulo }}</h4>
                                            <p class="subtitle is-6">{{ noticia.data }}</p>
                                            <p class="is-size-6">
                                                {{ noticia.resumo }}
                                            </p>
                                            <button class="button is-success is-small is-outlined"
                                                @click="verNoticia(noticia.id)">
                                                Ler mais
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <!-- Paginação -->
                    <nav class="pagination is-centered mt-6" role="navigation" aria-label="pagination">
                        <a class="pagination-previous" :disabled="paginaAtual === 1"
                            @click="mudarPagina(paginaAtual - 1)">Anterior</a>
                        <a class="pagination-next" :disabled="paginaAtual === totalPaginas"
                            @click="mudarPagina(paginaAtual + 1)">Próxima</a>
                        <ul class="pagination-list">
                            <li v-for="pagina in totalPaginas" :key="pagina">
                                <a class="pagination-link" :class="{ 'is-current': pagina === paginaAtual }"
                                    @click="mudarPagina(pagina)">
                                    {{ pagina }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    </MainLayout>
</template>

<style scoped>
.noticias-page {
    min-height: 100vh;
}

.destaque-principal {
    height: 100%;
    transition: transform 0.3s ease;
}

.destaque-principal:hover {
    transform: translateY(-5px);
}

.ultimas-noticias .media {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    transition: background-color 0.3s ease;
}

.ultimas-noticias .media:hover {
    background-color: #f8f8f8;
}

.ultimas-noticias .media:last-child {
    border-bottom: none;
}

.timeline-noticias .box {
    transition: transform 0.3s ease;
    height: 100%;
}

.timeline-noticias .box:hover {
    transform: translateY(-5px);
}

.pagination-link.is-current {
    background-color: #48c774;
    border-color: #48c774;
}

.allNews {
    background-color: #242424;
    padding: 2rem;
    border-radius: 10px;
}

.noticias-page {
    margin-bottom: 100px;
}

.topo {
    height: 70px;
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 20px 20px 20px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;

}
</style>

<script setup>
import { useNoticiasStore } from '@/stores/noticiasStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const noticiasStore = useNoticiasStore();

// Acessando os dados da store
const noticiaDestaque = noticiasStore.noticiaDestaque;
const ultimasNoticias = noticiasStore.ultimasNoticias;
const todasNoticias = noticiasStore.todasNoticias;
const paginaAtual = noticiasStore.paginaAtual;
const totalPaginas = noticiasStore.totalPaginas;

// Métodos
function mudarPagina(pagina) {
    noticiasStore.mudarPagina(pagina);
}

function verNoticia(id) {
    router.push(`/noticias/${id}`);
}
</script>