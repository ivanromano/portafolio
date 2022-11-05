<template>
    <h1>fdfdffd {{ segundos ? 'si' : 'no'}}</h1>
<div :class="`bg-gradient-to-r from-red-200 via-[#FFD196] to-[#FF435C] h-[900px]`">
	<nav class="grid grid-cols-12 grid-rows-3 gap-2 mx-2 pt-[120px]">
            <div class="bg-[#b492ff] col-start-2 col-span-2 row-span-2">
                <AntOpenRegister> </AntOpenRegister>
            </div>

            <div class="col-start-6 col-span-2 bg-[#b492ff] h-[100px]">
                <main>
                    <p>Elegir color del fondo</p>

                    <a-slider v-model:value="value10" :tooltip-visible="true" :max="10" />
                </main>
            </div>

            <div class="col-span-2 bg-[#b492ff] h-[100px]">

            </div>

            <div class="col-span-2 bg-[#b492ff] h-[100px]">

            </div>
    </nav>
    <AntDesplegable></AntDesplegable>
</div>
</template>

<script setup>
import AntOpenRegister from "../components/AntOpenRegister.vue";
import { computed, defineComponent, reactive, toRefs } from 'vue';
import AntDesplegable from "../components/AntDesplegable.vue";

const state = reactive({
    value10: 4,
    segundos: false
})
const {value10, segundos} = toRefs(state)

setTimeout(() => {
    segundos.value = true
}, 5000);


// let HandleRegister = computed(() => {
// 	mostrarRegister.value = !mostrarRegister.value
// })

</script>

<style lang="scss" scoped>

</style>
