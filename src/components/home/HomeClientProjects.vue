<script setup>
const props = defineProps({
  projects: { type: Array, default: () => {} },
})
</script>
<template>
  <div class="bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl sm:px-6">
      <PSignitureText>SELECTED PROJECTS</PSignitureText>
      <h1
        class="mb-16 mt-6 text-4xl font-semibold tracking-tighter md:text-5xl"
      >
        Client stories
      </h1>
      <div class="grid grid-cols-2 gap-4">
        
        <PProjectCard
          v-for="project in projects"
          :key="project.id"
          :link="`/projects/${project.fields.slug}`"
          :title="project.fields.name"
          :image="project.fields.image[0].url"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>
