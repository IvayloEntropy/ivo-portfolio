<script setup>
import { load } from "../../api/api.js"
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { onKeyStroke } from "@vueuse/core"

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
</script>

<template>
  <div
    v-if="currentProject?.fields"
    class="pb-12 text-center md:pb-20 md:text-left"
  >
    <div class="flex gap-4">
      <router-link
        v-if="indexOfCurrentProject > 0"
        :to="`/projects/${projects[indexOfCurrentProject - 1].fields.slug}`"
        class="font-semibold"
        >Prev</router-link
      >
      <router-link
        v-if="indexOfCurrentProject < projects.length - 2"
        :to="`/projects/${projects[indexOfCurrentProject + 1].fields.slug}`"
        class="font-semibold"
        >Next</router-link
      >
    </div>
    <div
      style="box-shadow: 0 8px 20px rgb(0 0 0 / 8%), 0 1px 6px rgb(0 0 0 / 5%)"
      class="w-full p-5"
    >
      <div class="flex">
        <div class="pr-10">
          <h1
            class="leading-tighter mb-4 mt-2 text-4xl font-semibold tracking-tighter md:text-4xl"
          >
            {{ currentProject.fields.name }}
          </h1>
          <span class="text-2xl text-gray-500"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium quam, ullam eveniet incidunt porro enim asperiores
            tempora a ipsa suscipit, optio laudantium ab deserunt ipsum quisquam
            sint, doloremque soluta consequatur.</span
          >
          <div class="mt-4">
            <div class="-m-1.5 flex flex-wrap justify-center md:justify-start">
              <button
                class="relative m-1.5 inline-flex border px-3 py-1.5 text-sm font-medium text-gray-800"
              >
                <div class="flex items-center justify-center">
                  <span>Web design</span>
                </div>
              </button>
              <button
                class="relative m-1.5 inline-flex border px-3 py-1.5 text-sm font-medium text-gray-800"
              >
                <div class="flex items-center justify-center">
                  <span>Fullstack development</span>
                </div>
              </button>
              <button
                class="relative m-1.5 inline-flex border px-3 py-1.5 text-sm font-medium text-gray-800"
              >
                <div class="flex items-center justify-center">
                  <span>Strategy</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <img
          style="height: 320px; object-fit: cover"
          class="grow self-start rounded shadow-md"
          :src="currentProject.fields.image[0].url"
          width="435"
          height="326"
          alt="About us 02"
        />
      </div>
      <h1 class="mb-4 mt-2 text-4xl font-semibold tracking-tighter md:text-3xl">
        Key problems
      </h1>
      <span class="text-2xl text-gray-500"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        porro enim asperiores tempora a ipsa suscipit, optio laudantium ab
        deserunt ipsum quisquam sint, doloremque soluta consequatur.</span
      >
      <h1 class="mb-4 mt-6 text-4xl font-semibold tracking-tighter md:text-3xl">
        Processes
      </h1>
      <span class="text-2xl text-gray-500"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        porro enim asperiores tempora a ipsa suscipit, optio laudantium ab
        deserunt ipsum quisquam sint, doloremque soluta consequatur.</span
      >
      <h1 class="mb-4 mt-6 text-4xl font-semibold tracking-tighter md:text-3xl">
        End result
      </h1>
      <span class="text-2xl text-gray-500"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        porro enim asperiores tempora a ipsa suscipit, optio laudantium ab
        deserunt ipsum quisquam sint, doloremque soluta consequatur.</span
      >
    </div>
  </div>
</template>
