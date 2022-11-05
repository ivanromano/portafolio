<template>

	<main class="bg-[#8858ED] pt-11 h-[700px]">
		<button>
			RouterLink
		</button>
		<div class="absolute left-11 top-[210px]">
			<Cartas > </Cartas>
			<p>{{UsuarioStore.userData?.email}}</p>

{{DataBase.documents}}
			<ul >
			<li v-for="item in DataBase.documents" :key="item.id">
				{{ item.name }}
			</li>
		</ul>
		</div>

	<div >
			<a-tooltip title="prompt text" color="#f50" placement="bottomRight" id="components-a-tooltip-demo-color">
          <a-button>fdvf</a-button>
        </a-tooltip>
	</div>


</main>
</template>

<script setup>
import Cartas from "../components/Cartas.vue";

import { computed, reactive, toRefs } from "vue";
import { useDataBase } from "../store/Database";
import { useUsuarioStore } from "../store/Usuario";

const DataBase = useDataBase()
const UsuarioStore = useUsuarioStore()

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
  #components-a-tooltip-demo-color .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
