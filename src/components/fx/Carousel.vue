<template>
  <div class="overflow-hidden">
    <div
        ref="carousel"
        class="flex space-x-4 animate-carousel"
        @animationiteration="resetAnimation"
    >
      <div
          v-for="(item, index) in items"
          :key="index"
          class="font-squadaOne text-coal hover:text-dark-pink text-2xl
                 flex-shrink-0
                 w-72 h-8
                 flex items-center justify-center"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Carousel',
  setup() {
    const items = ref(['front-end', 'graphic design', 'product design', 'motion design',
      'full-stack', 'ux/ui', 'front-end']);
    const carousel = ref<HTMLDivElement | null>(null);

    const resetAnimation = () => {
      const element = carousel.value;
      if (element) {
        element.classList.remove('animate-carousel');
        void element.offsetWidth;
        element.classList.add('animate-carousel');
      }
    };

    onMounted(() => {
      resetAnimation();
    });

    return {
      items,
      carousel,
      resetAnimation,
    };
  },
});
</script>

<style>
@keyframes carousel {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-carousel {
  animation: carousel 10s linear infinite;
}
</style>
