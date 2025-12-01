<template>
    <body class="bg-gray-100">
        <header class="bg-green-900 p-5">
            <Header></Header>
        </header>
        <main class="p-10 flex flex-col gap-10">
            <div class="flex items-center justify-between">
                <img src="/img1.png" alt="welcome" loading="lazy" class="hidden md:block md:w-100 lg:w-auto">
                <div class="flex flex-col">
                    <h1 class="text-5xl font-extrabold">Welcome to Our School</h1>
                    <p class="my-5">
                        Providing Quality Education since 1923.
                    </p>
                    <span class="w-full p-3 flex lg:justify-center"><button class="bg-green-900 text-white py-3 px-6 rounded-lg">Learn More</button></span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex flex-col justify-center">
                    <div class="my-5">
                        <h2 class="text-3xl font-extrabold my-5">About Our School</h2>
                        <p>Berows University is a premier research insitution dedicated to academic excellence, discovery and global services.</p>
                        <p>Established in 1923, we blend a richtradition with a powerful commitment to future-forward innovation.</p>
                        <p>Our mission is to educate ethical, global leaders, underpinned by values of integrity, inclusion, and excellence.</p>
                        <p>Led by Vice Chancellor Engr. John Doe, we operate with a clear strategic vision to solve complex societal challenges.</p>
                        <p>We offer state of the art facilities, including specialized labs like the <b>College of Engineering & Applied Sciences</b>.</p>
                        <p>The Campus features historic architecture alongside modern academic and residential amenities.</p>
                        <p>Admission are holistic, seeking individuals who demonstrate curiosity, potential, and a desire to contribute.</p>
                        <p>We invite you to join the Berows community and build a legacy of impact.</p>
                    </div>
                    <span class="w-full p-3"><button class="bg-green-900 text-white py-3 px-6 rounded-lg">Learn More</button></span>
                </div>
                <img src="/img2.png" alt="about" loading="lazy" class="hidden md:block md:w-100 lg:w-auto">
            </div>
        </main>
        <footer>

        </footer>
    </body>
</template>
<script setup>

useHead({
    title: 'Home',
})

</script>