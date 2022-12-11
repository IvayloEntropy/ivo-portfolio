<template>
  <section class="relative">
    <div class="mx-auto max-w-7xl sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
          <h1
            class="leading-tighter mb-4 mt-2 text-5xl font-semibold tracking-tighter md:text-6xl"
          >
            Tutorials & guides for using Simple with any project
          </h1>
        </div>

        <!-- Articles list -->
        <div class="mx-auto max-w-sm md:max-w-none">
          <!-- Articles container -->
          <div
            class="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8"
          >
            <!-- 1st article -->
            <article class="flex h-full flex-col" data-aos="zoom-y-out">
              <header>
                <router-link to="/blog-post" class="mb-6 block">
             
                </router-link>
                <div class="mb-3">
                  <ul class="-m-1 flex flex-wrap text-xs font-medium">
                    <li class="m-1">
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
                  <router-link to="/blog-post" class="hover:underline"
                    >Making component design decisions in React</router-link
                  >
                </h3>
              </header>
              <p class="grow text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TutorialsList",
}
</script>
