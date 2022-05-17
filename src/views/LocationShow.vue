<script>
import axios from "axios";
export default {
  data: function () {
    return {
      location: {},
    };
  },
  created: function () {
    axios.get(`/locations/${this.location.type_id}`).then((response) => {
      console.log(response);
      this.location = response.data;
    });
  },
  methods: {
    destroyLocation() {
      axios.delete(`/locations/${this.location.type_id}`).then((response) => {
        console.log(response);
        this.$router.push("/location");
      });
    },
  },
};
</script>

<template>
  <div class="location-show">
    <h1>Location Info</h1>
    <h2>{{ location.name }}</h2>
    <p>{{ location.description }}</p>
    <p>{{ location.city }}</p>
    <p>{{ location.state }}</p>
    <router-link to="/locations">Back to all locations</router-link>
    <router-link v-bind:to="`/locations/${location.id}/edit`">Edit Location</router-link>
    <button v-on:click="destroyLocation()">Delete</button>
  </div>
</template>
