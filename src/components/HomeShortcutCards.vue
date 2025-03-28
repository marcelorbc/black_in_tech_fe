<template>
    <div class="fixed-grid has-3-cols">
        <div class="title is-centered">
            Descubra as ferramentas e recursos projetados para conectá-lo com oportunidades e fortalecer nossa
            comunidade.
        </div>
        <div class="grid">
            <div class="cell" v-for="card in cards" :key="card.title">
                <div class="card shortcut-card">

                    <h3><i :class="card.icon"></i>{{ card.title }}</h3>
                    <p>{{ card.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const cards = [
    {
        title: 'Cursos',
        description: 'Confira os cursos disponíveis',
        icon: ['fas', 'fa-graduation-cap']
    },
    {
        title: 'Eventos',
        description: 'Confira os próximos eventos',
        icon: 'fas fa-calendar-alt'
    },
    {
        title: 'Oportunidades',
        description: 'Confira as oportunidades de emprego',
        icon: 'fas fa-briefcase'
    },
    {
        title: 'Conexão africa',
        description: 'Conheça a conexão africa',
        icon: 'fas fa-globe-africa'
    },
    {
        title: 'Forum de discussão',
        description: 'Participe do forum de discussão',
        icon: 'fas fa-comments'
    },
    {
        title: 'Programa de mentoria',
        description: 'Participe do programa de mentoria',
        icon: 'fas fa-user-friends'
    }
]



</script>
<style scoped>
.shortcut-cards {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.shortcut-card {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 15px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--surface-card) 0%, var(--surface-ground) 100%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: whitesmoke;
    transition: all 0.3s;
    height: 200px;

}

.shortcut-card i {
    font-size: 30px;
    margin-bottom: 10px;
    margin-right: 10px;
}

.shortcut-card h3 {
    font-size: 30px;
    margin-bottom: 10px;
}

.shortcut-card p {
    font-size: 22px;
}

.title {
    font-size: 30px;
    font-weight: 100px !important;
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;
}
</style>