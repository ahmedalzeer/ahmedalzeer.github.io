<template>
    <div class="modern-wrapper">
        <nav class="modern-nav">
            <div class="nav-container">
                <div class="logo">{{ $t('developer_name') }}</div>

                <div class="nav-links">
                    <a v-for="l in ['home', 'skills', 'experience', 'projects', 'contact']" :key="l" :href="'#' + l">
                        {{ $t(l) }}
                    </a>
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
            <section id="home" class="hero-section">
                <HomeView />
            </section>

            <section id="skills" class="alternating-section">
                <div class="content-wrapper">
                    <SkillsView />
                </div>
            </section>

            <section id="experience" class="alternating-section">
                <div class="content-wrapper">
                    <ExperienceView />
                </div>
            </section>

            <section id="projects" class="alternating-section">
                <div class="content-wrapper">
                    <ProjectsView />
                </div>
            </section>

            <section id="contact" class="alternating-section">
                <div class="content-wrapper">
                    <ContactView />
                </div>
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
    backdrop-filter: blur(15px);
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

.logo {
    font-weight: 800;
    color: var(--color-primary);
}

.nav-links a {
    margin: 0 15px;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--color-accent);
}

.icon-btn {
    background: var(--color-background);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.icon-btn:hover {
    background: var(--color-accent);
    color: white;
}


.sections-stack section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 100px 5%;
}

.content-wrapper {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
}

.hero-section {
    justify-content: center;
    text-align: center;
    background: radial-gradient(circle at 50% 50%, rgba(var(--color-primary-rgb), 0.08), transparent 70%);
}


.alternating-section:nth-of-type(even) {
    justify-content: flex-start;
    text-align: left;
    background-color: var(--color-background);
}

.alternating-section:nth-of-type(odd):not(.hero-section) {
    justify-content: flex-end;
    text-align: right;
    background-color: var(--color-background-soft);
}

#skills {
    background: linear-gradient(to right, rgba(0, 123, 255, 0.03), transparent);
}

#experience {
    background: linear-gradient(to left, rgba(111, 66, 193, 0.03), transparent);
}

#projects {
    background: linear-gradient(to right, rgba(0, 212, 255, 0.03), transparent);
}

#contact {
    background: linear-gradient(to left, rgba(66, 184, 131, 0.03), transparent);
}

/* دعم الاتجاه العربي RTL */
:global([dir="rtl"]) .alternating-section:nth-of-type(even) {
    justify-content: flex-end;
    text-align: right;
}

:global([dir="rtl"]) .alternating-section:nth-of-type(odd):not(.hero-section) {
    justify-content: flex-start;
    text-align: left;
}

@media (max-width: 992px) {
    .sections-stack section {
        justify-content: center !important;
        text-align: center !important;
        padding: 80px 20px;
    }
}
</style>