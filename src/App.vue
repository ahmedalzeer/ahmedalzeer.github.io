<template>
  <div id="app-root">
    <SvgBackground v-if="currentLayout !== 'futuristic'" />
    <transition name="fade-layout" mode="out-in">
      <component :is="layouts[currentLayout]" />
    </transition>
    <button class="style-switcher-btn" @click="nextLayout">
      <font-awesome-icon icon="wand-magic-sparkles" />
      <span class="btn-txt">{{ currentLayout.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ClassicLayout from './layouts/ClassicLayout.vue';
import ModernLayout from './layouts/ModernLayout.vue';
import FuturisticLayout from './layouts/FuturisticLayout.vue';
import SvgBackground from './components/SvgBackground.vue';

const layouts = { classic: ClassicLayout, modern: ModernLayout, futuristic: FuturisticLayout };
const currentLayout = ref(localStorage.getItem('user-layout') || 'classic');

const nextLayout = () => {
  const keys = Object.keys(layouts);
  currentLayout.value = keys[(keys.indexOf(currentLayout.value) + 1) % keys.length];
  localStorage.setItem('user-layout', currentLayout.value);
  window.scrollTo(0, 0);
};

onMounted(() => {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('user-theme') || 'dark');
});
</script>

<style>
.fade-layout-enter-active,
.fade-layout-leave-active {
  transition: opacity 0.4s;
}

.fade-layout-enter-from,
.fade-layout-leave-to {
  opacity: 0;
}

.style-switcher-btn {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 9999;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .btn-txt {
    display: none;
  }
}
</style>