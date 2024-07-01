<template>
  <section class="py-10 md:py-16">

    <div class="container max-w-screen-xl mx-auto px-4">

      <nav class="flex items-center justify-between mb-40">
        <span class="flex items-center gap-3">
          <NuxtLink to="/" class="font-medium text-gray-700 text-lg md:text-2xl">Enoch Tetteh</NuxtLink>
          -
          <NuxtLink to="/" class="font-normal text-gray-500 text-md md:text-xl">Full Stack Developer</NuxtLink>
        </span>

        <span class="flex items-center gap-3">
          <NuxtLink to="https://github.com/paaqwesilowelltetteh"
            class="font-medium text-gray-700 text-lg md:text-2xl hover:bg-slate-200 p-2 rounded-full" external>
            <IconsGithubIcon />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/enoch-tetteh-b1b6371bb/"
            class="font-medium text-gray-700 text-lg md:text-2xl hover:bg-slate-200 p-2 rounded-full" external>
            <IconsLinkedInIcon />
          </NuxtLink>
        </span>
      </nav>

      <div class="text-center">
        <div class="flex justify-center mb-16">
          <img src="/image/home-image.jpeg" alt="Image" class="rounded-full h-60 w-60">
        </div>

        <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Enoch Tetteh</h6>

        <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Full Stack Developer</h1>

        <p class="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software. I enjoy creating
          tools that make life easier for people.
        </p>

        <div class="flex justify-center gap-3">
          <NuxtLink to="/"
            class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">
            Hire
            me
          </NuxtLink>
          <NuxtLink to="/"
            class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
            Get
            my CV
          </NuxtLink>
        </div>

      </div>

    </div>

  </section>
</template>

<script lang="ts" setup>

</script>

<style></style>