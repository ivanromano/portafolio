<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    title="Basic Drawer"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >

  <div v-if="mostrarRegisterVsLogin">
					<Register > </Register>
				</div>

				<div v-if="!mostrarRegisterVsLogin">
					<Login> </Login>
				</div>
      <button @click="mostrarRegisterVsLogin = true" class="bg-red-400 rounded-md mr-[30px]">Registrarse</button>
			<button @click="mostrarRegisterVsLogin = false" class="bg-green-400 rounded-md">Iniciar Sesion</button>
  </a-drawer>
</template>
<script setup>
import { ref } from 'vue';
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import { reactive, toRefs } from "vue";

    const state = reactive({
      mostrarRegisterVsLogin: false
    })

    const {mostrarRegisterVsLogin} = toRefs(state)

    const visible = ref(false);

    const afterVisibleChange = bool => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
</script>
