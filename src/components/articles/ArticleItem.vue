<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  image: { type: String, default: "" },
})
</script>
<template>
  <article class="flex h-full flex-col shadow-md" data-aos="zoom-y-out">
    <router-link to="/blog-post" class="mb-6 block"
      ><img
        style="height: 220px; width: 100%; object-fit: cover"
        :src="image"
      />
    </router-link>
    <div class="p-6 pt-0">
      <div class="mb-3">
        <ul class="-m-1 flex flex-wrap text-xs font-medium">
          <!-- <li class="m-1">
            <a
              class="inline-flex rounded-full bg-blue-500 py-1 px-3 text-center text-gray-100 transition duration-150 ease-in-out hover:bg-blue-600"
              href="#0"
              >Guides</a
            >
          </li>
          <li class="m-1">
            <a
              class="inline-flex rounded-full bg-blue-100 py-1 px-3 text-center text-gray-800 transition duration-150 ease-in-out hover:bg-blue-200"
              href="#0"
              >Intermediate</a
            >
          </li> -->
          <li class="m-1">
            <a
              class="inline-flex rounded-full bg-blue-100 py-1 px-3 text-center text-gray-800 transition duration-150 ease-in-out hover:bg-blue-200"
              href="#0"
              >Intermediate</a
            >
          </li>
          <li class="m-1">
            <span
              class="inline-flex rounded-full bg-white py-1 px-3 text-center text-gray-800 shadow-sm"
              >4 min read</span
            >
          </li>
        </ul>
      </div>
      <h3 class="mb-2 text-xl font-bold leading-snug tracking-tight">
        <router-link to="/blog-post" class="hover:underline">{{
          title
        }}</router-link>
      </h3>
      <p class="grow text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
  </article>
</template>
