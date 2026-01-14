<template>
    <div class="futuristic-wrapper">
        <div class="blobs">
            <div class="blob b1"></div>
            <div class="blob b2"></div>
            <div class="blob b3"></div>
        </div>

        <div class="glass-card">
            <nav class="glass-nav">
                <div class="nav-container">
                    <div class="nav-links">
                        <a v-for="l in ['home', 'skills', 'experience', 'projects', 'contact']" :key="l"
                            :href="'#' + l">{{ $t(l) }}</a>
                    </div>

                    <div class="nav-controls">
                        <button @click="toggleLanguage" class="glass-btn lang-btn">
                            {{ locale === 'en' ? 'ar'.toUpperCase() : 'en'.toUpperCase() }}
                        </button>
                        <button @click="toggleTheme" class="glass-btn theme-btn">
                            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
                        </button>
                    </div>
                </div>
            </nav>

            <div class="glass-body">
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
            </div>
        </div>
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
};

const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
    isDark.value = document.documentElement.getAttribute('data-theme') !== 'light';
});
</script>

<style scoped>
.futuristic-wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow-x: hidden;
    background: var(--color-background);
    padding: 20px 0;
}

.blobs {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: move 20s infinite alternate;
}

.b1 {
    width: 400px;
    height: 400px;
    background: var(--color-accent);
    top: -10%;
    left: -10%;
}

.b2 {
    width: 450px;
    height: 450px;
    background: #6f42c1;
    bottom: -10%;
    right: -10%;
}

.glass-card {
    width: 95%;
    max-width: 1300px;
    height: 92vh;
    z-index: 1;
    background: var(--color-background-soft);
    backdrop-filter: blur(25px);
    border: 1px solid var(--color-border);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.glass-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid var(--color-border);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: clamp(10px, 2vw, 25px);
}

.nav-links a {
    text-decoration: none;
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.7;
    transition: 0.3s;
}

.nav-links a:hover {
    opacity: 1;
    color: var(--color-accent);
}

.nav-controls {
    display: flex;
    gap: 12px;
}

.glass-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--color-border);
    color: var(--color-text);
    padding: 8px 15px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.glass-btn:hover {
    background: var(--color-accent);
    color: white;
    transform: translateY(-2px);
}

.glass-body {
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding: 20px;
}

section {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
}

@keyframes move {
    from {
        transform: translate(0, 0);
    }

    to {
        transform: translate(50px, 50px);
    }
}

@media (max-width: 768px) {
    .glass-card {
        height: auto;
        min-height: 95vh;
        margin: 10px;
    }

    .nav-links {
        display: none;
    }

    .nav-container {
        justify-content: center;
        gap: 20px;
    }
}
</style>