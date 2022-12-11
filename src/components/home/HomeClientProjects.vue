<script setup></script>
<template>
  <div class="bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl sm:px-6">
      <PSignitureText>SELECTED PROJECTS</PSignitureText>
      <h1
        class="mb-16 mt-6 text-4xl font-semibold tracking-tighter md:text-5xl"
      >
        Client stories
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <PProjectCard
          link="/project"
          title="Teamwork Details Panel"
          image="/Projects/teamwork.png"
        />
        <PProjectCard
          link="/project"
          title="BnewB academy"
          image="/Projects/bnewbacademy.png"
          dark
        />
        <PProjectCard
          link="/project"
          title="VMPetroleum"
          image="/Projects/vmp.png"
        />

        <PProjectCard
          link="/project"
          title="Talentjam"
          image="/Projects/talentjam.png"
          dark
        />
      </div>
    </div>
  </div>
</template>
