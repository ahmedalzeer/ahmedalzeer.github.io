<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="main-title">{{ $t('contact_me') }}</h1>

      <div class="contact-layout">
        <div class="info-card">
          <div class="info-item">
            <div class="icon-box"><i class="fas fa-envelope"></i></div>
            <div class="text-box">
              <label>{{ $t('email') }}</label>
              <p class="break-text">AhmedAlzeeWebDeveloper@gmail.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box"><i class="fas fa-phone-alt"></i></div>
            <div class="text-box">
              <label>{{ $t('phone') }}</label>
              <p dir="ltr">+20 1015258850</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
            <div class="text-box">
              <label>{{ $t('location') }}</label>
              <p>{{ $t('loc_val') }}</p>
            </div>
          </div>
        </div>

        <div class="form-card">
          <form ref="formElement" @submit.prevent="handleSendEmail">
            <div class="form-group">
              <label>{{ $t('name') }}</label>
              <input type="text" name="user_name" required :placeholder="$t('name')">
            </div>

            <div class="form-group">
              <label>{{ $t('email') }}</label>
              <input type="email" name="user_email" required placeholder="name@example.com">
            </div>

            <div class="form-group">
              <label>{{ $t('message') }}</label>
              <textarea name="message" rows="4" required></textarea>
            </div>

            <button type="submit" :disabled="loading" class="send-btn">
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              {{ loading ? $t('sending') : $t('send_message') }}
            </button>

            <p v-if="feedback" :class="['status-msg', statusType]">{{ feedback }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container & Layout */
.contact-page {
  padding: 40px 15px;
  /* Reduced padding for mobile */
  color: #fff;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.main-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  /* Fluid typography */
  color: #007bff;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  /* 2 columns for desktop */
  gap: 25px;
  align-items: start;
}

/* Cards Style */
.info-card,
.form-card {
  background: #1a1a1a;
  padding: clamp(20px, 4vw, 40px);
  border-radius: 15px;
  border: 1px solid #333;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-box {
  min-width: 45px;
  height: 45px;
  background: rgba(0, 123, 255, 0.1);
  color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
}

.text-box {
  overflow: hidden;
  /* Prevent text overflow */
}

.break-text {
  word-break: break-all;
  /* Prevents long emails from breaking layout on small screens */
  font-size: 0.95rem;
}

.text-box label {
  display: block;
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 2px;
}

.text-box p {
  font-weight: bold;
  margin: 0;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #ccc;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #333;
  background: #0f0f0f;
  color: #fff;
  font-family: inherit;
  transition: 0.3s;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

.send-btn {
  width: 100%;
  padding: 14px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.send-btn:hover:not(:disabled) {
  background: #0056b3;
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Status Messages */
.status-msg {
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
}

.success {
  color: #42b883;
}

.error {
  color: #ff5252;
}

/* RTL Logic */
:global([dir="rtl"]) .contact-layout {
  direction: rtl;
}

:global([dir="rtl"]) .text-box {
  text-align: right;
}

:global([dir="rtl"]) .form-group label {
  text-align: right;
}

/* RESPONSIVE BREAKPOINTS */
@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
    /* Switch to single column for tablets/mobile */
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .main-title {
    margin-bottom: 25px;
  }

  .info-card,
  .form-card {
    padding: 20px;
  }

  .info-item {
    gap: 12px;
  }

  .icon-box {
    min-width: 40px;
    height: 40px;
  }
}
</style>