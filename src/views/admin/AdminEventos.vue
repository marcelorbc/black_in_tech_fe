<template>
    <div class="admin-eventos">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Eventos</h1>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Novo Evento</span>
            </button>
        </div>

        <div class="controls">
            <div class="filters">
                <div class="field has-addons">
                    <div class="control has-icons-left is-expanded">
                        <input class="input" type="text" placeholder="Buscar eventos...">
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
                                <option value="">Todas as categorias</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Negócios">Negócios</option>
                                <option value="Cultura">Cultura</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Meio Ambiente">Meio Ambiente</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="view-options">
                <button class="button" :class="{ 'is-info': viewMode === 'list' }" @click="viewMode = 'list'">
                    <span class="icon">
                        <i class="fas fa-list"></i>
                    </span>
                </button>
                <button class="button" :class="{ 'is-info': viewMode === 'grid' }" @click="viewMode = 'grid'">
                    <span class="icon">
                        <i class="fas fa-th-large"></i>
                    </span>
                </button>
            </div>
        </div>

        <!-- Visualização em Lista -->
        <div v-if="viewMode === 'list'" class="table-container">
            <table class="table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Local</th>
                        <th>Destaque</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="evento in eventos.slice(0, 5)" :key="evento.id">
                        <td>{{ evento.id }}</td>
                        <td>
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img :src="evento.imagem" alt="Imagem do evento">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-6">{{ evento.titulo }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="tag is-info is-light">{{ evento.categoria }}</span>
                        </td>
                        <td>{{ evento.data }}</td>
                        <td>{{ evento.local }}</td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" :checked="evento.destaque">
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td>
                            <div class="buttons are-small">
                                <button class="button is-link" title="Visualizar">
                                    <span class="icon is-small">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </button>
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

        <!-- Visualização em Grid -->
        <div v-else class="grid-view">
            <div class="columns is-multiline">
                <div v-for="evento in eventos.slice(0, 6)" :key="evento.id" class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-16by9">
                                <img :src="evento.imagem" alt="Imagem do evento">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-5">{{ evento.titulo }}</p>
                                    <p class="subtitle is-6">{{ evento.data }} | {{ evento.local }}</p>
                                </div>
                            </div>

                            <div class="content">
                                <div class="tags">
                                    <span class="tag is-info is-light">{{ evento.categoria }}</span>
                                    <span v-if="evento.destaque" class="tag is-warning">Destaque</span>
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a class="card-footer-item">
                                <span class="icon is-small">
                                    <i class="fas fa-eye"></i>
                                </span>
                                <span>Ver</span>
                            </a>
                            <a class="card-footer-item">
                                <span class="icon is-small">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <span>Editar</span>
                            </a>
                            <a class="card-footer-item">
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <span>Excluir</span>
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
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

// Estado para alternar entre visualização em lista e grade
const viewMode = ref('list');

// Dados dos eventos - seria bom usar a eventsStore aqui
const eventos = ref([
    {
        id: 1,
        titulo: "Feira de Tecnologia e Inovação",
        resumo: "Venha conhecer as últimas tendências em tecnologia, inovação e empreendedorismo em nosso evento anual.",
        imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "20 a 22 de Abril, 2024",
        horario: "09:00 - 18:00",
        local: "Centro de Convenções",
        categoria: "Tecnologia",
        destaque: true
    },
    {
        id: 2,
        titulo: "Congresso de Gestão Empresarial",
        resumo: "Um evento focado em estratégias de gestão, liderança e transformação digital para empresários e executivos.",
        imagem: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "5 a 7 de Maio, 2024",
        horario: "08:30 - 17:30",
        local: "Hotel Business Center",
        categoria: "Negócios",
        destaque: false
    },
    {
        id: 3,
        titulo: "Festival de Cultura e Arte",
        resumo: "Uma celebração das artes visuais, música, dança e teatro com artistas locais e internacionais.",
        imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "10 a 17 de Junho, 2024",
        horario: "Diversas apresentações ao longo do dia",
        local: "Diversos pontos da cidade",
        categoria: "Cultura",
        destaque: true
    },
    {
        id: 4,
        titulo: "Simpósio de Saúde e Bem-estar",
        resumo: "Um evento dedicado à promoção da saúde integral, com especialistas em medicina preventiva, nutrição e atividade física.",
        imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "15 e 16 de Julho, 2024",
        horario: "09:00 - 19:00",
        local: "Centro Médico Municipal",
        categoria: "Saúde",
        destaque: false
    },
    {
        id: 5,
        titulo: "Fórum de Sustentabilidade e Meio Ambiente",
        resumo: "Um evento que discute soluções práticas para os desafios ambientais atuais, com foco em ações locais de impacto global.",
        imagem: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "8 e 9 de Agosto, 2024",
        horario: "08:00 - 18:00",
        local: "Parque Ecológico",
        categoria: "Meio Ambiente",
        destaque: false
    },
    {
        id: 6,
        titulo: "Workshop de Empreendedorismo e Inovação",
        resumo: "Um dia intensivo de aprendizado para empreendedores iniciantes e experientes que buscam inovar em seus negócios.",
        imagem: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        data: "25 de Agosto, 2024",
        horario: "08:00 - 20:00",
        local: "Centro de Inovação",
        categoria: "Empreendedorismo",
        destaque: false
    }
]);
</script>

<style scoped>
.admin-eventos {
    padding: 1rem;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.filters {
    display: flex;
    gap: 1rem;
    flex: 1;
}

.view-options {
    display: flex;
    gap: 0.5rem;
}

.table-container {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
}

.grid-view {
    margin-bottom: 1.5rem;
}

.card {
    height: 100%;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.buttons {
    display: flex;
    gap: 0.5rem;
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