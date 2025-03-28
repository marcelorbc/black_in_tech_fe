<template>
  <div class="home-banner">
    <div class="in-banner-header">
      <slot></slot>
    </div>
    <div class="home-banner__content">
      <h1 class="home-banner__title">
        <div class="title is-1">Potencializamos Talentos <b>Negros</b></div>
        <div class="subtitle is-4">
          Através de Tecnologia, Negócios, Mercado Financeiro e
          Empreendedorismo.
        </div>
      </h1>

      <div class="home-banner__actions buttons">
        <button class="button is-black">Ver Oportunidades</button>
        <button class="button is-dark">Ver Cursos</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-banner {
  height: 80vh;

  padding-bottom: 50px;
  background-image: url("/public/images/banner/mulheres.jpeg");
  background-size: cover;
}

.in-banner-header {
  height: 60px;
  background: linear-gradient(
    0deg,
    rgba(13, 13, 13, 0.4) 0%,
    rgba(13, 13, 13, 1) 100%
  );
}

.home-banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(13, 13, 13, 0.4) 100%
  );
}

.home-banner__title {
  margin-bottom: 40px;
  align-content: center;
  text-align: center;
}

.title {
  color: rgba(255, 255, 255, 0.9);
}

.subtitle {
  color: rgba(255, 255, 255, 0.55);
  align-content: center;
}

.home-banner__description {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.home-banner__actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>