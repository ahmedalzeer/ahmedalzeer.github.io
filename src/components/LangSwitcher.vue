<template>
    <button @click="toggleLanguage">
        <font-awesome-icon :icon="['fas', 'globe']" class="switcher-icon" />

        {{ locale === 'en' ? $t('switch_to_ar') : $t('switch_to_en') }}
    </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { setDirection } from '../../src/lang';

const { locale } = useI18n();

function toggleLanguage() {
    const newLocale = locale.value === 'en' ? 'ar' : 'en';
    locale.value = newLocale;
    setDirection(newLocale);
}
</script>

<style scoped>
/* Only necessary structural/spacing styles here */
button {
    cursor: pointer;
    transition: all 0.2s;
}

.switcher-icon {
    margin-inline-end: 8px;
    /* Logical margin for spacing */
}
</style>