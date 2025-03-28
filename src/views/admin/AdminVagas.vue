<template>
    <div class="admin-vagas">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Vagas</h1>
            <button class="button is-success">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Nova Vaga</span>
            </button>
        </div>

        <div class="filters">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input class="input" type="text" placeholder="Buscar vagas...">
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
                            <option value="">Todas as áreas</option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Administração">Administração</option>
                            <option value="Vendas">Vendas</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Recursos Humanos">Recursos Humanos</option>
                            <option value="Engenharia">Engenharia</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <div class="select">
                        <select>
                            <option value="">Todos os níveis</option>
                            <option value="Estágio">Estágio</option>
                            <option value="Júnior">Júnior</option>
                            <option value="Pleno">Pleno</option>
                            <option value="Sênior">Sênior</option>
                            <option value="Gerência">Gerência</option>
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
                        <th>Cargo</th>
                        <th>Empresa</th>
                        <th>Área</th>
                        <th>Nível</th>
                        <th>Local</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vaga in vagasStore.vagasPaginadas" :key="vaga.id">
                        <td>{{ vaga.id }}</td>
                        <td>{{ vaga.cargo }}</td>
                        <td>
                            <div class="empresa-info">
                                <img :src="vaga.empresaLogo" alt="Logo da empresa" class="empresa-logo">
                                <span>{{ vaga.empresa }}</span>
                            </div>
                        </td>
                        <td>
                            <span class="tag is-info is-light">{{ vaga.area }}</span>
                        </td>
                        <td>
                            <span class="tag" :class="getNivelClass(vaga.nivel)">{{ vaga.nivel }}</span>
                        </td>
                        <td>{{ vaga.local }}</td>
                        <td>
                            <span class="tag" :class="getStatusClass(vaga.status)">{{ vaga.status }}</span>
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

        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" :disabled="vagasStore.paginaAtual === 1"
                @click="vagasStore.mudarPagina(vagasStore.paginaAtual - 1)">Anterior</a>
            <a class="pagination-next" :disabled="vagasStore.paginaAtual === vagasStore.totalPaginas"
                @click="vagasStore.mudarPagina(vagasStore.paginaAtual + 1)">Próxima</a>
            <ul class="pagination-list">
                <li v-for="pagina in vagasStore.totalPaginas" :key="pagina">
                    <a class="pagination-link" :class="{ 'is-current': pagina === vagasStore.paginaAtual }"
                        @click="vagasStore.mudarPagina(pagina)">
                        {{ pagina }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { useVagasStore } from '@/stores/vagasStore';

const vagasStore = useVagasStore();

function getNivelClass(nivel) {
    switch (nivel) {
        case 'Estágio':
            return 'is-light';
        case 'Júnior':
            return 'is-success';
        case 'Pleno':
            return 'is-info';
        case 'Sênior':
            return 'is-warning';
        case 'Gerência':
            return 'is-danger';
        default:
            return 'is-light';
    }
}

function getStatusClass(status) {
    switch (status) {
        case 'Aberta':
            return 'is-success';
        case 'Fechada':
            return 'is-danger';
        case 'Em análise':
            return 'is-warning';
        default:
            return 'is-light';
    }
}
</script>

<style scoped>
.admin-vagas {
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

.table-container {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    overflow: hidden;
}

.empresa-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.empresa-logo {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 4px;
}

.buttons {
    display: flex;
    gap: 0.5rem;
}
</style>