<template>
    <div class="modern-wrapper">
        <nav class="modern-nav">
            <div class="nav-container">
                <div class="logo">{{ $t('developer_name') }}</div>

                <div class="nav-links">
                    <a v-for="l in ['home', 'skills', 'experience', 'projects', 'contact']" :key="l" :href="'#' + l">{{
                        $t(l) }}</a>
                </div>

                <div class="nav-controls">
                    <button @click="toggleLanguage" class="icon-btn" :title="$i18n.locale === 'en' ? 'AR' : 'EN'">
                        {{ locale === 'en' ? 'ar'.toUpperCase() : 'en'.toUpperCase() }}
                    </button>
                    <button @click="toggleTheme" class="icon-btn">
                        <font-awesome-icon :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']" />
                    </button>
                </div>
            </div>
        </nav>

        <main class="sections-stack">
            <section id="home">
                <HomeView />
            </section>
            <section id="skills">
                <SkillsView />
            </section>
            <section id="experience">
                <ExperienceView />
            </section>
            <section id="projects">
                <ProjectsView />
            </section>
            <section id="contact">
                <ContactView />
            </section>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ContactView from '../views/ContactView.vue';
import SkillsView from '../views/SkillsView.vue';

const { locale } = useI18n();
const isDark = ref(true);

const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'ar' : 'en';
    document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('user-lang', locale.value);
};

const toggleTheme = () => {
    isDark.value = !isDark.value;
    const theme = isDark.value ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
};

onMounted(() => {
    isDark.value = document.documentElement.getAttribute('data-theme') !== 'light';
});
</script>

<style scoped>
.modern-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: var(--color-background-soft);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    padding: 0.8rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-links a {
    margin: 0 15px;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--color-accent);
}

.nav-controls {
    display: flex;
    gap: 10px;
}

.icon-btn {
    background: var(--color-background);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 45px;
}

.icon-btn:hover {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
}

.sections-stack section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    border-bottom: 1px solid var(--color-border);
}

:global([dir="rtl"]) .nav-links a {
    margin-left: 0;
    margin-right: 20px;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .logo {
        font-size: 0.9rem;
    }
}
</style>