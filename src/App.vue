<template>
  <Navigation/>
  <MenuButton/>
  <Home/>
  <Projects/>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import {defineComponent} from "vue";
import MenuButton from "./components/MenuButton.vue";
import Projects from "./components/Projects.vue";

export default defineComponent({
  components: {Projects, MenuButton, Navigation, Home}
})


</script>
