<template>
  <div class="flex flex-col items-center justify-center my-24 bg-background">
    <div class="flex flex-col md:flex-row items-center md:items-start max-w-4xl">
      <div class="md:flex-1 text-center md:text-left w-3/4">
        <div class="animate-fade-up">
        <h1 class="text-6xl font-dmSans font-semibold tracking-tightest mb-2">hello, i’m <span class="font-smooch text-8xl font-normal">halle.</span></h1>
        <p class="font-dmSans font-medium tracking-tightest text-grey text-lg mb-4">pronounced ha-lee or hay-lee</p>
        </div>
        <div class="text-coal font-inter text-xl tracking-evenTighter animate-fade-up animate-delay-500 my-8">
        <p class="mb-6">
          I'm studying <span class="text-dark-pink">Computer Science + Human-Computer Interaction</span> at the University of Waterloo.
          I'm also venturing the creative world through a minor in <span class="text-dark-pink">Digital Arts Communication.</span>
        </p>
        <p class="mb-6">
          Previously, I worked in Vancouver as a <span class="text-dark-pink">Full Stack Developer (Co-Op)</span> at CI Technologies.
        </p>
        </div>
      </div>

      <div class="md:flex-1 flex justify-center mt-8 md:mt-0 md:ml-8 animate-jump animate-duration-1000
      animate-ease-in-out animate-iteration-once">
        <img src="../assets/images/pfp.png" alt="Profile Picture" class="w-2/3 glow-effect" />
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-start max-w-4xl">
    <div class="text-coal font-inter text-xl tracking-evenTighter animate-fade-up animate-delay-500">
    <p class="mb-6">
      I adore making products that boast our super nifty individuality.
    </p>
    <p class="text-coal text-xl">
      Besides design and software development: I listen to Suki Waterhouse, barely get through pilates class, and play as a
      Lolth-Sworn Drow in Baldur’s Gate 3.
    </p>
      </div>
      </div>
  </div>
</template>

<script setup lang="ts">
</script>