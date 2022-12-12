<script setup>
import { ref } from "vue"

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
            <div class="flex flex-wrap justify-center md:justify-start -m-1.5">
              <button class="relative font-medium text-gray-800 text-sm px-3 py-1.5 border rounded-full inline-flex m-1.5" :class="category === '0' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'" @click="category = '0'">
                <div class="flex items-center justify-center">
                  <span>View All</span>
                </div>
              </button>
              <button class="relative font-medium text-gray-800 text-sm px-3 py-1.5 border rounded-full inline-flex m-1.5" :class="category === '1' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'" @click="category = '1'">
                <div class="flex items-center justify-center">
                  <span>Startups</span>
                </div>
              </button>
              <button class="relative font-medium text-gray-800 text-sm px-3 py-1.5 border rounded-full inline-flex m-1.5" :class="category === '2' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'" @click="category = '2'">
                <div class="flex items-center justify-center">
                  <span>Clients work</span>
                </div>
              </button>
              <!-- <button class="relative font-medium text-gray-800 text-sm px-3 py-1.5 border rounded-full inline-flex m-1.5" :class="category === '3' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'" @click="category = '3'">
                <div class="flex items-center justify-center">
                  <span>Web design</span>
                </div>
              </button> -->
     
            </div>
          </div>
        </div>
     

        <!-- Articles list -->
        <div class="mx-auto max-w-sm md:max-w-none">
          <!-- Articles container -->
          <div
            class="grid items-start gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-8"
          >
            <!-- 1st article -->
            <PProjectCard
            v-show="['0', '2'].includes(category)"
            link="/project"
            title="Teamwork Details Panel"
            image="/Projects/teamwork.png"
            />
            <PProjectCard
            v-show="['0', '2'].includes(category)"

            link="/project"
            title="BnewB academy"
            image="/Projects/bnewbacademy.png"
            dark
            />
            <PProjectCard
            v-show="['0', '2'].includes(category)"

            link="/project"
            title="VMPetroleum"
            image="/Projects/vmp.png"
            />

            <PProjectCard
            v-show="['0', '2'].includes(category)"

            link="/project"
            title="Talentjam"
            image="/Projects/talentjam.png"
            dark
            />
            <PProjectCard
            v-show="['0', '1'].includes(category)"

                link="/project"
                title="Star wars SWAPI"
                image="/Projects/swapi.png"
            />

            <PProjectCard
            v-show="['0', '1'].includes(category)"
                link="/project"
                title="Teamwork planning poker"
                image="/Projects/planningpoker.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>