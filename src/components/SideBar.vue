<template>
    <div class="sidebar" :class="[sidebarClass, { 'is-open': isMobileOpen }]">
        <div class="mobile-close-container">
            <slot name="close-button"></slot>
        </div>

        <div class="sidebar-content">
            <div class="logo">{{ $t('name') }}</div>
            <nav>
                <RouterLink to="/" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'house']" class="nav-icon" /> {{ $t('home') }}
                </RouterLink>
                <RouterLink to="/projects" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'folder-open']" class="nav-icon" /> {{ $t('projects') }}
                </RouterLink>
                <RouterLink to="/experience" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="nav-icon" /> {{ $t('experience') }}
                </RouterLink>
                <RouterLink to="/skills" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'code']" class="nav-icon" /> {{ $t('skills') }}
                </RouterLink>
                <RouterLink to="/contact" active-class="active" @click="$emit('closeMenu')">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="nav-icon" /> {{ $t('contact') }}
                </RouterLink>
            </nav>

            <div class="switcher-container" @click="$emit('closeMenu')">
                <button @click="toggleTheme" class="theme-toggle">
                    <font-awesome-icon :icon="theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']" />
                </button>
                <LangSwitcher class="lang-switcher-button" />
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
    isMobileOpen: {
        type: Boolean,
        default: false
    }
});
defineEmits(['closeMenu']);

const { locale } = useI18n();
const sidebarClass = computed(() => {
    return {
        'rtl-position': locale.value === 'ar'
    };
});

// --- Theme Logic ---
const theme = ref('dark');

const getTheme = () => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
};

const toggleTheme = () => {
    const currentTheme = getTheme();
    theme.value = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('user-theme', theme.value);
    document.documentElement.setAttribute('data-theme', theme.value);
};

onMounted(() => {
    theme.value = getTheme();
});
</script>

<style scoped>
:root {
    --sidebar-width: 250px;
}

/* ================================================= */
/* 1. DESKTOP BASE (Fixed Sidebar) */
/* ================================================= */
.sidebar {
    position: fixed;
    top: 0;
    height: 100%;
    width: var(--sidebar-width);
    padding: 0;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    z-index: 100;
    transition: all 0.3s ease;
    left: 0;
    right: auto;
    border-right: 1px solid var(--color-border);
    border-left: none;
}

.sidebar-content {
    padding: 2rem 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.sidebar.rtl-position .sidebar-content {
    align-items: flex-end;
}

:global(.content-area) {
    margin-inline-start: var(--sidebar-width);
    margin-inline-end: 0;
}

.sidebar.rtl-position {
    left: auto;
    right: 0;
    border-right: none;
    border-left: 1px solid var(--color-border);
}

.rtl-position~ :global(.content-area) {
    margin-inline-start: 0;
    margin-inline-end: var(--sidebar-width);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

nav {
    display: flex;
    flex-direction: column;
    width: 100%;
}

nav a {
    padding: 0.75rem 0.5rem;
    text-decoration: none;
    color: var(--color-text-soft);
    transition: color 0.3s;
    text-align: left;
    display: flex;
    align-items: center;
}

.nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-inline-end: 15px;
    /* زيادة المسافة قليلاً */
}

.sidebar.rtl-position .nav-icon {
    margin-inline-end: 0;
    margin-inline-start: 15px;
}

nav a:hover,
nav a.active {
    color: var(--color-text);
    border-left: 3px solid var(--color-text);
}

.sidebar.rtl-position nav a {
    text-align: right;
    flex-direction: row-reverse;
    /* لضمان ترتيب الأيقونة والنص في RTL */
}

.sidebar.rtl-position nav a:hover,
.sidebar.rtl-position nav a.active {
    border-left: none;
    border-right: 3px solid var(--color-text);
}

.switcher-container {
    margin-top: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    gap: 10px;
}

.rtl-position .switcher-container {
    justify-content: flex-end;
}

.theme-toggle {
    background: none;
    border: 1px solid var(--color-border);
    color: var(--color-text-soft);
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1;
    font-size: 1.1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-toggle:hover {
    color: var(--color-text);
    background-color: var(--color-background);
}

:global(.lang-switcher-button button) {
    height: 40px;
    padding: 0 10px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-soft) !important;
    background: none !important;
    border: 1px solid var(--color-border) !important;
}

/* ================================================= */
/* 2. MOBILE OVERRIDE */
/* ================================================= */
.mobile-close-container {
    display: none;
    position: absolute;
    top: 10px;
    left: 15px;
    z-index: 1001;
}

@media (max-width: 768px) {
    :global(.content-area) {
        margin-inline-start: 0 !important;
        margin-inline-end: 0 !important;
    }

    .mobile-close-container {
        display: block;
    }

    .sidebar-content {
        padding-top: 50px;
    }

    .sidebar.rtl-position .mobile-close-container {
        left: auto;
        right: 15px;
    }

    .sidebar,
    .sidebar.rtl-position {
        position: absolute;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        z-index: 900;
        height: 100vh;
    }

    .sidebar.is-open {
        transform: translateX(0);
    }

    .sidebar.rtl-position {
        left: auto;
        right: 0;
        transform: translateX(100%);
    }

    .sidebar.rtl-position.is-open {
        transform: translateX(0);
    }
}
</style>