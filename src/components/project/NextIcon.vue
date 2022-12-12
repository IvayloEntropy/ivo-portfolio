<script setup>
const props = defineProps({
  link: { type: String, default: "" },
})
</script>
<template>
  <router-link :to="link">
    <div
      class="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full hover:bg-gray-50"
      style="box-shadow: 0 8px 20px rgb(0 0 0 / 8%), 0 1px 6px rgb(0 0 0 / 5%)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </div>
  </router-link>
</template>
