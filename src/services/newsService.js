import api from '@/services/api'

/**
 * Serviço para gerenciar as operações relacionadas a notícias
 */
export default {
    /**
     * Obtém todas as notícias
     * @param {Object} params - Parâmetros de consulta (paginação, filtros, etc)
     * @returns {Promise} - Promise com a resposta da requisição
     */
    getAll(params = {}) {
        return api.get('/noticias', { params })
    },

    /**
     * Obtém uma notícia pelo ID
     * @param {String|Number} id - ID da notícia
     * @returns {Promise} - Promise com a resposta da requisição
     */
    getById(id) {
        return api.get(`/noticias/${id}`)
    },

    /**
     * Cria uma nova notícia
     * @param {Object} newsData - Dados da notícia a ser criada
     * @returns {Promise} - Promise com a resposta da requisição
     */
    create(newsData) {
        // Se newsData contiver um arquivo de imagem, usamos FormData
        if (newsData.imagem instanceof File) {
            const formData = new FormData()

            // Adiciona todos os campos ao FormData
            Object.keys(newsData).forEach(key => {
                if (key === 'imagem') {
                    formData.append('imagem', newsData.imagem)
                } else {
                    formData.append(key, newsData[key])
                }
            })

            return api.post('/noticias', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }

        // Caso não tenha imagem, envia como JSON normal
        return api.post('/noticias', newsData)
    },

    /**
     * Atualiza uma notícia existente
     * @param {String|Number} id - ID da notícia a ser atualizada
     * @param {Object} newsData - Novos dados da notícia
     * @returns {Promise} - Promise com a resposta da requisição
     */
    update(id, newsData) {
        // Se newsData contiver um arquivo de imagem, usamos FormData
        if (newsData.imagem instanceof File) {
            const formData = new FormData()

            // Adiciona todos os campos ao FormData
            Object.keys(newsData).forEach(key => {
                if (key === 'imagem') {
                    formData.append('imagem', newsData.imagem)
                } else {
                    formData.append(key, newsData[key])
                }
            })

            return api.put(`/noticias/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }

        // Caso não tenha imagem, envia como JSON normal
        return api.put(`/noticias/${id}`, newsData)
    },

    /**
     * Remove uma notícia
     * @param {String|Number} id - ID da notícia a ser removida
     * @returns {Promise} - Promise com a resposta da requisição
     */
    delete(id) {
        return api.delete(`/noticias/${id}`)
    },

    /**
     * Obtém notícias em destaque
     * @param {Number} limit - Limite de notícias a serem retornadas
     * @returns {Promise} - Promise com a resposta da requisição
     */
    getFeatured(limit = 3) {
        return api.get('/noticias/destaque', { params: { limit } })
    },

    /**
     * Busca notícias por termo
     * @param {String} query - Termo de busca
     * @returns {Promise} - Promise com a resposta da requisição
     */
    search(query) {
        return api.get('/noticias/busca', { params: { q: query } })
    }
} 