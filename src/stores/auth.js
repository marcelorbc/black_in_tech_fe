import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
        loading: false
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user
    },

    actions: {
        async login(credentials) {
            try {
                this.loading = true
                const response = await axios.post('http://localhost:3000/api/users/login', credentials)
                const { token, user } = response.data

                this.token = token
                this.user = user
                localStorage.setItem('token', token)

                // Configure axios defaults
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                return { success: true }
            } catch (error) {
                console.error('Login error:', error)
                return {
                    success: false,
                    error: error.response?.data?.message || 'An error occurred during login'
                }
            } finally {
                this.loading = false
            }
        },

        async logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        },

        async checkAuth() {
            if (!this.token) return false

            try {
                const response = await axios.get('http://localhost:3000/api/users/me')
                this.user = response.data
                return true
            } catch (error) {
                this.logout()
                return false
            }
        }
    }
}) 