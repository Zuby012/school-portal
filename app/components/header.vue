<template>
    <div class="flex items-center justify-between text-white">
        <!--logo and school name-->
        <div class="flex items-center gap-2">
            <img src="/logo1.1.png" alt="Berows logo" loading="lazy" class="w-25 h-20">
            <h1 class="text-2xl font-serif font-bold">BEROWS UNIVERSITY</h1>
        </div>
        <!--mobile responsive menu icon-->
        <span class="md:hidden sm:block" @click="menuToggle()">
            <button v-if="menu === 'hidden'">&#9776;</button>
            <button v-else>&times;</button>
        </span>
        <!--mobile responsive menu dropdown-->
        <nav :class="menu" class="w-fit h-fit relative">
            <ul class="bg-white p-3 rounded-lg flex flex-col gap-4 text-black shadow-lg absolute right-0 top-5">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Admission</NuxtLink></li>
                <li><NuxtLink to="/">Academics</NuxtLink></li>
                <li><NuxtLink to="/">Contact</NuxtLink></li>
                <li class="font-bold"><NuxtLink to="/">Login</NuxtLink></li>
            </ul>
        </nav>
        <!--laptop responsive menu-->
        <nav class="hidden md:block">
            <ul class="md:flex justify-center items-center gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
                <li><NuxtLink to="/">Admission</NuxtLink></li>
                <li><NuxtLink to="/">Academics</NuxtLink></li>
                <li><NuxtLink to="/">Contact</NuxtLink></li>
                <li class="md:px-3 md:py-2 md:rounded-lg font-bold md:text-green-900 md:bg-white"><NuxtLink to="/">Login</NuxtLink></li>
            </ul>
        </nav>
        <!---->
    </div>
</template>
<script setup>

const menu = ref('hidden')

const menuToggle = () => {
    if (menu.value === 'hidden' ) {
        menu.value = 'block';
    }else{
        menu.value = 'hidden'
    }
}

</script>