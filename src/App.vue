<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Footer from "@/components/FooterSection.vue";
</script>

<template>
  <div id="navigation" class="col-span-4 flex justify-center align-middle">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/what-i-do">What I've worked on</RouterLink>
    <RouterLink to="/what-i-do-for-fun">What I do for fun</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>

  <RouterView />
  <Footer />
</template>

<style>
@import url("./assets/base.css");
</style>
