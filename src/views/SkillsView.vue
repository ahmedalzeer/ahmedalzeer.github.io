<template>
    <div class="skills-section">
        <h1 class="main-title">{{ $t('skills_title') }}</h1>
        <div class="skills-grid">
            <div v-for="(val, key) in $tm('skills_list')" :key="key" class="skill-group">
                <span class="value-text">{{ $rt(val) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-section {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.main-title {
    color: var(--color-primary, #007bff);
    margin-bottom: 2rem;
    text-align: center;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
}

.skill-group {
    padding: 20px;
    background: var(--color-background-soft);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.skill-group:hover {
    border-color: var(--color-accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.value-text {
    color: var(--color-text);
    line-height: 1.6;
    font-weight: 500;
}

:global([dir="rtl"]) .skill-group {
    text-align: right;
}

:global(.futuristic-wrapper) .skill-group {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
}
</style>