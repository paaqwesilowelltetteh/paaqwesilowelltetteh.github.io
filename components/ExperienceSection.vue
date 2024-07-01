<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>
      <p class="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places I worked</p>
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 class="font-medium text-gray-400 text-base uppercase">Company</h6>
          <div v-for="(experience, index) in experiences" :key="'company-' + index">
            <p class="font-semibold text-gray-600 text-base">
              {{ experience.company }} <span class="font-normal text-gray-300">/ {{ experience.location }}</span>
            </p>
          </div>
        </div>
        <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 class="font-medium text-gray-400 text-base uppercase">Position</h6>
          <div v-for="(experience, index) in experiences" :key="'position-' + index">
            <p class="font-normal text-gray-400 text-base">{{ experience.position }}</p>
          </div>
        </div>
        <div class="space-y-8 md:space-y-16">
          <h6 class="font-medium text-gray-400 text-base uppercase">Year</h6>
          <div v-for="(experience, index) in experiences" :key="'year-' + index">
            <p class="font-normal text-gray-400 text-base">{{ experience.year }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const experiences = ref([
  { company: 'Agrocenta Technolodies', location: 'Greater Accra', position: 'Software Developer/Project Lead', year: '2023 - to date' },
  { company: 'Pebbles Technologies', location: 'Greater Accra', position: 'Software Developer/Project Lead', year: '2023 - to date' }, 
  { company: 'Weja/Gbawe Municipal Assembly', location: 'Greater Accra', position: 'Programming Assistant', year: '2019 - 2023' },
  { company: 'Bank of Africa', location: 'Greater Accra', position: 'Internship', year: '2016' }
]);
</script>