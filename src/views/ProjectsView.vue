<template>
    <div class="projects-wrapper">

        <h1>{{ $t('proj_title') }}</h1>

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
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 2rem;
}

.project-card {
    background: #1a1a1a;
    padding: 25px;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

h3 {
    color: #007bff;
    margin-bottom: 10px;
}

p {
    color: #bbb;
    font-size: 0.95rem;
    margin-bottom: 15px;
}

a {
    color: #42b883;
    text-decoration: none;
    font-weight: bold;
}
</style>