<template>
  <div class="flex flex-col items-center justify-center my-24 bg-background">
    <div class="text-center mb-12 animate-fade-up">
      <h1 class="text-6xl font-dmSans font-semibold tracking-tightest mb-2">i <span class="text-dark-pink">˚ʚ❤︎ɞ˚</span> designing.</h1>
      <h4 class="font-inter text-3xl leading-extra-tight tracking-evenTighter text-light-coal text-center max-w-96 break-words">
        sometimes i put them here.
      </h4>
    </div>
    <div v-if="designs.length" class="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-up animate-delay-500">
      <div v-for="design in designs" :key="design.name" class="relative group">
        <img :src="design.path" :alt="design.name" class="w-full aspect-square object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p class="text-platinum font-inter text-lg">{{ design.name }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-light-coal font-inter">
      <p>No designs to display. Please check your images folder.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = import.meta.glob<Record<string, { default: string }>>('../assets/images/gallery/*.png', { eager: true });

const designs = Object.entries(images).map(([path, module]) => ({
  name: path.split('/').pop()?.replace('.png', ''),
  path: module.default || (module as unknown as string),
}));

console.log('Loaded designs:', designs);
</script>
