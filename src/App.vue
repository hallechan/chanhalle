<template>
  <Navigation />
  <div>
    <router-view name="home"></router-view>
    <router-view name="projects"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Navigation }
});
</script>
