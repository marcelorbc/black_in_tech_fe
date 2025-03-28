<template>
  <nav class="container navbar is-dark" :class="navbarClasses" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/home">
        <img class="logo" src="@/../public/logo.png" alt="Logo" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" style="flex-grow: 1; justify-content: center">
        <a class="navbar-item" :href="item.link" v-for="item in items" :key="item.title">
          {{ item.title }}
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-dark" @click="login">Entrar</a>
          <a class="button is-text is-dark" @click="cadastro">Cadastro</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
// import props and define nabarClasses as {}
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  navbarClasses: {
    type: Object,
    default: () => ({}),
  },
});

const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Educação",
    link: "/educacao",
  },
  {
    title: "Vagas",
    link: "/vagas",
  },
  {
    title: "Eventos",
    link: "/eventos",
  },
  {
    title: "Empresas",
    link: "/companies",
  },
  {
    title: "Notícias",
    link: "/noticias",
  },
  {
    title: "Sobre nós",
    link: "/sobre-nos",
  },
  {
    title: "Admin",
    link: "/admin",
    isAdmin: true,
  },
];

const login = () => {
  //navigate to login page
  router.push("/login");
};

const cadastro = () => {
  //navigate to cadastro page
  router.push("/cadastro");
};
</script>
<style scoped>
.button {
  height: 30px;
  font-size: 15px;
}

.navbar {
  background: #242424;
}

.fundo-transparent {
  background-color: transparent;
}

.navbar {
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
}

.navbar-center {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.navbar-item {
  color: white;
  align-content: center;
  justify-content: center;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.navbar-item:hover {

  background-color: transparent;
  color: #ff8c00;
}

.navbar-item.is-active {}

.logo {
  margin-left: 10px;
  margin-right: 10px;

  max-height: 60px;

  height: 60px;
}
</style>
