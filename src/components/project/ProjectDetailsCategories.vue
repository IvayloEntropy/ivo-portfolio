<script setup>
const props = defineProps({
  tags: { type: String, default: "" },
})

const arrayTags = props.tags ? props.tags.split(",") : []
</script>
<template>
  <div class="mt-4">
    <div class="-m-1.5 flex flex-wrap justify-center md:justify-start">
      <button
        v-for="tag in arrayTags" :key="tag"
        class="relative m-1.5 inline-flex border px-3 py-1.5 text-sm font-medium text-gray-800"
      >
        <div class="flex items-center justify-center">
          <span>#{{ tag }}</span>
        </div>
      </button>
    </div>
  </div>
</template>
