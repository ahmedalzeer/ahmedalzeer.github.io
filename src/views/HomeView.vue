<template>
    <div class="content-wrapper">
        <div class="image-container">
            <img src="/src/assets/images/profile.jpg" :alt="$t('name')" class="profile-pic">
        </div>

        <h1 class="main-title">{{ $t('name') }}</h1>
        <h2 class="subtitle">{{ $t('title') }}</h2>
        <p class="tagline-text">{{ $t('tagline') }}</p>

        <div class="social-links">
            <a href="https://github.com/ahmedalzeer" target="_blank">{{ $t('social_github') }}</a>
            <a href="https://linkedin.com/in/ahmed-alzeer-989913168" target="_blank">{{ $t('social_linkedin') }}</a>
            <a href="mailto:AhmedAlzeeWebDeveloper@gmail.com">{{ $t('social_email') }}</a>
        </div>
    </div>
</template>

<style scoped>
.content-wrapper {
    max-width: 700px;
    width: 100%;
    margin-top: 5rem;
}

/* --- تنسيقات الصورة والأنميشن --- */
.image-container {
    margin-bottom: 1.5rem;
}

.profile-pic {
    width: 150px;
    /* تحكم في العرض */
    height: 150px;
    /* تحكم في الطول */
    border-radius: 50%;
    /* لجعل الصورة دائرية */
    object-fit: cover;
    border: 3px solid #e0e0e0;

    /* تحديد الأنميشن الأساسي */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
}

/* تأثير الماوس (Hover) */
.profile-pic:hover {
    transform: scale(1.1) rotate(5deg);
    /* تكبير الصورة مع دوران خفيف */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    /* إضافة ظل خلف الصورة */
    border-color: #007bff;
    /* تغيير لون الإطار عند اللمس */
}

/* باقي التنسيقات الخاصة بك */
:global(html[dir="rtl"]) .content-wrapper {
    text-align: right;
}

:global(html[dir="ltr"]) .content-wrapper {
    text-align: left;
}

.main-title {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 0.5rem;
    font-weight: 800;
    color: #e0e0e0;
}
</style>