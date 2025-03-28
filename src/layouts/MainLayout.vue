<template>
  <div class="container">
    <HeaderMenu v-if="showMenu" :navbarClasses="navbarClasses" />
    <div class="slot-content">
      <slot />
    </div>
    <HomeRodape />
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

// Define prop to control menu visibility
defineProps({
  showMenu: {
    type: Boolean,
    default: true
  },
  navbarClasses: {
    type: Object,
    default: () => ({})
  }

})

// African proverbs rotation
const proverbs = [
  "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
  "If you want to go fast, go alone. If you want to go far, go together.",
  "The eye never forgets what the heart has seen.",
  "Unity is strength, division is weakness.",
  "Wisdom is like a baobab tree; no one individual can embrace it."
]

const currentProverb = ref(proverbs[Math.floor(Math.random() * proverbs.length)])

// Rotate proverbs every 30 seconds
setInterval(() => {
  const newIndex = Math.floor(Math.random() * proverbs.length)
  currentProverb.value = proverbs[newIndex]
}, 30000)
</script>

<style scoped>
/* Style remains unchanged */
.vertical-divider {
  width: 2px;
  height: 24px;
  background: var(--surface-border);
}

.sidebar-footer {
  border-top: 1px solid var(--surface-border);
}

.african-wisdom {
  font-style: italic;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slot-content {

  margin-bottom: 100px;
}
</style>