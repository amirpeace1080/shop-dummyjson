<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: none;
}
</style>