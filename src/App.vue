<template>
  <div id="app-container">
    <div class="background-svg">
      <SvgBackground />
    </div>

    <div class="header-bar" :class="{ 'hidden': isMenuOpen }">
      <button @click="isMenuOpen = true" class="menu-toggle-button">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <span class="header-title" v-if="!isMenuOpen">{{ $t('developer_name') }}</span>
    </div>

    <div v-if="isMenuOpen" class="sidebar-overlay" @click="isMenuOpen = false"></div>

    <NavBar :is-mobile-open="isMenuOpen" @close-menu="isMenuOpen = false">
      <template v-slot:close-button>
        <button @click="isMenuOpen = false" class="menu-close-button">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </template>
    </NavBar>

    <main class="content-area">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/SideBar.vue';
import SvgBackground from './components/SvgBackground.vue'

const isMenuOpen = ref(false);

const loadTheme = () => {
  const savedTheme = localStorage.getItem('user-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
};

onMounted(() => {
  loadTheme();
});
</script>

<style scoped>
.content-area {
  flex-grow: 1;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* Top padding to accommodate the fixed header */
  padding-top: 70px;
}

.header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 900;
  padding: 10px 20px;
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: opacity 0.3s;
}

.header-bar.hidden {
  opacity: 0;
  pointer-events: none;
}

.header-title {
  font-weight: bold;
  color: var(--color-text);
  font-size: 1.1rem;
}

.menu-toggle-button {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
}

.menu-close-button {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 950;
}

@media (max-width: 768px) {
  .content-area {
    padding: 80px 1rem 2rem;
  }
}
</style>