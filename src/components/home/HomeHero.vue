<template>
  <section class="relative" style="height: 100vh">
    <!-- Illustration behind hero content -->

    <div class="mx-auto max-w-7xl sm:px-6">
      <!-- Hero content -->
      <div class="pt-80 pb-12 md:pt-40 md:pb-20" style="padding-top: 420px">
        <!-- Section header -->
        <div class="max-w-5xl pb-12 text-left md:pb-16" style="z-index: 21">
          <PSignitureText>IVO OVCHAROV</PSignitureText>
          <h1
            class="leading-tighter mb-4 mt-2 text-5xl font-semibold tracking-tighter md:text-6xl"
            data-aos="zoom-y-out"
          >
            Web developer, designer and consultants
          </h1>
          <div class="max-w-3xl">
            <p
              class="mb-8 text-2xl text-gray-500"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Senior Front-end developer from Bulgaria, with over 6 years of
              experience. Specialized in building design system components with
              Vue.js
            </p>
            <div
              class="flex max-w-xs text-gray-400 sm:flex sm:max-w-none"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <PLinkButton link="/projects">View Projects</PLinkButton>
              <span class="mx-2 text-xl">or</span>
              <PLinkButton href="https://calendly.com/ivoovcharov/30min"
                >Schedule a meeting</PLinkButton
              >
            </div>
          </div>
          <img
            class="hidden lg:block"
            style="
              position: absolute;
              bottom: 0;
              right: 0;
              height: calc(100vh - 80px);
              z-index: 20;
            "
            src="/hero.webp"
            alt=""
          />
          <img
            class="hidden lg:block"
            style="position: absolute; top: 100px; left: 80px; z-index: 19"
            src="/developer.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PLinkButton from "../shared/PLinkButton.vue"

export default {
  name: "HeroHome",
  data: function () {
    return {
      videoModalOpen: false,
    }
  },
  components: { PLinkButton },
}
</script>
