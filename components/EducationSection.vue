<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
      <p class="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I studied</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div v-for="(education, index) in educations" :key="index" class="bg-gray-50 px-8 py-10 rounded-md cursor-pointer hover:shadow-lg">
          <h3 class="font-medium text-blue-700 text-xl mb-4">{{ education.institution }}</h3>
          <h4 class="font-medium text-gray-700 text-lg mb-4">{{ education.degree }}</h4>
          <h4 class="font-medium text-gray-700 text-lg mb-4">{{ education.location }}</h4>
          <h4 class="font-medium text-gray-700 text-lg mb-4">{{ education.year }}</h4>
          <p class="font-normal text-gray-500 text-md mb-4" v-html="education.description"></p>
          <div class="relative">
            <NuxtLink :to="education.link" ><h6 class="font-semibold text-gray-500 text-md relative z-10 hover:text-blue-400">Go to website</h6></NuxtLink>
            <!-- <span class="w-26 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const rawEducations = ref([
  {
    year: '2015 – 2019',
    institution: 'Pentecost University',
    location: 'Sowutuom - Accra - Ghana',
    degree: 'Bachelor of Science in Information Technology',
    link: 'https://www.pentvars.edu.gh/',
    description: 'Studied courses such as Computer Programming in (C, Visual Basic, PHP, Java), Web Development, Computer Networking, etc.'
  },
  {
    year: '2013 – 2015',
    institution: 'NextGen IT solutions',
    location: 'Tema - Accra - Ghana',
    degree: 'Software/Hardware, IT, Networking, Server configuration, etc.',
    link: '#',
    description: 'Studied computer networking, server configuration, hardware, etc.'
  }
]);

const educations = computed(() => {
  return rawEducations.value.map(education => ({
    ...education,
    description: education.description.replace(/<br>/g, '\n')
  }));
});
</script>

<style></style>