<script setup>
const props = defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "" },
  dark: { type: Boolean, default: false },
  height: { type: Boolean, default: 350 },
  link: { type: Boolean, default: "/" },
})
</script>
<template>
  <router-link
    class="group relative transition duration-150 ease-in-out hover:shadow-xl"
    :to="link"
  >
    <img
      class="aspect-square w-full object-cover"
      :src="image"
      alt="Inspiration 07"
      :style="'height: ' + height + 'px'"
    />
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
