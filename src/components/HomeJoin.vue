<template>
    <section class="section has-text-centered join-section">
        <div class="container">
            <h1 class="title has-text-white mb-5">Junte-se à nossa comunidade e acesse oportunidades exclusivas</h1>
            <p class="subtitle has-text-grey-light mb-6 max-width-text">
                Crie seu perfil hoje para navegar por cursos educacionais, candidatar-se a empregos e conectar-se com
                uma rede de profissionais negros em tecnologia.
            </p>
            <div class="buttons is-centered">
                <button class="button is-dark is-rounded">Registrar Agora</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.join-section {
    padding: 5rem 1.5rem;
    position: relative;
    overflow: hidden;

}

.max-width-text {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
}

.buttons {
    margin-top: 2.5rem;
}

.button {
    margin: 0 0.75rem;
    padding: 0.75rem 2rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button.is-primary {
    background-color: #4461F2;
    border-color: transparent;
}

.button.is-primary:hover {
    background-color: #3450E0;
    transform: translateY(-3px);
}

.button.is-outlined.is-light {
    border-width: 2px;
}

.button.is-outlined.is-light:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: translateY(-3px);
}
</style>