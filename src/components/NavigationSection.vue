<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: { MenuIcon, XIcon },
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isHidden = !this.isHidden;
    },
  },
});
</script>
<template>
  <nav id="navigation" class="col-span-4">
    <div
      class="md:hidden mt-4 px-4 cursor-pointer"
      id="burger"
      @click="toggleMenu()"
    >
      <!-- burger icon -->
      <MenuIcon
        class="h-6 w-6 transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        :class="{ hidden: !isHidden }"
      />

      <!-- close icon -->
      <XIcon
        class="h-6 w-6 transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        :class="{ hidden: isHidden }"
      />
    </div>
    <ul
      class="md:flex justify-center mt-2"
      id="menu"
      :class="{ hidden: isHidden }"
    >
      <li
        class="mx-3 py-3 text-center border-0 border-slate-100 hover:bg-slate-100 hover:text-slate-800 rounded-full shadow-sm shadow-black"
      >
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li
        class="mx-3 py-3 text-center border-0 border-slate-100 hover:bg-slate-100 hover:text-slate-800 rounded-full shadow-sm shadow-black"
      >
        <RouterLink to="/what-i-do">What I've worked on</RouterLink>
      </li>
      <li
        class="mx-3 py-3 text-center border-0 border-slate-100 hover:bg-slate-100 hover:text-slate-800 rounded-full shadow-sm shadow-black"
      >
        <RouterLink to="/what-i-do-for-fun">What I do for fun</RouterLink>
      </li>
      <li
        class="mx-3 py-3 text-center border-0 border-slate-100 hover:bg-slate-100 hover:text-slate-800 rounded-full shadow-sm shadow-black"
      >
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>
