<template>
  <MainLayout :showMenu="true" :navbarClasses="navbar">
    <div class="container-inside columns">
      <div class="column">
        <div class="content">
          <div class="title">Black in Tech para as Empresas</div>
          <div class="card-container">
            <div class="card green-bg">
              <div class="card-title">Dinheiro Novo</div>
              <div class="card-text">Aproveitamento de Inovação Aberta.</div>
            </div>

            <div class="card purple-bg">
              <div class="card-title">Experiência Diversa</div>
              <div class="card-text">Integração de múltiplas perspectivas.</div>
            </div>

            <div class="card orange-bg">
              <div class="card-title">Acesso ao Estado da Arte</div>
              <div class="card-text">
                Parcerias com instituições de ensino de excelência.
              </div>
            </div>

            <div class="card blue-bg">
              <div class="card-title">Networking</div>
              <div class="card-text">
                Conexões com talentos e líderes do setor.
              </div>
            </div>

            <div class="card red-bg">
              <div class="card-title">Mentorias</div>
              <div class="card-text">
                Orientação especializada para desenvolvimento profissional.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <img
          class="man-image"
          src="@/../public/images/presente.png"
          alt="Presente"
        />
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
const navbar = { "fundo-transparent": true };
</script>
<style scoped>
.man-image {
  position: relative; /* Importante pra posicionar o pseudo-elemento */
  background: #fff;
  padding: 20px;
  height: 100%;
  width: 100%;
  z-index: 1; /* Mantém o texto na frente */
}

.container-inside {
  padding: 0px;
  margin: 20px;
  margin-bottom: 80px;
  border-radius: 5px;
  background: linear-gradient(
    135deg,
    var(--contrast-background-color-9) 0%,
    var(--contrast-background-color-10) 100%
  );
  color: var(--contrast-background-color-1);
}
.column {
  padding: 0px;
}
.content {
  padding: 20px;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
  color: aliceblue;
}
li {
  margin-bottom: 10px;
}
.green {
  color: var(--green);
  font-size: 1.2rem;
  font-weight: 700;
}
.purple {
  color: var(--purple);
  font-size: 1.2rem;
  font-weight: 700;
}
.orange {
  color: var(--orange);
  font-size: 1.2rem;
  font-weight: 700;
}
.blue {
  color: var(--blue);
  font-size: 1.2rem;
  font-weight: 700;
}
.red {
  color: var(--red);
  font-size: 1.2rem;
  font-weight: 700;
}
img {
  width: 100%;
}

.card {
  border-radius: 8px;
  border: 0px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-title {
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.4;
}

.green-bg {
  background: linear-gradient(
    0deg,
    var(--green) 8%,
    color-mix(in srgb, var(--green) 75%, #99ff99) 100%
  );
}
.purple-bg {
  background: linear-gradient(
    135deg,
    var(--purple) 80%,
    color-mix(in srgb, var(--purple) 70%, #99ff) 100%
  );
}
.orange-bg {
  background: linear-gradient(
    135deg,
    var(--orange) 0%,
    color-mix(in srgb, var(--orange) 70%, #ff8888) 100%
  );
}
.blue-bg {
  background: linear-gradient(
    135deg,
    var(--blue) 0%,
    color-mix(in srgb, var(--blue) 70%, #aaaaff) 100%
  );
}
.red-bg {
  background: linear-gradient(
    135deg,
    var(--red) 0%,
    color-mix(in srgb, var(--red) 70%, #ffaaaa) 100%
  );
}
</style>