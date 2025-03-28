<template>
    <footer class="footer">
        <!-- Newsletter Section -->
        <div class="newsletter-container">
            <div class="box has-background-success p-5">
                <div class="columns is-vcentered">
                    <div class="column">
                        <p class="title is-4 has-text-white mb-0">Assine nossas notícias</p>
                        <p class="subtitle is-6 has-text-white-bis mt-2">Fique por dentro das novidades</p>
                    </div>
                    <div class="column is-half">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <input class="input is-medium" type="email" placeholder="Digite seu melhor email">
                            </div>
                            <div class="control">
                                <button class="button is-light is-medium">
                                    <span>Assinar</span>
                                    <span class="icon">
                                        <i class="fas fa-paper-plane"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Footer Content -->
        <div class="columns is-variable is-8 main-footer-content">
            <div class="column">
                <h2 class="title is-6 has-text-white">Conhecimento</h2>
                <ul>
                    <li><a href="/eventos" class="has-text-white">Eventos</a></li>
                    <li><a href="#" class="has-text-white">Treinamentos</a></li>
                    <li><a href="#" class="has-text-white">Mentorias</a></li>
                    <li><a href="#" class="has-text-white">Quem somos</a></li>
                    <li><a href="/noticias" class="has-text-white">Notícias</a></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="title is-6 has-text-white">Trabalho</h2>
                <ul>
                    <li><a href="#" class="has-text-white">Cursos</a></li>
                    <li><a href="#" class="has-text-white">Vagas</a></li>
                    <li><a href="#" class="has-text-white">Formações</a></li>
                </ul>
            </div>
            <div class="column">
                <h2 class="title is-6 has-text-white">Ecosistema</h2>
                <ul>
                    <li><a href="#" class="has-text-white">Conexão com a Mãe África</a></li>
                    <li><a href="#" class="has-text-white">Blog</a></li>
                </ul>
            </div>

            <!-- Social Media Column -->
            <div class="column">
                <h2 class="title is-5 has-text-white mb-5">SOCIAL</h2>
                <div class="social-buttons">
                    <a class="button is-light is-outlined mb-3" href="#">
                        <span class="icon"><i class="fab fa-facebook"></i></span>
                        <span>Facebook</span>
                    </a>
                    <a class="button is-light is-outlined mb-3" href="#">
                        <span class="icon"><i class="fab fa-twitter"></i></span>
                        <span>Twitter</span>
                    </a>
                    <a class="button is-light is-outlined mb-3" href="#">
                        <span class="icon"><i class="fab fa-instagram"></i></span>
                        <span>Instagram</span>
                    </a>
                    <a class="button is-light is-outlined mb-3" href="#">
                        <span class="icon"><i class="fab fa-linkedin"></i></span>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #1a1a1a;
    padding: 2rem 1.5rem;
    position: relative;
}

.newsletter-container {
    position: relative;
    margin-top: -80px;
    padding: 0 1.5rem;
    margin-bottom: 4rem;
}

.main-footer-content {
    padding: 2rem 0;
}

.social-buttons {
    display: flex;
    flex-direction: column;
}

.social-buttons .button {
    width: 100%;
    justify-content: flex-start;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.social-buttons .button:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

/* Links styling */
.footer ul li {
    margin-bottom: 0.75rem;
}

.footer ul li a {
    opacity: 0.8;
    transition: all 0.3s ease;
}

.footer ul li a:hover {
    opacity: 1;
    padding-left: 5px;
}

.title.is-6 {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>