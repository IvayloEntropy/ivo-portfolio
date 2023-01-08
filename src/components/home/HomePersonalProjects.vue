<script setup>
const props = defineProps({
  projects: { type: Array, default: () => {} },
})
</script>
<template>
  <div class="mx-auto max-w-7xl py-20 sm:px-6">
    <PSignitureText>SELECTED PROJECTS</PSignitureText>
    <h1 class="mb-16 mt-6 text-4xl font-semibold tracking-tighter md:text-5xl">
      Startups stories
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <PProjectCard
        v-for="project in projects"
        :key="project.id"
        :link="`/projects/${project.fields.slug}`"
        :title="project.fields.name"
        :project="project"
        :image="project.fields.image[0].url"
      />
      <!-- 
      <PProjectCard
        link="/project"
        title="Teamwork planning poker"
        image="/Projects/planningpoker.png"
      /> -->
    </div>
  </div>
</template>
