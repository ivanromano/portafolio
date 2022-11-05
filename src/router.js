import { createRouter, createWebHistory } from 'vue-router'
// import Tag from "./views/Tag.vue";
import Portafolio1 from "../src/views/Portafolio1.vue";

const routes = [
    {path: '/', component: Portafolio1},
    // {path: '/tag', component: Tag},
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', component: Detalles},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
