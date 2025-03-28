<template>
    <div class="admin-empresas">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Empresas</h1>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Nova Empresa</span>
            </button>
        </div>

        <div class="filters">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input class="input" type="text" placeholder="Buscar empresas...">
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
                            <option value="Meio Ambiente">Meio Ambiente</option>
                            <option value="Construção Civil">Construção Civil</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Educação">Educação</option>
                            <option value="Finanças">Finanças</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="empresa-cards">
            <div class="columns is-multiline">
                <div v-for="empresa in empresas.slice(0, 6)" :key="empresa.id" class="column is-one-third">
                    <div class="card empresa-card">
                        <div class="card-image">
                            <figure class="image is-3by1">
                                <img :src="empresa.capa" alt="Imagem de capa da empresa" class="empresa-capa">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img :src="empresa.logo" alt="Logo da empresa" class="empresa-logo">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-5">{{ empresa.nome }}</p>
                                    <p class="subtitle is-6">{{ empresa.categoria }}</p>
                                </div>
                                <div class="media-right">
                                    <label class="switch">
                                        <input type="checkbox" :checked="empresa.destaque">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="content">
                                <p class="empresa-slogan">{{ empresa.slogan }}</p>
                                <div class="empresa-info">
                                    <p><i class="fas fa-map-marker-alt"></i> {{ empresa.sede }}</p>
                                    <p><i class="fas fa-users"></i> {{ empresa.tamanho }}</p>
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

// Dados das empresas - seria bom usar a companiesStore aqui
const empresas = ref([
    {
        id: 1,
        nome: "TechSolutions",
        slogan: "Inovação para o seu negócio",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Tecnologia",
        sede: "São Paulo, SP",
        tamanho: "50-200 funcionários",
        destaque: true
    },
    {
        id: 2,
        nome: "EcoGreen Soluções Ambientais",
        slogan: "Sustentabilidade para um futuro melhor",
        logo: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Meio Ambiente",
        sede: "Curitiba, PR",
        tamanho: "20-50 funcionários",
        destaque: true
    },
    {
        id: 3,
        nome: "Construtora Horizonte",
        slogan: "Construindo sonhos com solidez",
        logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Construção Civil",
        sede: "Rio de Janeiro, RJ",
        tamanho: "200+ funcionários",
        destaque: false
    },
    {
        id: 4,
        nome: "EducaMais",
        slogan: "Educação inovadora para todas as idades",
        logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Educação",
        sede: "Belo Horizonte, MG",
        tamanho: "50-100 funcionários",
        destaque: false
    },
    {
        id: 5,
        nome: "HealthLife",
        slogan: "Sua saúde em primeiro lugar",
        logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Saúde",
        sede: "Porto Alegre, RS",
        tamanho: "50-200 funcionários",
        destaque: true
    },
    {
        id: 6,
        nome: "Fintech Capital",
        slogan: "Soluções financeiras inteligentes",
        logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        capa: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        categoria: "Finanças",
        sede: "São Paulo, SP",
        tamanho: "20-50 funcionários",
        destaque: false
    }
]);
</script>

<style scoped>
.admin-empresas {
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

.empresa-card {
    height: 100%;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
}

.empresa-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.empresa-capa {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.empresa-logo {
    object-fit: cover;
    border-radius: 4px;
}

.empresa-slogan {
    font-style: italic;
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.empresa-info {
    font-size: 0.85rem;
    color: #777;
}

.empresa-info p {
    margin-bottom: 0.2rem;
}

.empresa-info i {
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