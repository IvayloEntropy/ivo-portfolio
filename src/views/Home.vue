<script setup>
import { load } from "../api/api.js"
import { ref, computed } from "vue"

const projects = ref([])
const isLoading = ref(true)
load("projects")
  .then(response => {
    projects.value = response.data.records
  })
  .catch(error => alert("Something went wrong"))
  .finally(() => {
    isLoading.value = false
  })

const clientTopProjects = computed(() =>
  projects.value.filter(
    project => project.fields.isClient && project.fields.isTop,
  ),
)

const personalTopProjects = computed(() =>
  projects.value.filter(
    project => !project?.fields?.isClient && project.fields.isTop,
  ),
)
</script>
<template>
  <HomeHero />

  <HomeClientProjects :isLoading="isLoading" :projects="clientTopProjects" />
  <HomePersonalProjects  :isLoading="isLoading" v-if="!isLoading" :projects="personalTopProjects" />
  <PCallToAction />
</template>
