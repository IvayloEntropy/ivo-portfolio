<script setup>
const props = defineProps({
  image: { type: String, default: "" },
})
</script>
<template>
  <div class="bg-gray-50 shadow-md">
    <img class="cursor-pointer" :src="image" />
  </div>
</template>
