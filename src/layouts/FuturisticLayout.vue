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
                            {{ locale.toUpperCase() }}
                        </button>
                        <button @click="toggleTheme" class="glass-btn theme-btn">
                            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
                        </button>
                    </div>
                </div>
            </nav>

            <div class="glass-body">
                <section id="home" class="section-home">
                    <HomeView />
                </section>
                <section id="skills" class="section-alt">
                    <SkillsView />
                </section>
                <section id="experience" class="section-alt">
                    <ExperienceView />
                </section>
                <section id="projects" class="section-alt">
                    <ProjectsView />
                </section>
                <section id="contact" class="section-alt">
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
    opacity: 0.2;
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

.b3 {
    width: 300px;
    height: 300px;
    background: #00d4ff;
    top: 40%;
    left: 30%;
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
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: var(--color-text);
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
}

.glass-body {
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;
}


section {
    min-height: 100%;
    display: flex;
    align-items: center;
    padding: 80px 5%;
    position: relative;
    border-bottom: 1px solid var(--color-border);
}

.section-home {
    justify-content: center;
    text-align: center;
    background: radial-gradient(circle at center, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 70%);
}


section.section-alt:nth-of-type(even) {
    justify-content: flex-start;
    text-align: left;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
}

section.section-alt:nth-of-type(odd) {
    justify-content: flex-end;
    text-align: right;
    background: linear-gradient(-90deg, rgba(111, 66, 193, 0.02) 0%, transparent 100%);
}

#skills {
    background-color: rgba(0, 123, 255, 0.02);
}

#experience {
    background-color: rgba(111, 66, 193, 0.02);
}

#projects {
    background-color: rgba(0, 212, 255, 0.02);
}

#contact {
    background-color: rgba(66, 184, 131, 0.02);
}

:global([dir="rtl"]) section.section-alt:nth-of-type(even) {
    justify-content: flex-end;
    text-align: right;
}

:global([dir="rtl"]) section.section-alt:nth-of-type(odd) {
    justify-content: flex-start;
    text-align: left;
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
    section {
        justify-content: center !important;
        text-align: center !important;
        padding: 60px 20px;
    }

    .glass-card {
        height: auto;
        min-height: 95vh;
    }

    .nav-links {
        display: none;
    }
}
</style>