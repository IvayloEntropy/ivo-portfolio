<template>
  <section class="relative">
    <div class="mx-auto max-w-7xl sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
          <h1
            class="leading-tighter mb-4 mt-2 text-5xl font-semibold tracking-tighter md:text-6xl"
          >
            Articles and toughts that may give you some value
          </h1>
        </div>

        <!-- Articles list -->
        <div class="mx-auto max-w-sm md:max-w-none">
          <!-- Articles container -->
          <div
            class="grid items-start gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8"
          >
            <!-- 1st article -->
            <ArticleItem
              title="Redesigning your project, what are the steps there?"
              image="https://acinonyxweb.agency/uploads/2020/12/pearsonuxdesignedbyawa.gif"
            />

            <ArticleItem
              title="How to use Figma to organize your toughts and ideas?"
              image="https://help.figma.com/hc/article_attachments/5285510204183/Create_section_from_selection.gif"
            />
            <ArticleItem
              title="Design system, what value could bring in your project?"
              image="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5aa962fe2c7d3a2c4983093d/images/5d23a1032c7d3a5cd38ed478/file-XZtk5ycXuW.gif"
            />
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
