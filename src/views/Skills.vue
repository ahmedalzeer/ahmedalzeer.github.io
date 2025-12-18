<template>
    <div class="skills-section">
        <h2>{{ $t('skills_title') }}</h2>
        <div class="skills-grid">
            <div v-for="(val, label) in $tm('skills_list')" :key="label" class="skill-group">
                <strong>{{ $t('skills_list.' + label) }}:</strong>
                <span>{{ $rt(val) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-grid {
    margin-top: 1rem;
    color: #e0e0e0;
}

.skill-group {
    margin-bottom: 10px;
    padding: 10px;
    background: #222;
    border-radius: 5px;
}

strong {
    color: #007bff;
    margin-inline-end: 10px;
}
</style>