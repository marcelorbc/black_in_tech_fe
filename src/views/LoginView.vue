<template>
  <div class="auth-wrapper">
    testes
  </div>
</template>

<script setup>

</script>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.auth-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  perspective: 1000px;
}

:deep(.login-card) {
  background: rgba(30, 32, 44, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

:deep(.login-card:hover) {
  transform: translateY(-5px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(99, 102, 241, 0.2);
}

:deep(.login-card .p-card-header) {
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 2rem 2rem;
  border-radius: 24px 24px 0 0;
}

:deep(.login-card .p-card-content) {
  padding: 2.5rem 2rem;
}

.login-header {
  text-align: center;
}

.logo-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
}

.logo-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 8px 20px rgba(0, 0, 0, 0.3);
}

.logo-circle::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  border-radius: 50%;
  z-index: 0;
}

.logo {
  width: 60%;
  height: 60%;
  object-fit: contain;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
}

.welcome-text {
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.proverb {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

.proverb-author {
  display: block;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.field {
  margin-bottom: 0.5rem;
}

:deep(.p-input-icon-left) {
  width: 100%;
  position: relative;
}

:deep(.p-input-icon-left > i) {
  color: var(--primary-color);
  left: 1.25rem;
  font-size: 1.1rem;
  z-index: 1;
}

:deep(.p-inputtext),
:deep(.p-password input) {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 1.25rem 1rem 1.25rem 3.25rem;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
}

:deep(.p-password) {
  width: 100%;
  display: block;
}

:deep(.p-password .p-password-input) {
  width: 100%;
}

:deep(.p-inputtext:enabled:hover),
:deep(.p-password input:enabled:hover) {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.06);
}

:deep(.p-inputtext:enabled:focus),
:deep(.p-password input:enabled:focus) {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.08);
}

:deep(.p-password-panel) {
  background: rgba(30, 32, 44, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.remember-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.forgot-password:hover {
  color: var(--primary-light);
  text-decoration: none;
  transform: translateX(3px);
}

:deep(.p-checkbox) {
  width: 1.25rem;
  height: 1.25rem;
}

:deep(.p-checkbox .p-checkbox-box) {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
}

:deep(.p-checkbox .p-checkbox-box:hover) {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.06);
}

:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.login-button {
  height: 3.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
}

.login-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
}

.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
  z-index: 0;
  animation: bgAnimation 20s ease infinite alternate;
}

@keyframes bgAnimation {
  0% {
    background-position: 0% 0%, 100% 100%, 50% 50%;
    opacity: 0.5;
  }

  50% {
    background-position: 100% 0%, 0% 100%, 30% 70%;
    opacity: 0.7;
  }

  100% {
    background-position: 0% 100%, 100% 0%, 70% 30%;
    opacity: 0.5;
  }
}

.p-error {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
}
</style>