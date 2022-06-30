<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/FooterSection.vue";
import Navigation from "./components/NavigationSection.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Footer,
    Navigation
  },
});
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer />
</template>

<style>
@import url("./assets/base.css");
</style>
