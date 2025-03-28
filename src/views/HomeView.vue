<template>
  <MainLayout :showMenu="false">
    <section class="hero">
      <HomeBanner>
        <HeaderMenu :navbarClasses="{ 'fundo-transparent': true }" />
      </HomeBanner>
    </section>
    <section>
      <HomeShortcutCards />
    </section>
    <sction>
      <HomeEventsCards />
    </sction>
    <section>
      <HomePartners />
    </section>
    <section>
      <HomeJoin />
    </section>
  </MainLayout>
</template>

<script setup>
import { onMounted } from "vue";
//import { useRouter } from 'vue-router'
//import { useAuthStore } from '@/stores/auth'
//import axios from 'axios'

onMounted(() => {});
</script>

<style scoped>
.welcome-card {
  background: linear-gradient(
    135deg,
    var(--surface-card) 0%,
    var(--surface-ground) 100%
  );
  padding: 2rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary-color);
}

.text-primary {
  color: var(--primary-color) !important;
}

:deep(.p-timeline) {
  .p-timeline-event-opposite {
    display: none;
  }

  .p-timeline-event-content {
    padding: 0 1rem;
  }
}

.dashboard-stats .card {
  transition: all var(--transition-duration);
}

.dashboard-stats .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.p-button.p-button-outlined {
  border-color: var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background: rgba(212, 175, 55, 0.1);
  }

  i {
    color: var(--primary-color);
  }
}
</style>