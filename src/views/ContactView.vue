<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="main-title">{{ $t('contact_me') }}</h1>

      <div class="contact-layout">
        <div class="info-card">
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="details">
              <span>{{ $t('email') }}</span>
              <strong>AhmedAlzeeWebDeveloper@gmail.com</strong>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="details">
              <span>{{ $t('phone') }}</span>
              <strong dir="ltr">00201015258850</strong>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-wrapper">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="details">
              <span>{{ $t('location') }}</span>
              <strong>{{ $t('loc_val') }}</strong>
            </div>
          </div>
        </div>

        <div class="form-card">
          <form ref="formElement" @submit.prevent="handleSendEmail" class="contact-form">
            <div class="input-group">
              <label>{{ $t('name') }}</label>
              <input type="text" name="user_name" required :placeholder="$t('name')">
            </div>

            <div class="input-group">
              <label>{{ $t('email') }}</label>
              <input type="email" name="user_email" required placeholder="name@example.com">
            </div>

            <div class="input-group">
              <label>{{ $t('message') }}</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" :disabled="loading" class="submit-btn">
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <span>{{ loading ? $t('sending') : $t('send_message') }}</span>
            </button>
            <p v-if="feedback" :class="['status-msg', statusType]">{{ feedback }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--color-primary);
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  align-items: stretch;
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 40px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 24px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), #6f42c1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 1.5rem;
  box-shadow: 0 10px 15px rgba(0, 123, 255, 0.2);
}

.details {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.details span {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-soft);
  margin-bottom: 4px;
}

.details strong {
  font-size: 1.1rem;
  color: var(--color-text);
  word-break: break-all;
}

.form-card {
  padding: 40px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 24px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-text);
}

input,
textarea {
  width: 100%;
  padding: 15px;
  background: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text);
  transition: 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(90deg, var(--color-primary), #6f42c1);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

:global(.futuristic-wrapper) .info-card,
:global(.futuristic-wrapper) .form-card {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(25px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

:global([dir="rtl"]) .details,
:global([dir="rtl"]) .input-group {
  text-align: right;
}

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 25px;
  }
}
</style>