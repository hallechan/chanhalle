<template>
  <div class="bg-coal">
    <div class="flex flex-col items-center">
      <i class="w-9/12 my-16 font-inter tracking-evenTighter text-xl
        text-platinum opacity-50 mb-8">click on the projects for details! ♡ ～('▽^人)</i>
      <ul class="mb-32 mt-16 w-9/12">

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

        <!-- Project 2: maeve, a digital closet -->
        <h4 class="font-inter font-semibold tracking-evenTighter text-5xl text-platinum mb-8">wear things, nowhere.</h4>
        <li class="flex flex-row justify-between my-12 hover:cursor-pointer">
          <a
              class="relative w-2/5 h-2/5"
              @mouseover="hoverIndex = 1"
              @mouseleave="hoverIndex = -1"
              href="https://devpost.com/software/maeve-a-digital-closet"
              target="_blank"
          >
            <img
                src="../assets/images/projects/maeve/cover.png"
                alt="Cover Image"
                class="w-full h-full object-cover transition-opacity duration-300 ease-in-out glow-effect"
                :class="{ 'opacity-0': hoverIndex === 1 }"
            />
            <img
                src="../assets/images/projects/maeve/coverhover.png"
                alt="Cover Hover Image"
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out
                hover:animate-jump hover:animate-duration-1000"
                :class="{ 'opacity-100': hoverIndex === 1, 'opacity-0': hoverIndex !== 1 }"
            />
          </a>
          <div class="w-1/2 flex flex-col justify-between">
            <div>
              <h4 class="font-inter font-semibold tracking-evenTighter text-4xl text-platinum max-w-lg break-words">
                devising <span class="text-dark-pink">maeve, a digital closet</span>.
              </h4>
              <p class="font-inter text-lg text-grey tracking-tight leading-tight mt-4">
                TechNova Hackathon 2024<BR/> <i class="opacity-75">2nd Place Overall + Best Use of Streamlit</i><br/>
                September 2024
              </p>
            </div>
            <p class="font-inter text-lg text-platinum tracking-tight max-w-lg break-words ">
              Realizing a computer vision-based, artificial intelligence-powered virtual closet for a more sustainable future.
            </p>
          </div>
        </li>

        <!-- Project 3: pitta-patta -->
        <h4 class="font-inter font-semibold tracking-evenTighter text-5xl text-platinum mb-8">polyglot for perilled patois.</h4>
        <li class="flex flex-row justify-between my-12 hover:cursor-pointer">
          <a
              class="relative w-2/5 h-2/5"
              @mouseover="hoverIndex = 2"
              @mouseleave="hoverIndex = -1"
              href="https://devpost.com/software/pitta-patta"
              target="_blank"
          >
            <img
                src="../assets/images/projects/pittapatta/cover.png"
                alt="Cover Image"
                class="w-full h-full object-cover transition-opacity duration-300 ease-in-out glow-effect"
                :class="{ 'opacity-0': hoverIndex === 2 }"
            />
            <img
                src="../assets/images/projects/pittapatta/coverhover.png"
                alt="Cover Hover Image"
                class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out
                hover:animate-jump hover:animate-duration-1000"
                :class="{ 'opacity-100': hoverIndex === 2, 'opacity-0': hoverIndex !== 2 }"
            />
          </a>
          <div class="w-1/2 flex flex-col justify-between">
            <div>
              <h4 class="font-inter font-semibold tracking-evenTighter text-4xl text-platinum max-w-lg break-words">
                harnessing nlps thru <span class="text-dark-pink">pitta-patta</span> to fortify endangered dialects.
              </h4>
              <p class="font-inter text-lg text-grey tracking-tight leading-tight mt-4">
                Hack the Valley 9 2024<BR/> <i class="opacity-75">Best Diversity Hack + Best Use of Streamlit</i><br/>
                October 2024
              </p>
            </div>
            <p class="font-inter text-lg text-platinum tracking-tight max-w-lg break-words ">
              Playing with natural language processing to produce real-time translations for English-based dialects.
            </p>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  data() {
    return {
      hoverIndex: -1,
    };
  },
  methods: {
    goToProject(route: RouteLocationRaw) {
      this.$router.push(route);
    },
  }
});
</script>