<script lang="ts" setup></script>

<template>
  <div class="flex min-h-screen flex-col overflow-hidden">
    <Header />
    <main class="grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<style>
body,
h1,
h2,
h3,
h4,
h5,
h6,
a,
span,
p,
ul,
li,
div {
  font-family: "Helvetica Now Display", sans-serif !important;
}
</style>
