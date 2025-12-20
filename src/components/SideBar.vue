<template>
    <div class="sidebar" :class="[sidebarClass, { 'is-open': isMobileOpen }]">

        <div class="close-btn-container">
            <slot name="close-button"></slot>
        </div>

        <div class="sidebar-content">
            <div class="logo-area">
                <span class="logo-text">{{ $t('developer_name') }}</span>
            </div>

            <nav class="nav-menu">
                <RouterLink to="/" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'house']" class="nav-icon" />
                    <span>{{ $t('home') }}</span>
                </RouterLink>
                <RouterLink to="/projects" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'folder-open']" class="nav-icon" />
                    <span>{{ $t('projects') }}</span>
                </RouterLink>
                <RouterLink to="/experience" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="nav-icon" />
                    <span>{{ $t('experience') }}</span>
                </RouterLink>
                <RouterLink to="/skills" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'code']" class="nav-icon" />
                    <span>{{ $t('skills') }}</span>
                </RouterLink>
                <RouterLink to="/contact" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="nav-icon" />
                    <span>{{ $t('contact') }}</span>
                </RouterLink>
            </nav>

            <div class="sidebar-footer">
                <button @click="toggleTheme" class="theme-toggle-btn">
                    <font-awesome-icon :icon="theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']" />
                </button>
                <div class="lang-wrapper">
                    <LangSwitcher />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import LangSwitcher from './LangSwitcher.vue';

const props = defineProps({
    isMobileOpen: { type: Boolean, default: false }
});
defineEmits(['closeMenu']);

const { locale } = useI18n();
const sidebarClass = computed(() => ({
    'rtl-mode': locale.value === 'ar'
}));

const theme = ref('dark');
const getTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';

const toggleTheme = () => {
    const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
    theme.value = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('user-theme', newTheme);
};

onMounted(() => { theme.value = getTheme(); });
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    background-color: var(--color-background-soft);
    border-inline-end: 1px solid var(--color-border);
    z-index: 1000;
    /* Always hidden by default */
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.rtl-mode {
    left: auto;
    right: 0;
    transform: translateX(100%);
}

.sidebar.is-open {
    transform: translateX(0) !important;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 1.2rem;
}

.logo-area {
    padding: 10px 10px 2.5rem;
    text-align: center;
}

.logo-text {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-text);
    text-transform: uppercase;
}

.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.nav-menu a {
    display: flex;
    align-items: center;
    padding: 12px 18px;
    color: var(--color-text-soft);
    text-decoration: none;
    border-radius: 12px;
    transition: background 0.2s;
}

.nav-icon {
    width: 1.2rem;
    margin-inline-end: 15px;
}

.nav-menu a:hover,
.nav-menu a.active {
    background: var(--color-background);
    color: #007bff;
}

.sidebar-footer {
    margin-top: 200px;
    display: flex;
    gap: 12px;
    /* padding-top: 25px; */
    align-items: center;
}

.theme-toggle-btn {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 12px;
    border: 1px solid var(--color-border);
    background: transparent;
    color: var(--color-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lang-wrapper {
    flex: 1;
}

.close-btn-container {
    top: 15px;
    inset-inline-end: 15px;
}

/* Ensure content doesn't have a permanent margin on desktop anymore */
:global(.content-area) {
    margin-inline-start: 0 !important;
}
</style>