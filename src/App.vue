<template>
  <div id="app-container">
    <div class="background-svg">
      <SvgBackground />
    </div>

    <div class="mobile-header-bar" v-if="!isMenuOpen">
      <button @click="isMenuOpen = true" class="menu-toggle-button">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>

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

// --- Theme Logic (Initialization Only) ---
const loadTheme = () => {
  const savedTheme = localStorage.getItem('user-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let initialTheme = 'dark';
  if (savedTheme) {
    initialTheme = savedTheme;
  } else if (!systemPrefersDark) {
    initialTheme = 'light';
  }
  document.documentElement.setAttribute('data-theme', initialTheme);
};

onMounted(() => {
  loadTheme();
});
</script>

<style scoped>
/* The main content area where views are rendered */
.content-area {
  flex-grow: 1;
  padding: 2rem;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* ================================================= */
/* MOBILE HEADER BAR (Fixed 50px high) */
/* ================================================= */
.mobile-header-bar {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;

  padding: 10px 15px;
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
}

.menu-toggle-button {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  padding: 0;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-header-bar {
    display: block;
    /* Show header bar on mobile */
  }
}


/* ================================================= */
/* MOBILE FIX: Apply top padding to push content down */
/* ================================================= */
@media (max-width: 768px) {
  .content-area {
    /* Pushes the content down below the 50px fixed mobile header */
    padding-top: 70px;
  }
}
</style>