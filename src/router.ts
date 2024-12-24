import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import MakeNOTE from './components/projects/MakeNOTE.vue';
import Design from "./components/Design.vue";

const routes = [
    {
        path: '/',
        components: {
            home: Home,
            projects: Projects
        }
    },
    {
        path: '/abt',
        component: About
    },
    {
        path: '/design',
        component: Design
    },
    {
        path: '/makenote',
        component: MakeNOTE
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;