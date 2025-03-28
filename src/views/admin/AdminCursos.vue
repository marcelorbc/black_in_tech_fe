<template>
    <div class="admin-cursos">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Cursos</h1>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Novo Curso</span>
            </button>
        </div>

        <div class="filters">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input class="input" type="text" v-model="termoBusca" placeholder="Buscar cursos...">
                    <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="control">
                    <button class="button is-info" @click="buscarCursos">
                        Buscar
                    </button>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <div class="select">
                        <select v-model="categoriaFiltrada" @change="aplicarFiltros">
                            <option value="">Todas as categorias</option>
                            <option v-for="categoria in cursosStore.categoriasDisponiveis" :key="categoria"
                                :value="categoria">
                                {{ categoria }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <div class="select">
                        <select v-model="nivelFiltrado" @change="aplicarFiltros">
                            <option value="">Todos os níveis</option>
                            <option v-for="nivel in cursosStore.niveisDisponiveis" :key="nivel" :value="nivel">
                                {{ nivel }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns is-multiline">
            <div v-for="curso in cursosStore.cursosPaginados" :key="curso.id" class="column is-4">
                <div class="card curso-card">
                    <div class="card-image">
                        <figure class="image is-16by9">
                            <img :src="curso.imagem" alt="Imagem do curso">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-5">{{ curso.titulo }}</p>
                                <div class="tags">
                                    <span class="tag is-info">{{ curso.categoria }}</span>
                                    <span class="tag is-warning">{{ curso.nivel }}</span>
                                </div>
                            </div>
                            <div class="media-right">
                                <label class="switch">
                                    <input type="checkbox" :checked="curso.destaque"
                                        @change="alternarDestaque(curso.id)">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>

                        <div class="content">
                            <p class="curso-descricao">{{ curso.descricao }}</p>
                            <div class="curso-info">
                                <p><i class="fas fa-clock"></i> {{ curso.duracao }}</p>
                                <p><i class="fas fa-users"></i> {{ curso.alunos }} alunos</p>
                                <p><i class="fas fa-star"></i> {{ curso.avaliacao }} ({{ curso.numAvaliacoes }}
                                    avaliações)</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" @click="visualizarCurso(curso.id)">
                            <span class="icon is-small">
                                <i class="fas fa-eye"></i>
                            </span>
                            <span>Ver</span>
                        </a>
                        <a class="card-footer-item" @click="editarCurso(curso.id)">
                            <span class="icon is-small">
                                <i class="fas fa-edit"></i>
                            </span>
                            <span>Editar</span>
                        </a>
                        <a class="card-footer-item" @click="removerCurso(curso.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                            <span>Excluir</span>
                        </a>
                    </footer>
                </div>
            </div>
        </div>

        <div v-if="cursosStore.cursosPaginados.length === 0" class="notification is-info">
            <p class="has-text-centered">Nenhum curso encontrado com os filtros aplicados.</p>
        </div>

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" :disabled="cursosStore.paginaAtual === 1"
                @click="cursosStore.mudarPagina(cursosStore.paginaAtual - 1)">Anterior</a>
            <a class="pagination-next" :disabled="cursosStore.paginaAtual === cursosStore.totalPaginas"
                @click="cursosStore.mudarPagina(cursosStore.paginaAtual + 1)">Próxima</a>
            <ul class="pagination-list">
                <li v-for="pagina in cursosStore.totalPaginas" :key="pagina">
                    <a class="pagination-link" :class="{ 'is-current': pagina === cursosStore.paginaAtual }"
                        @click="cursosStore.mudarPagina(pagina)">
                        {{ pagina }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { useCursosStore } from '@/stores/cursosStore';
import { ref } from 'vue';

const cursosStore = useCursosStore();
const termoBusca = ref('');
const categoriaFiltrada = ref('');
const nivelFiltrado = ref('');

function buscarCursos() {
    cursosStore.buscar(termoBusca.value);
}

function aplicarFiltros() {
    if (categoriaFiltrada.value) {
        cursosStore.filtrarPorCategoria(categoriaFiltrada.value);
    } else {
        // Se não tiver categoria selecionada, limpa esse filtro
        cursosStore.filtrarPorCategoria(null);
    }

    if (nivelFiltrado.value) {
        cursosStore.filtrarPorNivel(nivelFiltrado.value);
    } else {
        // Se não tiver nível selecionado, limpa esse filtro
        cursosStore.filtrarPorNivel(null);
    }
}

function alternarDestaque(id) {
    cursosStore.alternarDestaque(id);
}

function visualizarCurso(id) {
    console.log(`Visualizar curso ${id}`);
    // Implementar lógica para visualizar detalhes do curso
}

function editarCurso(id) {
    console.log(`Editar curso ${id}`);
    // Implementar lógica para editar o curso
}

function removerCurso(id) {
    if (confirm('Tem certeza que deseja excluir este curso?')) {
        cursosStore.removerCurso(id);
    }
}
</script>

<style scoped>
.admin-cursos {
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

.curso-card {
    height: 100%;
    transition: transform 0.3s ease;
}

.curso-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.curso-descricao {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #444;
}

.curso-info {
    font-size: 0.85rem;
    color: #777;
}

.curso-info p {
    margin-bottom: 0.2rem;
}

.curso-info i {
    width: 16px;
    margin-right: 5px;
    text-align: center;
}

/* Switch toggle para destaque */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
}

input:checked+.slider {
    background-color: #48c774;
}

input:focus+.slider {
    box-shadow: 0 0 1px #48c774;
}

input:checked+.slider:before {
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>