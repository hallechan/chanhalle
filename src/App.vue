<template>
  <Navigation/>
  <Home/>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Navigation, Home}
})


</script>
