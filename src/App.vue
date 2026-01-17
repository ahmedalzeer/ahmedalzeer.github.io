<template>
  <div id="app-root">
    <SvgBackground v-if="currentLayout !== 'futuristic'" />

    <transition name="fade-layout" mode="out-in">
      <component :is="layouts[currentLayout]" />
    </transition>

    <button class="style-switcher-btn" @click="nextLayout" :title="'Switch to next style'">
      <font-awesome-icon icon="wand-magic-sparkles" />
      <span class="btn-txt">{{ currentLayout.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ClassicLayout from './layouts/ClassicLayout.vue';
import ModernLayout from './layouts/ModernLayout.vue';
import FuturisticLayout from './layouts/FuturisticLayout.vue';
import SvgBackground from './components/SvgBackground.vue';

const layouts = {
  classic: ClassicLayout,
  modern: ModernLayout,
  futuristic: FuturisticLayout
};


const defaultLayout = 'modern';
const currentLayout = ref(localStorage.getItem('user-layout') || defaultLayout);

const nextLayout = () => {
  const keys = Object.keys(layouts);
  const currentIndex = keys.indexOf(currentLayout.value);
  const nextIndex = (currentIndex + 1) % keys.length;

  currentLayout.value = keys[nextIndex];

  localStorage.setItem('user-layout', currentLayout.value);

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  const savedTheme = localStorage.getItem('user-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const savedLang = localStorage.getItem('user-lang') || 'en';
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
});
</script>

<style>
.fade-layout-enter-active,
.fade-layout-leave-active {
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.fade-layout-enter-from,
.fade-layout-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.style-switcher-btn {
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 10000;
  background: linear-gradient(135deg, var(--color-accent, #007bff), #6f42c1);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.style-switcher-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.style-switcher-btn:active {
  transform: scale(0.95);
}

.btn-txt {
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .style-switcher-btn {
    bottom: 20px;
    right: 20px;
    padding: 12px;
  }

  .btn-txt {
    display: none;
  }
}

[dir="rtl"] .style-switcher-btn {
  right: auto;
  left: 35px;
}

@media (max-width: 600px) and ([dir="rtl"]) {
  [dir="rtl"] .style-switcher-btn {
    left: 20px;
  }
}
</style>