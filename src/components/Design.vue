<template>
  <div class="flex flex-col items-center justify-center my-24 bg-background">
    <div class="text-center mb-12">
      <h1 class="text-6xl font-dmSans font-semibold tracking-tightest mb-2">i <span class="text-dark-pink">˚ʚ❤︎ɞ˚</span> design.</h1>
      <h4 class="font-inter text-3xl leading-extra-tight tracking-evenTighter text-light-coal text-center max-w-96 break-words">
        & so here it is.
      </h4>
    </div>
    <div class="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div v-for="design in designs" :key="design" class="relative group">
        <img :src="`../assets/images/gallery/${design}.png`" :alt="design" class="w-full aspect-square object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p class="text-platinum font-inter text-lg">{{ design }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const designs = [
  "melody", "elixir", "vessels", "voices", "golden", "lunar", "cupid", "renee"
];
</script>
