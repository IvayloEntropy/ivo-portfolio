<script setup>
const props = defineProps({
  link: { type: String, default: "" },
  classes: { type: String, default: "" },
  size: { type: String, default: "sm" },
  href: { type: String, default: "" },
})

const sizes = {
  sm: { class: "text-xl" },
  lg: { class: "text-6xl" },
}
</script>
<template>
  <a
    v-if="href"
    target="_blank"
    :href="href"
    :class="classes + sizes[size].class"
    class="base_link"
    ><slot
  /></a>
  <router-link
    v-else
    :to="link"
    class="base_link"
    :class="classes + sizes[size].class"
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
