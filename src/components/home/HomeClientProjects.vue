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
      <div class="grid grid-cols-2 gap-8">
        <PProjectCard
          title="Teamwork Details Panel"
          image="/Projects/teamwork.png"
        />
        <PProjectCard
          title="Teamwork planning"
          image="/Projects/teamworkpoker.png"
        />
        <PProjectCard
          title="BnewB academy"
          image="/Projects/bnewbacademy.png"
          :dark="true"
        />
        <PProjectCard
          image="https://uploads-ssl.webflow.com/589ed0903452732276fe0a7f/5c82323817fa41c2faa495aa_Daniel-Korpai-Portfolio.png"
        />
      </div>
    </div>
  </div>
</template>
