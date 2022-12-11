<script setup>
const props = defineProps({
  link: { type: String, default: "" },
  classes: { type: String, default: "" },
  size: { type: String, default: "sm" },
})

const sizes = {
  sm: { class: "text-xl" },
  lg: { class: "text-6xl" },
}
</script>
<template>
  <router-link :to="link" class="base_link" :class="classes + sizes[size].class"
    ><slot
  /></router-link>
</template>
<style>
.base_link {
  color: #0f141e;
  font-weight: 700;
  transition: 300ms;
  border-bottom: 2px solid transparent;
}
.base_link:hover {
  border-color: black;
  cursor: pointer;
}
</style>
