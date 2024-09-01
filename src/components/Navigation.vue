<template>
  <div class="flex flex-col items-center mt-4">
    <ul class="flex flex-row items-center justify-between font-inter font-medium text-xl tracking-tightest w-64">
      <li>
        <a :class="{'text-dark-pink': route.path === '/'}" class="hover:text-grey" href="/">home</a>
      </li>
      <li>
        <a :class="{'text-dark-pink': route.path === '/abt'}" class="hover:text-grey" href="/abt">about</a>
      </li>
      <li>
        <a :class="{'text-dark-pink': route.path === '/cv'}" class="hover:text-grey" href="/cv">cv</a>
      </li>
    </ul>
    <img class="size-1/6 mt-16" src="../assets/images/topheart.png" alt=""/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>