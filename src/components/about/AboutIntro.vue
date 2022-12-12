<template>
  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1
            class="leading-tighter mb-8 mt-2 text-5xl font-semibold tracking-tighter md:text-6xl"
          >
            A few words about me
          </h1>
          <p class="text-xl text-gray-600">
            An ex-kickboxer, I love latino dances, love to draw, read, oh and
            almost forgot code! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Officia eveniet sapiente quis ullam modi cum unde
            optio voluptatem sint rem suscipit, aliquid harum illum dolor
            architecto sequi ipsam, in amet.
          </p>
        </div>

        <figure class="flex items-start justify-center">
          <img
            class="rounded shadow-2xl"
            src="/kickbox2.png"
            width="768"
            height="432"
            alt="About us"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutIntro",
}
</script>
