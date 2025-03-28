<template>
    <div class="events-section">
        <div class="title is-centered">
            Próximos Eventos
            Não perca essas valiosas oportunidades de aprender e se conectar
        </div>
        <div class="fixed-grid has-4-cols">
            <div class="grid">
                <div class="card" v-for="card in cards" :key="card.title">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="card.image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <i :class="card.icon"></i>
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title-card">{{ card.title }}</p>
                                <p class="subTitle-card">{{ card.subTitle }}</p>
                            </div>
                        </div>

                        <div class="content">
                            {{ card.description }}
                            <div>{{ formatTime(card.dateTime) }}</div>
                        </div>
                    </div>

                    <footer class="card-footer">
                        <span href="#" @click="share(card.id)" class="card-footer-item">Compartilhar</span>
                        <span href="#" @click="register(card.id)" class="card-footer-item">Me registrar</span>
                    </footer>
                </div>

            </div>
        </div>
        <button class="button view-all-button">Ver todos</button>
    </div>
</template>
<script setup>
const cards = [
    {
        id: 1,
        title: 'Cursos',
        subTitle: 'Confira os cursos disponíveis',
        description: 'Confira os cursos disponíveis',
        dateTime: '2024-1-1 11:09 PM',
        image: 'https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/1330372094/1693761761.jpg',
        icon: ['fas', 'fa-graduation-cap']
    },
    {
        id: 2,
        title: 'Eventos',
        subTitle: 'Confira os próximos eventos',
        description: 'Confira os próximos eventos',
        dateTime: '2024-1-1 11:09 PM',
        image: 'https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/1330372094/1693761761.jpg',
        icon: 'fas fa-calendar-alt'
    },
    {
        id: 3,
        title: 'Oportunidades',
        subTitle: 'Confira as oportunidades de emprego',
        description: 'Confira as oportunidades de emprego',
        dateTime: '2024-1-1 11:09 PM',
        image: 'https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/1330372094/1693761761.jpg',
        icon: 'fas fa-briefcase'
    },
    {
        id: 4,
        title: 'Conexão africa',
        subTitle: 'Conheça a conexão africa',
        description: 'Conheça a conexão africa',
        dateTime: '2024-1-1 11:09 PM',
        image: 'https://1.img-dpreview.com/files/p/TS250x250~sample_galleries/1330372094/1693761761.jpg',
        icon: 'fas fa-globe-africa'
    },
]

function share(id) {
    console.log('Share event with id:', id)
}

function register(id) {
    console.log('Register for event with id:', id)
}

function formatTime(dateTime) {
    return new Date(dateTime).toLocaleString()
}
</script>
<style scoped>
.events-section {
    padding: 20px;
    background: linear-gradient(135deg, var(--contrast-background-color-9) 0%, var(--contrast-background-color-10) 100%);
    border-radius: 5px;
    margin-top: 20px;
    align-content: center;
    text-align: center;
}

.event-icon {
    font-size: 40px;
    color: var(--primary);
    margin-right: 20px;
}

.event-details {
    display: flex;
    flex-direction: column;
}

figure.image.is-48x48 {
    align-content: center;
    vertical-align: middle;
    text-align: center;
    background-color: var(--text-color-secondary);
    color: var(--primary-card-color);
    border-radius: 5px;
}

.card {
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, var(--surface-card) 0%, var(--surface-ground) 100%);
    border: 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    text-align: left;
    border-radius: 15px 15px 5px 5px;
    padding: 0px;
    height: 100%;
}

.card-image {
    border-radius: 5px 5px 0px 0px;
}

.title {
    color: var(--text-color);
    font-size: 20px;
    font-weight: 100px !important;
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;
}

.title-card {
    font-size: 18px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 1;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    margin: 0px;
    padding: 0px;
}

.subTitle-card {
    font-size: 15px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    max-lines: 1;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    margin: 0px;
    padding: 0px;
    color: var(--text-color-secondary);
}

.card-content {
    padding: 10px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}

.card-footer {
    border: 0px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-footer-item {
    color: var(--primary);
    margin: 5px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    background: var(--contrast-background-color-10);
    transition: all 0.3s;
}
</style>
