<template>
    <div class="classic-wrapper">
        <div class="header-bar" :class="{ 'hidden': isMenuOpen }">
            <button @click="isMenuOpen = true" class="menu-toggle-button">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <span class="header-title">{{ $t('developer_name') }}</span>
        </div>

        <div v-if="isMenuOpen" class="sidebar-overlay" @click="isMenuOpen = false"></div>

        <NavBar :is-mobile-open="isMenuOpen" @close-menu="isMenuOpen = false">
            <template v-slot:close-button>
                <button @click="isMenuOpen = false" class="menu-close-button">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </template>
        </NavBar>

        <main class="classic-content">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from '../components/SideBar.vue';
const isMenuOpen = ref(false);
</script>

<style scoped>
.classic-wrapper {
    display: flex;
    min-height: 100vh;
    width: 100%;
}

.classic-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
}

.header-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 900;
    background: var(--color-background-soft);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
}

.sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 950;
}
</style>