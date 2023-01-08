<script setup>
import { load } from "../../api/api.js"
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { onKeyStroke } from "@vueuse/core"
import ProjectDetailsCategories from "./ProjectDetailsCategories.vue"
import ProjectDetailsSkeleton from "../skeletons/ProjectDetailsSkeleton.vue"

const route = useRoute()

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

const currentProject = computed(() =>
  projects.value.find(project => project?.fields?.slug == route.params.slug),
)

const indexOfCurrentProject = computed(() => {
  return projects.value.indexOf(currentProject.value)
})

onKeyStroke("ArrowLeft", e => {
  if (currentProject?.fields) {
    route.push(`/projects/${projects[indexOfCurrentProject - 1].fields.slug}`)
  }
})

onKeyStroke("ArrowRight", e => {
  if (currentProject?.fields) {
    route.push({
      path: `/projects/${projects[indexOfCurrentProject + 1].fields.slug}`,
    })
  }
})

const video = ref(null)

function playVideo() {
  video.value.play()
}
function stopVideo() {
  video.value.pause()
  video.value.currentTime = 0
}
</script>

<template>
  <div class="relative text-center md:text-left">
    <div v-if="!isLoading">
      <NextIcon
        v-if="indexOfCurrentProject > 0"
        :link="`/projects/${projects[indexOfCurrentProject - 1].fields.slug}`"
        class="absolute -right-28 top-2/4"
      />
      <PrevIcon
        v-if="indexOfCurrentProject < projects.length - 2"
        :link="`/projects/${projects[indexOfCurrentProject + 1].fields.slug}`"
        class="absolute -left-28 top-2/4"
      />
    </div>

    <div
      style="box-shadow: 0 8px 20px rgb(0 0 0 / 8%), 0 1px 6px rgb(0 0 0 / 5%)"
      class="w-full p-5"
    >
      <ProjectDetailsSkeleton v-if="isLoading" />
      <div v-else>
        <div class="flex justify-between">
          <div class="pr-10">
            <h1
              class="leading-tighter mb-4 mt-2 text-4xl font-semibold tracking-tighter md:text-4xl"
            >
              {{ currentProject.fields.name }}
            </h1>
            <span class="text-2xl text-gray-500"
              >{{  currentProject.fields.baseDescription  }}</span
            >
            <ProjectDetailsCategories :tags="currentProject.fields.tags"/>
        
          </div>
             <img
              v-if="!currentProject.fields?.video"
              style="object-fit: cover"
              class=" self-start rounded shadow-md"
              :src="currentProject.fields.image[0].url"
          />
            <video v-else ref="video" autoplay style="height: 250px; max-width: 450px;" muted loop id="myVideo">
              <source :src="currentProject.fields?.video &&  currentProject.fields?.video[0]?.url" type="video/mp4">
            </video>
s      
        </div>
        <h1
          class="mb-4 mt-2 text-4xl font-semibold tracking-tighter md:text-3xl"
        >
          Story
        </h1>
        <span class="text-xl text-gray-500" v-html="currentProject.fields.story"></span>
      </div>
    </div>
  </div>
</template>
