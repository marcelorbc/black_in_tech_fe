<template>
  <div class="container-partners">
    <div class="columns is-vcentered is-vtop">
      <div class="column is-half is-centered is-vtop">
        <h2 class="title">Trabalhamos com os Melhores Parceiros</h2>
        <div style="padding: 0px">
          <p>
            Estamos orgulhosos de anunciar nossa parceria com duas das mais
            renomadas universidades dos Estados Unidos: UC Berkeley e Georgia
            Institute of Technology. Juntas, estamos comprometidos em oferecer
            programas educacionais de alta qualidade, com aulas na última semana
            de junho/2025, com duração de 3 semanas.
          </p>
        </div>
      </div>
      <div class="column is-half">
        <div class="columns is-centered is-vcentered">
          <div class="column is-narrow has-text-centered">
            <figure class="image" style="width: 200px">
              <img src="@/../public/images/UC.png" alt="Parceiro 1" />
            </figure>
          </div>
        </div>
        <div class="columns is-centered is-vcentered">
          <div class="column is-narrow has-text-centered">
            <figure class="image" style="width: 200px">
              <img src="@/../public/images/GIT.png" alt="Parceiro 2" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-partners {
  background-color: #f5f5f5;
  color: #333;
  padding: 10px 0px 10px 10px;
}
.columns {
  margin: 0;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #565656;
}
/* images em preto e branco com tom formal  */
.image {
  filter: grayscale(100%);
  transition: filter 0.5s;
}
</style>