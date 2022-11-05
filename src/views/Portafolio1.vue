<template>
	<main class="bg-[#8858ED] pt-11">
		<div class="bg-[#6239ba] ml-[900px] p-5 mb-11 ">
			<nav class="mt-[200px]">
				<div v-if="mostrarRegisterVsLogin">
					<Register > </Register>
				</div>

				<div v-if="!mostrarRegisterVsLogin">
					<Login> </Login>
				</div>
			</nav>
			<button @click="mostrarRegisterVsLogin = true" class="bg-red-400 rounded-md mr-[30px]">Registrarse</button>
			<button @click="mostrarRegisterVsLogin = false" class="bg-green-400 rounded-md">Iniciar Sesion</button>

		</div>
<Cartas> </Cartas>


</main>
</template>

<script setup>
import Cartas from "../components/Cartas.vue";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import { computed, reactive, toRefs } from "vue";
import { useDataBase } from "../store/Database";


const DataBase = useDataBase()

let state = reactive({
	mostrarRegisterVsLogin: true,
})

const {mostrarRegisterVsLogin} = toRefs(state)

// let HandleRegister = computed(() => {
// 	mostrarRegister.value = !mostrarRegister.value
// })
DataBase.getUrls()
</script>

<style lang="scss" scoped>

</style>
