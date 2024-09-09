<template>
  <div class="bg-coal">
    <div class="flex flex-col items-center">
      <ul class="my-32 w-9/12">

        <!-- Project 1: MakeNOTE -->
        <h4 class="font-inter font-semibold tracking-evenTighter text-5xl text-platinum mb-8">new email. who dis?</h4>
        <li class="flex flex-row justify-between my-12 hover:cursor-pointer">
          <div
              class="relative w-2/5 h-2/5"
              @mouseover="hoverIndex = 0"
              @mouseleave="hoverIndex = -1"
              @click="goToProject('/makenote')"
          >
            <img
                src="../assets/images/projects/makenote/cover.png"
                alt="Cover Image"
                class="w-full h-full object-cover transition-opacity duration-300 ease-in-out glow-effect"
                :class="{ 'opacity-0': hoverIndex === 0 }"
            />
            <img
                src="../assets/images/projects/makenote/coverhover.png"
                alt="Cover Hover Image"
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out
                hover:animate-jump hover:animate-duration-1000"
                :class="{ 'opacity-100': hoverIndex === 0, 'opacity-0': hoverIndex !== 0 }"
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

        <!-- Project 2: Y2K Study-Buddy -->
        <h4 class="font-inter font-semibold tracking-evenTighter text-5xl text-platinum mb-8">y2k study-buddy.</h4>
        <li class="flex flex-row justify-between my-12">
          <div
              class="relative w-2/5 h-2/5"
              @mouseover="hoverIndex = 1"
              @mouseleave="hoverIndex = -1"
          >
            <img
                src="../assets/images/projects/y2k/cover.png"
                alt="Cover Image"
                class="w-full h-full object-cover transition-opacity duration-300 ease-in-out glow-effect"
                :class="{ 'opacity-0': hoverIndex === 1 }"
            />
            <img
                src="../assets/images/projects/y2k/coverhover.png"
                alt="Cover Hover Image"
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out
                hover:animate-jump hover:animate-duration-1000"
                :class="{ 'opacity-100': hoverIndex === 1, 'opacity-0': hoverIndex !== 1 }"
            />
          </div>
          <div class="w-1/2 flex flex-col justify-between">
            <div>
              <h4 class="font-inter font-semibold tracking-evenTighter text-4xl text-platinum max-w-lg break-words">
                composing captive-use <span class="text-dark-pink">GoodNotes</span> templates for 2A CS.
              </h4>
              <p class="font-inter text-lg text-grey tracking-tight leading-tight mt-4">
                Designer @ Personal Project<br/>
                September 2024
              </p>
            </div>
            <p class="font-inter text-lg text-platinum tracking-tight max-w-lg break-words ">
              [Case study coming soon.] Modelling a sustainable, efficient, slate for fast-moving studies.
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
      hoverIndex: -1,
    };
  },
  methods: {
    goToProject(route) {
      this.$router.push(route);
    }
  }
};
</script>