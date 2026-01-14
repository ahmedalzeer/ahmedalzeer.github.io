<template>
    <div class="projects-wrapper">
        <h1 class="main-title">{{ $t('proj_title') }}</h1>

        <div class="project-grid">
            <div v-for="(project, key) in $tm('projects_data')" :key="key" class="project-card">
                <h3>{{ $rt(project.title) }}</h3>
                <p>{{ $rt(project.desc) }}</p>
                <a :href="$rt(project.link)" target="_blank" v-if="$rt(project.link) !== '#'">
                    {{ $tm('project_card').view_project || 'View Project' }}
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects-wrapper {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}

.main-title {
    color: var(--color-primary, #007bff);
    margin-bottom: 2rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 2rem;
}

.project-card {
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    padding: 25px;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-align: start;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-accent);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

h3 {
    color: var(--color-primary, #007bff);
    margin-bottom: 10px;
}

p {
    color: var(--color-text-soft);
    font-size: 0.95rem;
    margin-bottom: 15px;
    line-height: 1.6;
}

a {
    color: #42b883;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    transition: 0.2s;
}

a:hover {
    filter: brightness(1.2);
    text-decoration: underline;
}

:global(.futuristic-wrapper) .project-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
}

:global([dir="rtl"]) .project-card {
    text-align: right;
}
</style>