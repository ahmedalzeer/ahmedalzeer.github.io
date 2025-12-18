<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="title">{{ $t('contact_me') }}</h1>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <p><strong>{{ $t('email') }}:</strong> AhmedAlzeeWebDeveloper@gmail.com</p>
            <p><strong>{{ $t('phone') }}:</strong> +20 1015258850</p>
            <p><strong>{{ $t('location') }}:</strong> {{ $t('loc_val') }}</p>
          </div>
        </div>

        <div class="contact-form">
          <form ref="formElement" @submit.prevent="handleSendEmail">
            <div class="form-group">
              <label>{{ $t('name') }}</label>
              <input type="text" name="user_name" required>
            </div>

            <div class="form-group">
              <label>{{ $t('email') }}</label>
              <input type="email" name="user_email" required>
            </div>

            <div class="form-group">
              <label>{{ $t('message') }}</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" :disabled="loading" class="send-btn">
              {{ loading ? $t('sending') : $t('send_message') }}
            </button>

            <p v-if="feedback" :class="['status', statusType]">{{ feedback }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const formElement = ref(null);
const loading = ref(false);
const feedback = ref('');
const statusType = ref('');

const handleSendEmail = () => {
  loading.value = true;

  // IMPORTANT: Replace these with your actual IDs from EmailJS
  const SERVICE_ID = 'service_xxxxxx';
  const TEMPLATE_ID = 'template_xxxxxx';
  const PUBLIC_KEY = 'your_public_key';

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement.value, PUBLIC_KEY)
    .then(() => {
      feedback.value = t('success_msg');
      statusType.value = 'success';
      formElement.value.reset();
    })
    .catch((err) => {
      feedback.value = t('error_msg');
      statusType.value = 'error';
      console.error('EmailJS Error:', err);
    })
    .finally(() => {
      loading.value = false;
      // Clear message after 5 seconds
      setTimeout(() => feedback.value = '', 5000);
    });
};
</script>

<style scoped>
.contact-page {
  padding: 50px 20px;
  color: var(--color-text);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 40px;
  color: #007bff;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
}

.info-card {
  background: var(--color-background-soft);
  padding: 30px;
  border-radius: 12px;
  height: fit-content;
}

.contact-form {
  background: var(--color-background-soft);
  padding: 30px;
  border-radius: 12px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
}

.send-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
}

.success {
  color: #42b883;
}

.error {
  color: #ff5252;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>