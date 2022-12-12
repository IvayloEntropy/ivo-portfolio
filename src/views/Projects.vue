<script setup>
import { load } from "../api/api.js"
import { ref } from "vue"

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
const category = ref("0")
</script>

<template>
  <section class="relative">
    <div class="mx-auto max-w-7xl sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
          <h1
            class="leading-tighter mb-8 mt-2 text-5xl font-semibold tracking-tighter md:text-6xl"
          >
            Latest projects and work
          </h1>
          <div class="mt-4">
            <div class="-m-1.5 flex flex-wrap justify-center md:justify-start">
              <button
                class="relative m-1.5 inline-flex rounded-full border px-3 py-1.5 text-sm font-medium text-gray-800"
                :class="
                  category === '0'
                    ? 'border-blue-300 bg-blue-100'
                    : 'border-gray-200 bg-white'
                "
                @click="category = '0'"
              >
                <div class="flex items-center justify-center">
                  <span>View All</span>
                </div>
              </button>
              <button
                class="relative m-1.5 inline-flex rounded-full border px-3 py-1.5 text-sm font-medium text-gray-800"
                :class="
                  category === '1'
                    ? 'border-blue-300 bg-blue-100'
                    : 'border-gray-200 bg-white'
                "
                @click="category = '1'"
              >
                <div class="flex items-center justify-center">
                  <span>Startups</span>
                </div>
              </button>
              <button
                class="relative m-1.5 inline-flex rounded-full border px-3 py-1.5 text-sm font-medium text-gray-800"
                :class="
                  category === '2'
                    ? 'border-blue-300 bg-blue-100'
                    : 'border-gray-200 bg-white'
                "
                @click="category = '2'"
              >
                <div class="flex items-center justify-center">
                  <span>Clients work</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Articles list -->
        <div class="mx-auto max-w-sm md:max-w-none">
          <!-- Articles container -->
          <div
            class="grid items-start gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8"
          >
            <ProjectCardSkeleton v-if="isLoading" v-for="i in 4" />
            <PProjectCard
              v-else
              v-for="project in projects"
              :key="project.id"
              :link="`/projects/${project.fields.slug}`"
              :title="project.fields.name"
              :image="project.fields.image[0].url"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <PCallToAction />
</template>
