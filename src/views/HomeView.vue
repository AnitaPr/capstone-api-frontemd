<template>
  <div class="home">
    <HelloWorld msg="Welcome to Neverland" />
    <h2>{{ "Your Ultimate Giude to Fun" }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  background-image: url("/Users/anitabllaca/Actualize/capstone-api-frontend/src/assets/background image.jpg");
  background-size: cover;
}
</style>
