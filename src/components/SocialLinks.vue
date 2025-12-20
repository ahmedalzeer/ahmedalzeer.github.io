<template>
    <div class="social-links">
        <a href="https://github.com/ahmedalzeer" target="_blank" :title="$t('social_github')">
            <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/ahmed-ali-989913168/" target="_blank" :title="$t('social_linkedin')">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
        </a>

        <a href="https://wa.me/201015258850" target="_blank" title="WhatsApp">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="social-icon" />
        </a>

        <a href="/CV.pdf" download="Ahmed_Ali_CV.pdf" title="Download CV">
            <font-awesome-icon :icon="['fas', 'file-pdf']" class="social-icon" />
        </a>

        <a href="mailto:AhmedAlzeeWebDeveloper@gmail.com" :title="$t('social_email')">
            <font-awesome-icon :icon="['fas', 'envelope']" class="social-icon" />
        </a>
    </div>
</template>

<style scoped>
.social-links {
    margin-top: 50px;
    display: flex;
    gap: 15px;
    align-items: center;
}

.social-icon {
    font-size: 1.4rem;
    color: var(--color-text-soft);
    transition: all 0.3s ease;
}

.social-links a:hover .social-icon {
    color: #007bff;
    transform: translateY(-3px);
}

.social-links a:hover .fa-github {
    color: #fff;
}

.social-links a:hover .fa-linkedin {
    color: #0077b5;
}

.social-links a:hover .fa-envelope {
    color: #ea4335;
}

.social-links a:hover .fa-whatsapp {
    color: #25d366;
}

.social-links a:hover .fa-file-pdf {
    color: #f40612;
}
</style>