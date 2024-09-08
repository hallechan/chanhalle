// src/router/index.js or src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import MakeNOTE from "./components/projects/MakeNOTE.vue";

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
        path: '/makenote',
        component: MakeNOTE
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;