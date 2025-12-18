<template>
  <div class="experience-container">
    <h1>{{ $t('exp_title') }}</h1>

    <div v-for="(job, key) in $tm('exp_list')" :key="key" class="job-card">
      <div class="card-content">
        <h3 class="role">{{ $rt(job.role) }}</h3>

        <div class="company">{{ $rt(job.company) }}</div>

        <span class="date">{{ $rt(job.date) }}</span>
        <p class="description">{{ $rt(job.desc) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-card {
  margin-bottom: 2.5rem;
  padding-inline-start: 1.5rem;
  border-inline-start: 4px solid #007bff;
  position: relative;
}

.role {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.company {
  color: #007bff;
  font-weight: bold;
  margin-bottom: 8px;
}

.date {
  font-size: 0.85rem;
  color: #888;
  display: block;
  margin-bottom: 12px;
}

.description {
  color: #ccc;
  line-height: 1.6;
}

.job-card:hover {
  border-inline-start-color: #42b883;
  transition: 0.3s;
}
</style>