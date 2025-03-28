<template>
    <div class="admin-relatorios">
        <div class="page-header">
            <h1 class="title is-3">Relatórios e Estatísticas</h1>
            <div class="buttons">
                <button class="button is-info">
                    <span class="icon">
                        <i class="fas fa-file-export"></i>
                    </span>
                    <span>Exportar</span>
                </button>
                <button class="button is-light">
                    <span class="icon">
                        <i class="fas fa-print"></i>
                    </span>
                    <span>Imprimir</span>
                </button>
            </div>
        </div>

        <div class="notification is-info is-light">
            <p class="has-text-centered">A funcionalidade de relatórios está em desenvolvimento.</p>
        </div>

        <div class="columns is-multiline">
            <div class="column is-3">
                <div class="card stat-card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <span class="icon is-large has-text-success">
                                    <i class="fas fa-users fa-2x"></i>
                                </span>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">1,245</p>
                                <p class="subtitle is-6">Usuários</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-3">
                <div class="card stat-card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <span class="icon is-large has-text-info">
                                    <i class="fas fa-newspaper fa-2x"></i>
                                </span>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">87</p>
                                <p class="subtitle is-6">Notícias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-3">
                <div class="card stat-card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <span class="icon is-large has-text-warning">
                                    <i class="fas fa-calendar-alt fa-2x"></i>
                                </span>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">32</p>
                                <p class="subtitle is-6">Eventos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-3">
                <div class="card stat-card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <span class="icon is-large has-text-danger">
                                    <i class="fas fa-briefcase fa-2x"></i>
                                </span>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">64</p>
                                <p class="subtitle is-6">Vagas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.admin-relatorios {
    padding: 1rem;
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.stat-card {
    height: 100%;
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>