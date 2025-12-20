<template>
    <div class="skills-section">
        <h1 class="main-title">{{ $t('skills_title') }}</h1>
        <div class="skills-grid">
            <div v-for="(val, key) in $tm('skills_list')" :key="key" class="skill-group">
                <!-- <strong class="label-text">{{ $t('skills_list.' + key) }}:</strong> -->
                <span class="value-text">{{ $rt(val) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-section {
    width: 100%;
    max-width: 900px;
}

.main-title {
    color: #007bff;
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
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 12px;
    transition: 0.3s;
}

.skill-group:hover {
    border-color: #007bff;
    transform: translateY(-3px);
}

.label-text {
    display: block;
    color: #007bff;
    text-transform: capitalize;
    margin-bottom: 8px;
    font-size: 1.1rem;
}

.value-text {
    color: #e0e0e0;
    line-height: 1.6;
}

:global([dir="rtl"]) .skill-group {
    text-align: right;
}
</style>