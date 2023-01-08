<script setup>
import { ref } from "vue"

const props = defineProps({
  image: { type: String, default: "" },
  video: { type: String, default: "" },
  title: { type: String, default: "" },
  project: { type: Object, default: () => {} },
  dark: { type: Boolean, default: false },
  height: { type: Boolean, default: 350 },
  link: { type: Boolean, default: "/" },
})

const video = ref(null)

function playVideo() {
  video.value.play()
}
function stopVideo() {
  if (video.value) {
    video.value.pause()
    video.value.currentTime = 0
  }
}
</script>
<template>
  <router-link
    v-if="project"
    class="group relative transition duration-150 ease-in-out hover:shadow-xl"
    :to="link"
  >
    <img
      v-if="!project.fields?.video"
      class="aspect-square w-full object-cover"
      :src="image"
      alt="Inspiration 07"
      :style="'height: ' + height + 'px'"
    />
    <video v-else class="aspect-square w-full object-cover" :style="'height: ' + height + 'px'" ref="video" @mouseover="playVideo"  @mouseleave="stopVideo" muted loop id="myVideo">
      <source :src="project.fields?.video &&  project.fields?.video[0]?.url" type="video/mp4">
    </video>
    <!-- Content on hover -->
    <div
      class="absolute bottom-0 left-0 right-0 p-4 md:hidden md:group-hover:block"
    >
      <!-- Backdrop -->
      <div
        class="pointer-events-none absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80"
        aria-hidden="true"
      ></div>
      <!-- Content -->
      <div class="relative flex justify-between">
        <!-- Left side -->
        <div class="flex items-center">
          <div class="truncate">
            <div class="truncate font-bold text-white">{{ title }}</div>
            <div class="truncate text-xs text-white opacity-60">
              @Frontend, @WebDesign
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
