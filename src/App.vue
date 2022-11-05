<template>

<main class=" bg-[#262535]">
  <nav class="grid grid-cols-8 gap-2 mx-3 py-4">

    <AntDesplegable></AntDesplegable>

    <a-tooltip title="primer portafolio" color="pink" placement="bottom" id="components-a-tooltip-demo-color">
      <RouterLink to="/" class="col-start-2" :class="ColorNavlinks">Portafolio 1</RouterLink>
    </a-tooltip>

    <a-tooltip title="el segundo" color="blue" placement="bottom" id="components-a-tooltip-demo-color">
      <RouterLink to="/" :class="ColorNavlinks">Portafolio 2</RouterLink>
    </a-tooltip>

    <a-tooltip title="el tercero" color="green" placement="bottom" id="components-a-tooltip-demo-color">
      <RouterLink to="/" class="col-start-6" :class="ColorNavlinks">Portafolio 3</RouterLink>
    </a-tooltip>

    <a-tooltip title="el cuarto" color="lime" placement="bottom" id="components-a-tooltip-demo-color">
      <RouterLink to="/" :class="ColorNavlinks">Portafolio 4</RouterLink>
    </a-tooltip>





  </nav>

  <div class="pr-[500px]">

  </div>
</main>


  <div class="bg-[#292D39] absolute -top-5 left-[520px] w-[328px] p-2 shadow-[0_10px_35px_-15px_rgba(0,0,0,1.9)]">
    <div>
      <a-tooltip title="Victini is the Best Pokemon" color="blue" placement="bottom" id="components-a-tooltip-demo-color">
        <img src="https://furrycdn.org/img/download/2022/8/19/183484.png" class="max-h-[100px] mx-auto animate-loading" alt="">
      </a-tooltip>
    </div>
    <p class="text-red-100 text-center text-lg font-bold my-2">Victini Company</p>
  </div>



    <RouterView></RouterView>

</template>

<script setup>
import { reactive, toRef, toRefs } from "vue";
import AntDesplegable from "./components/AntDesplegable.vue";

const ColorNavlinks = `ml-4 px-3 py-2 rounded-md text-xl leading-5 text-gray-200 font-bold hover:bg-white hover:text-[#1E1E2A] transition duration-300 hover:translate-y-3 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700`


</script>

<style lang="scss" scoped>

</style>


<!-- <main class="antialiased bg-gray-200">
  <header class="lg:px-16 px-6 bg-white flex flex-initial items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <a href="#">
        <svg width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg"><path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path></svg>
    </a>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-start text-base text-gray-700 pt-4 lg:pt-0">
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Features</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Pricing</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Documentation</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Support</a></li>
      </ul>
    </nav>
    <a href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
      <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz">
    </a>

  </div>

  </header>

  <div class="px-4">
    <div class=" bg-white rounded-lg mx-auto my-24 p-16">
      <h1 class="text-2xl font-medium mb-2">Creamos tu pagina y te apoyamos con el SEO</h1>
      <h2 class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">fvdvdf</h2>
      ¿Te has preguntado, por que paginas hechas en Wordpress o Wix, aparecen tan poco en los resultados de Google? El uso de estas tecnologias, perjudica mucho el pocisionamiento web, y limita demasiado el mantenimiento de tu pagina. Somos expertos en las estrategias de SEO y en el desarrollo web
    </div>
  </div>
</main>
g -->
