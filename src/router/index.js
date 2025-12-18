import { createRouter, createWebHistory } from "vue-router";
// 1. Import your main view components
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ContactView from "../views/ContactView.vue";
import SkillsView from "../views/SkillsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView,
        },
        {
            path: "/experience",
            name: "experience",
            component: ExperienceView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
        {
            path: "/skills",
            name: "skills",
            component: SkillsView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: HomeView,
        },
    ],
});

export default router;
