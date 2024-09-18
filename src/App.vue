<template>
  <Navigation />
  <Analytics />
  <div>
    <router-view name="home"></router-view>
    <router-view name="projects"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import { Analytics } from '@vercel/analytics/react';
import { defineComponent } from "vue";

export default defineComponent({
  components: { Navigation, Analytics }
});
</script>
