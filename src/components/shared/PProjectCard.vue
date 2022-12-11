<script setup>
const props = defineProps({
  image: { type: String, default: "" },
  title: { type: String, default: "" },
  dark: { type: Boolean, default: false },
})
</script>
<template>
  <div
    class="relative bg-gray-50"
    style="box-shadow: 0 8px 20px rgb(0 0 0 / 8%), 0 1px 6px rgb(0 0 0 / 5%)"
  >
    <span
      class="absolute top-8 left-8 w-52 text-3xl font-semibold"
      :class="{ 'text-gray-50': dark, 'text-gray-900': !dark }"
      >{{ title }}</span
    >

    <img
      class="cursor-pointer"
      :src="image"
      style="height: 100%; width: 100%; object-fit: cover"
    />
  </div>
</template>
