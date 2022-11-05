import { createRouter, createWebHistory } from 'vue-router'
// import Tag from "./views/Tag.vue";
import Portafolio1 from "../src/views/Portafolio1.vue";
import { useUsuarioStore } from "../src/store/Usuario";
import Registro from "../src/views/Registro.vue";

const requireAuth = async(to, from, next) => {
	const UsuarioStore = useUsuarioStore()
	UsuarioStore.loadingNav = true
	const user = await UsuarioStore.currentUser()
	// si el usuario existe, que pase lo que tenga que pasar, sino, que vaya al login
	if (user) {
		next()
	} else {
		next("/registro")
	}
	UsuarioStore.loadingNav = false
}

const routes = [
    {path: '/', component: Portafolio1, beforeEnter: requireAuth},
    {path: '/registro', component: Registro},
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
