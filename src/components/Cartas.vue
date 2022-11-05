<template>
	<input type="file" @change="clickimg">

  <div class="h-32 w-32 relative cursor-pointer mb-5 mt-[110px]">
    <div class="absolute inset-0 bg-white rounded-lg shadow-2xl">
      <button class="bg-blue-400 rounded-lg ml-2 p-2 my-8"> <p class="font-bold text-[#1E1E2A]"> Haz click <br> para mas <br> detalles</p></button>
    </div>

    <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300">
      <img :src="state.url_img"  alt="" class="max-h-[150px] max-w-[170px] bg-white rounded-lg shadow-2xl">
    </div>
  </div>
{{url_img}} hola
</template>

<script setup>
import { reactive } from 'vue';
import { useUsuarioStore } from '../store/Usuario';

const UsuarioStore = useUsuarioStore()

const state = reactive({
  url_img: 'https://pbs.twimg.com/media/FgoS1twXoAA1bui?format=jpg&name=small',
});

const clickimg = (e) => {
	return imagenes = e.dataTransfer.files
}
</script>

<style lang="scss" scoped>

</style>
