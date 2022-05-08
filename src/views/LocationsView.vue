<!-- <template>
  <div class="locations">
    <h1>This is an about page</h1>
  </div>
</template> -->

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      locations: [],
      currentLocation: {},
    };
  },
  created: function () {
    this.indexLocations();
  },
  methods: {
    indexLocations: function () {
      axios.get("/locations").then((response) => {
        console.log(response);
        this.locations = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home-row">
      <h1>All Locations</h1>
      <div
        class="col"
        v-bind:class="{ selected: location === currentLocation }"
        v-for="location in locations"
        v-bind:key="location.id"
        v-on:click="currentLocation = location"
      ></div>
      <div class="col" v-for="location in locations" v-bind:key="location.id">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">{{ location.name }}</h2>
            <p class="card-description">{{ location.description }}</p>
            <p>{{ location.city }}</p>
            <p>{{ location.state }}</p>
            <a v-bind:href="`/locations/${location.id}`" class="btn btn-primary">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
