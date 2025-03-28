<template>
  <MainLayout>
    <div class="noticia-detalhada-page" v-if="noticia">
      <section class="hero is-success">
        <div class="hero-body">
          <div class="container">
            <p class="tag is-light mb-2">{{ noticia.categoria }}</p>
            <h1 class="title is-2">{{ noticia.titulo }}</h1>
            <p class="subtitle is-6">{{ noticia.data }}</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="image is-16by9 mb-6">
                <img :src="noticia.imagem" :alt="noticia.titulo">
              </figure>
              
              <div class="content is-large">
                <p>{{ noticia.conteudo }}</p>
              </div>
              
              <div class="buttons mt-6">
                <button class="button is-success" @click="voltarParaNoticias">
                  Voltar para Notícias
                </button>
                <button class="button is-light">
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section related-news">
        <div class="container">
          <h3 class="title is-4 mb-5">Notícias Relacionadas</h3>
          
          <div class="columns is-multiline">
            <div v-for="noticiaRelacionada in noticiasRelacionadas" :key="noticiaRelacionada.id" class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img :src="noticiaRelacionada.imagem" :alt="noticiaRelacionada.titulo">
                  </figure>
                </div>
                <div class="card-content">
                  <p class="tag is-success is-light mb-2">{{ noticiaRelacionada.categoria }}</p>
                  <h4 class="title is-5">{{ noticiaRelacionada.titulo }}</h4>
                  <p class="subtitle is-6">{{ noticiaRelacionada.data }}</p>
                  <button class="button is-small is-success is-outlined" @click="verNoticia(noticiaRelacionada.id)">
                    Ler mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else class="section">
      <div class="container has-text-centered">
        <h2 class="title is-3">Notícia não encontrada</h2>
        <button class="button is-success mt-4" @click="voltarParaNoticias">
          Voltar para Notícias
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNoticiasStore } from '@/stores/noticiasStore';

const route = useRoute();
const router = useRouter();
const noticiasStore = useNoticiasStore();

// Carrega a notícia baseada no ID da rota
onMounted(() => {
  const id = parseInt(route.params.id);
  noticiasStore.setNoticiaDetalhada(id);
});

// Notícia atual
const noticia = computed(() => noticiasStore.noticiaDetalhada);

// Notícias relacionadas (da mesma categoria)
const noticiasRelacionadas = computed(() => {
  if (!noticia.value) return [];
  
  return noticiasStore.noticias
    .filter(n => n.categoria === noticia.value.categoria && n.id !== noticia.value.id)
    .slice(0, 3);
});

// Funções de navegação
function voltarParaNoticias() {
  router.push('/noticias');
}

function verNoticia(id) {
  router.push(`/noticias/${id}`);
}
</script>

<style scoped>
.noticia-detalhada-page {
  min-height: 100vh;
}

.content.is-large {
  font-size: 1.25rem;
  line-height: 1.8;
}

.related-news {
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 10px;
}

.related-news .card {
  height: 100%;
  transition: transform 0.3s ease;
}

.related-news .card:hover {
  transform: translateY(-5px);
}
</style> 