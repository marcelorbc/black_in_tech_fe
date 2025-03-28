import newsService from '@/services/newsService'
import { useNotificationsStore } from '@/stores/notificationsStore'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [],
        featuredNews: [],
        currentNews: null,
        loading: false,
        error: null,
        pagination: {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 0
        },
        filters: {
            category: '',
            status: '',
            search: '',
            dateFrom: null,
            dateTo: null
        }
    }),

    getters: {
        getNewsById: (state) => (id) => {
            return state.news.find(item => item.id === parseInt(id) || item.id === id)
        },

        isLoading: (state) => state.loading,

        filteredNews: (state) => {
            if (!state.filters.category && !state.filters.status) return state.news

            return state.news.filter(item => {
                let matches = true

                if (state.filters.category && item.categoria !== state.filters.category) {
                    matches = false
                }

                if (state.filters.status && item.status !== state.filters.status) {
                    matches = false
                }

                return matches
            })
        },

        totalPages: (state) => {
            return Math.ceil(state.pagination.total / state.pagination.limit) || 1
        }
    },

    actions: {
        /**
         * Define os filtros atuais e carrega as notícias filtradas
         * @param {Object} filters - Filtros a serem aplicados
         */
        async setFilters(filters) {
            this.filters = { ...this.filters, ...filters }
            await this.fetchNews({ page: 1 })
        },

        /**
         * Carrega todas as notícias com paginação e filtros
         */
        async fetchNews({ page = 1, limit = 10, search = '' } = {}) {
            this.loading = true
            this.error = null

            try {
                const params = {
                    page,
                    limit,
                    ...this.filters
                }

                if (search) params.q = search

                const response = await newsService.getAll(params)

                if (response.data.items) {
                    this.news = response.data.items

                    if (response.data.meta) {
                        this.pagination = {
                            page: response.data.meta.currentPage || page,
                            limit: response.data.meta.itemsPerPage || limit,
                            total: response.data.meta.totalItems || response.data.items.length,
                            totalPages: response.data.meta.totalPages || Math.ceil(response.data.items.length / limit)
                        }
                    }
                } else {
                    this.news = response.data
                    this.pagination.total = response.data.length
                    this.pagination.page = page
                    this.pagination.limit = limit
                }

                this.pagination.page = page

                return this.news
            } catch (error) {
                this.error = error.response?.data?.message || error.message || 'Erro ao carregar notícias'
                console.error('Erro ao carregar notícias:', error)
                this.news = []
                return []
            } finally {
                this.loading = false
            }
        },

        /**
         * Carrega notícias em destaque
         */
        async fetchFeaturedNews(limit = 3) {
            this.loading = true
            this.error = null

            try {
                const response = await newsService.getFeatured(limit)
                this.featuredNews = response.data
                return this.featuredNews
            } catch (error) {
                this.error = error.response?.data?.message || error.message || 'Erro ao carregar notícias em destaque'
                console.error('Erro ao carregar notícias em destaque:', error)
                this.featuredNews = []
                return []
            } finally {
                this.loading = false
            }
        },

        /**
         * Carrega uma notícia pelo ID
         */
        async fetchNewsById(id) {
            const existingNews = this.getNewsById(id)
            if (existingNews && Object.keys(existingNews).length > 3) {
                this.currentNews = existingNews
                return existingNews
            }

            this.loading = true
            this.error = null

            try {
                const response = await newsService.getById(id)
                this.currentNews = response.data

                const index = this.news.findIndex(item => item.id === id)
                if (index !== -1) {
                    this.news[index] = response.data
                }

                return response.data
            } catch (error) {
                this.error = error.response?.data?.message || error.message || `Erro ao carregar notícia com ID ${id}`
                console.error(`Erro ao carregar notícia com ID ${id}:`, error)
                return null
            } finally {
                this.loading = false
            }
        },

        /**
         * Cria uma nova notícia
         */
        async createNews(newsData) {
            this.loading = true
            this.error = null

            try {
                const response = await newsService.create(newsData)

                this.news.unshift(response.data)

                this.pagination.total += 1

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'success',
                    message: 'Notícia criada com sucesso!'
                })

                return response.data
            } catch (error) {
                this.error = error.response?.data?.message || error.message || 'Erro ao criar notícia'
                console.error('Erro ao criar notícia:', error)

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'error',
                    message: this.error
                })

                throw error
            } finally {
                this.loading = false
            }
        },

        /**
         * Atualiza uma notícia existente
         */
        async updateNews(id, newsData) {
            this.loading = true
            this.error = null

            try {
                const response = await newsService.update(id, newsData)

                const index = this.news.findIndex(item => item.id === id)
                if (index !== -1) {
                    this.news[index] = { ...this.news[index], ...response.data }
                }

                if (this.currentNews && this.currentNews.id === id) {
                    this.currentNews = { ...this.currentNews, ...response.data }
                }

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'success',
                    message: 'Notícia atualizada com sucesso!'
                })

                return response.data
            } catch (error) {
                this.error = error.response?.data?.message || error.message || `Erro ao atualizar notícia com ID ${id}`
                console.error(`Erro ao atualizar notícia com ID ${id}:`, error)

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'error',
                    message: this.error
                })

                throw error
            } finally {
                this.loading = false
            }
        },

        /**
         * Alterna o status de destaque de uma notícia
         */
        async toggleFeatured(id) {
            const news = this.getNewsById(id)
            if (!news) return

            return this.updateNews(id, {
                ...news,
                destaque: !news.destaque
            })
        },

        /**
         * Remove uma notícia
         */
        async deleteNews(id) {
            this.loading = true
            this.error = null

            try {
                await newsService.delete(id)

                this.news = this.news.filter(item => item.id !== id)

                this.pagination.total -= 1

                if (this.currentNews && this.currentNews.id === id) {
                    this.currentNews = null
                }

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'success',
                    message: 'Notícia removida com sucesso!'
                })

                return true
            } catch (error) {
                this.error = error.response?.data?.message || error.message || `Erro ao remover notícia com ID ${id}`
                console.error(`Erro ao remover notícia com ID ${id}:`, error)

                const notificationStore = useNotificationsStore?.()
                notificationStore?.add({
                    type: 'error',
                    message: this.error
                })

                throw error
            } finally {
                this.loading = false
            }
        },

        /**
         * Busca notícias por termo
         */
        async searchNews(query) {
            this.loading = true
            this.error = null

            try {
                if (!query || query.trim() === '') {
                    return this.fetchNews()
                }

                const response = await newsService.search(query)
                this.news = response.data

                this.pagination = {
                    ...this.pagination,
                    total: response.data.length,
                    page: 1
                }

                return response.data
            } catch (error) {
                this.error = error.response?.data?.message || error.message || `Erro ao buscar notícias com termo "${query}"`
                console.error(`Erro ao buscar notícias com termo "${query}":`, error)

                const notificationStore = useNotificationsStore?.()
                if (notificationStore) {
                    notificationStore.add({
                        type: 'error',
                        message: this.error
                    })
                }

                return []
            } finally {
                this.loading = false
            }
        },

        resetState() {
            this.news = []
            this.featuredNews = []
            this.currentNews = null
            this.error = null
            this.pagination = {
                page: 1,
                limit: 10,
                total: 0,
                totalPages: 0
            }
            this.filters = {
                category: '',
                status: '',
                search: '',
                dateFrom: null,
                dateTo: null
            }
        }
    }
}) 