import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
    faGithub,
    faLinkedin,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
    faHouse,
    faFolderOpen,
    faBriefcase,
    faEnvelope,
    faBars,
    faXmark,
    faGlobe,
    faCode,
    faSun,
    faMoon,
    faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faHouse,
    faFolderOpen,
    faBriefcase,
    faEnvelope,
    faBars,
    faXmark,
    faGlobe,
    faCode,
    faSun,
    faMoon,
    faGithub,
    faLinkedin,
    faWhatsapp,
    faFilePdf
);

createApp(App)
    .use(router)
    .use(i18n)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
