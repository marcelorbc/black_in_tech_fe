<template>
    <div class="admin-noticias">
        <div class="page-header">
            <h1 class="title is-3">Gerenciamento de Notícias</h1>
            <button class="button is-success" @click="openDialog(null)">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Nova Notícia</span>
            </button>
        </div>

        <div class="filters">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input class="input" type="text" placeholder="Buscar notícias..." v-model="searchQuery">
                    <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                <div class="control">
                    <button class="button is-info" @click="searchNews">
                        Buscar
                    </button>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <div class="select">
                        <select v-model="selectedCategory">
                            <option value="">Todas as categorias</option>
                            <option value="Meio Ambiente">Meio Ambiente</option>
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Educação">Educação</option>
                            <option value="Economia">Economia</option>
                            <option value="Cultura">Cultura</option>
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
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Destaque</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in newsStore.news" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img :src="item.imagem" alt="Imagem da notícia">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-6">{{ item.titulo }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="tag is-info is-light">{{ item.categoria }}</span>
                        </td>
                        <td>{{ formatDate(item.dataPublicacao) }}</td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" :checked="item.destaque" @change="toggleDestaque(item)">
                                <span class="slider round"></span>
                            </label>
                        </td>
                        <td>
                            <div class="buttons are-small">
                                <button class="button is-link" title="Visualizar" @click="openDialog(item)">
                                    <span class="icon is-small">
                                        <i class="fas fa-eye"></i>
                                    </span>
                                </button>
                                <button class="button is-info" title="Editar" @click="openDialog(item)">
                                    <span class="icon is-small">
                                        <i class="fas fa-edit"></i>
                                    </span>
                                </button>
                                <button class="button is-danger" title="Excluir" @click="confirmDelete(item)">
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
            <a class="pagination-previous" @click="changePage(page - 1)" :disabled="page === 1">Anterior</a>
            <a class="pagination-next" @click="changePage(page + 1)" :disabled="page === totalPages">Próxima</a>
            <ul class="pagination-list">
                <li v-for="n in totalPages" :key="n">
                    <a class="pagination-link" @click="changePage(n)" :class="{ 'is-current': n === page }">
                        {{ n }}
                    </a>
                </li>
            </ul>
        </nav>

        <!-- Dialog para criar/editar notícia -->
        <v-dialog v-model="dialog" max-width="800px">
            <v-card>
                <v-card-title>
                    {{ editedItem ? 'Editar Notícia' : 'Nova Notícia' }}
                </v-card-title>

                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <!-- Formulário de notícia -->
                        <!-- ... -->
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="dialog = false">Cancelar</v-btn>
                    <v-btn color="primary" :disabled="!valid" @click="saveNews">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Dialog de confirmação para deletar -->
        <v-dialog v-model="deleteDialog" max-width="500px">
            <v-card>
                <v-card-title>Confirmar exclusão</v-card-title>
                <v-card-text>
                    Tem certeza que deseja excluir a notícia "{{ deleteItem?.titulo }}"?
                    Esta ação não pode ser desfeita.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="deleteDialog = false">Cancelar</v-btn>
                    <v-btn color="error" @click="deleteNews">Excluir</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { useNewsStore } from '@/stores/newsStore'
import { computed, onMounted, ref } from 'vue'

const newsStore = useNewsStore()
const dialog = ref(false)
const deleteDialog = ref(false)
const editedItem = ref(null)
const deleteItem = ref(null)
const valid = ref(false)
const form = ref(null)
const page = ref(1)
const searchQuery = ref('')
const selectedCategory = ref('')

// Formulário para criar/editar notícia
const formData = ref({
    titulo: '',
    conteudo: '',
    imagem: null,
    autor: '',
    status: 'publicado'
})

// Total de páginas para paginação
const totalPages = computed(() => {
    return Math.ceil(newsStore.pagination.total / newsStore.pagination.limit)
})

// Carregar notícias ao montar o componente
onMounted(async () => {
    await newsStore.fetchNews()
})

// Mudar de página
const changePage = async (newPage) => {
    await newsStore.fetchNews({ page: newPage })
}

// Abrir diálogo para criar/editar
const openDialog = (item) => {
    if (item) {
        editedItem.value = item
        formData.value = { ...item }
    } else {
        editedItem.value = null
        formData.value = {
            titulo: '',
            conteudo: '',
            imagem: null,
            autor: '',
            status: 'publicado'
        }
    }
    dialog.value = true
}

// Salvar notícia (criar ou atualizar)
const saveNews = async () => {
    if (!valid.value) return

    try {
        if (editedItem.value) {
            await newsStore.updateNews(editedItem.value.id, formData.value)
        } else {
            await newsStore.createNews(formData.value)
        }
        dialog.value = false
    } catch (error) {
        console.error('Erro ao salvar notícia:', error)
    }
}

// Confirmar exclusão
const confirmDelete = (item) => {
    deleteItem.value = item
    deleteDialog.value = true
}

// Excluir notícia
const deleteNews = async () => {
    try {
        if (deleteItem.value) {
            await newsStore.deleteNews(deleteItem.value.id)
            deleteDialog.value = false
        }
    } catch (error) {
        console.error('Erro ao excluir notícia:', error)
    }
}

// Formatar data
const formatDate = (dateString) => {
    if (!dateString) return '-'
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('pt-BR').format(date)
}

// Toggle destaque
const toggleDestaque = async (item) => {
    try {
        await newsStore.updateNews(item.id, { ...item, destaque: !item.destaque })
    } catch (error) {
        console.error('Erro ao atualizar destaque:', error)
    }
}

// Buscar notícias
const searchNews = async () => {
    await newsStore.fetchNews({ q: searchQuery.value })
}
</script>

<style scoped>
.admin-noticias {
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