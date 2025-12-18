<template>
  <div class="experience-container">
    <h1>{{ $t('exp_title') }}</h1>

    <div v-for="(job, key) in $tm('exp_list')" :key="key" class="job-card">
      <h3>{{ $rt(job.role) }}</h3>
      <span class="date">{{ $rt(job.date) }}</span>
      <p>{{ $rt(job.desc) }}</p>
    </div>
  </div>
</template>

<style scoped>
.job-card {
  margin-bottom: 2.5rem;
  border-left: 3px solid #007bff;
  padding-left: 1.5rem;
  position: relative;
}

h3 {
  color: #e0e0e0;
  font-size: 1.4rem;
}

.date {
  color: #007bff;
  font-weight: bold;
  display: block;
  margin: 0.5rem 0;
}

p {
  color: #ccc;
  line-height: 1.6;
}

:global(html[dir="rtl"]) .job-card {
  border-left: none;
  border-right: 3px solid #007bff;
  padding-left: 0;
  padding-right: 1.5rem;
}
</style>