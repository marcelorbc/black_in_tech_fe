<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/logo.png" alt="Black in Tech Logo" class="logo" />
      <h3>Painel Administrativo</h3>
    </div>

    <div class="menu">
      <router-link to="/admin" class="menu-item" active-class="active" exact>
        <i class="fas fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>

      <router-link to="/admin/usuarios" class="menu-item" active-class="active">
        <i class="fas fa-users"></i>
        <span>Usuários</span>
      </router-link>

      <router-link to="/admin/noticias" class="menu-item" active-class="active">
        <i class="fas fa-newspaper"></i>
        <span>Notícias</span>
      </router-link>

      <router-link to="/admin/eventos" class="menu-item" active-class="active">
        <i class="fas fa-calendar-alt"></i>
        <span>Eventos</span>
      </router-link>

      <router-link to="/admin/vagas" class="menu-item" active-class="active">
        <i class="fas fa-briefcase"></i>
        <span>Vagas</span>
      </router-link>

      <router-link to="/admin/cursos" class="menu-item" active-class="active">
        <i class="fas fa-graduation-cap"></i>
        <span>Cursos</span>
      </router-link>

      <router-link to="/admin/relatorios" class="menu-item" active-class="active">
        <i class="fas fa-chart-bar"></i>
        <span>Relatórios</span>
      </router-link>

      <router-link to="/admin/configuracoes" class="menu-item" active-class="active">
        <i class="fas fa-cog"></i>
        <span>Configurações</span>
      </router-link>
    </div>

    <div class="sidebar-footer">
      <button @click="logout" class="logout-btn">
        <i class="fas fa-sign-out-alt"></i>
        <span>Sair</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  router.push("/");
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: #121212;
  color: #fff;
}

.sidebar-header {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #2d2d42;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}

.menu {
  flex: 1;
  padding: 15px 0;
  overflow-y: auto;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #b8b8d4;
  text-decoration: none;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: #2d2d42;
  color: #fff;
}

.menu-item.active {
  background-color: #48c774;
  color: #fff;
  border-left: 4px solid #fff;
}

.menu-item i {
  width: 20px;
  margin-right: 10px;
  text-align: center;
}

.sidebar-footer {
  padding: 15px 20px;
  border-top: 1px solid #2d2d42;
}

.logout-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #e14d72;
  color: #e14d72;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background-color: #e14d72;
  color: #fff;
}

.logout-btn i {
  margin-right: 10px;
}
</style>
