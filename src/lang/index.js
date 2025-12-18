import { createI18n } from "vue-i18n";
import en from "./en";
import ar from "./ar";

const messages = {
    en: en,
    ar: ar,
};

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    messages,
});

export function setDirection(locale) {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
}

// Initial set
setDirection(i18n.global.locale.value);

export default i18n;
