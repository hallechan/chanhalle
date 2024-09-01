<template>
  <div class="bg-coal">
    <div class="flex flex-col items-center">
      <ul class="my-32 w-9/12">
        <h4 class="font-inter font-semibold tracking-evenTighter text-5xl text-platinum mb-8">new email. who dis?</h4>
        <li class="flex flex-row justify-between my-12">
          <div
              class="relative w-2/5 h-2/5"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
          >
            <img
                src="../assets/images/projects/makenote/cover.png"
                alt="Cover Image"
                class="w-full h-full object-cover transition-opacity duration-300 ease-in-out glow-effect"
                :class="{ 'opacity-0': isHovered }"
            />
            <img
                src="../assets/images/projects/makenote/coverhover.png"
                alt="Cover Hover Image"
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
            />
          </div>
          <div class="w-1/2 flex flex-col justify-between">
            <div>
            <h4 class="font-inter font-semibold tracking-evenTighter text-4xl text-platinum max-w-lg break-words">
              redesigning seamless email notifications for <span class="text-dark-pink">MakeNOTE</span>.
            </h4>
            <p class="font-inter text-lg text-grey tracking-tight leading-tight mt-4">
              Full Stack Developer @ CI Technologies<br/>
              May - August 2024
            </p>
            </div>
            <p class="font-inter text-lg text-platinum tracking-tight max-w-lg break-words ">
              Prioritizing in-’n’-out transactions and client accessibility for public safety departments.
            </p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>
