<script setup>
const props = defineProps({
  link: { type: String, default: "" },
  classes: { type: String, default: "" },
})
</script>
<template>
  <router-link :to="link" class="base_link text-xl" :class="classes"
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
