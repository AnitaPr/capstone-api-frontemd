<script>
import axios from "axios";
export default {
  data: function () {
    return {
      locations: [],
      ratings: [],
    };
  },
  created: function () {
    this.locationType();
    // this.locationRating();
  },
  methods: {
    locationType: function () {
      console.log(this.$route.params);
      let type_id = this.$route.params.type_id;
      axios.get(`/location/${type_id}`).then((response) => {
        console.log(response);
        this.locations = response.data;
      });
    },
  },
  // locationRating: function () {
  //   console.log(this.$route.params);
  //   let rating_id = this.$route.params.rating_id;
  //   axios.get(`/location/${rating_id}`).then((response) => {
  //     console.log(response);
  //     this.locations = response.data;
  //   });
  // },
};
</script>

<template>
  <!-- <div v-for="location in locations" v-bind:key="location.id">
    <h1>{{ location }}</h1>
  </div> -->
  <div class="row">
    <div class="col">
      <h1>All Locations</h1>
      <div
        class="col"
        v-bind:class="{ selected: location === currentLocation }"
        v-for="location in locations"
        v-bind:key="location.id"
        v-on:click="currentLocation = location"
      ></div>
      <div class="col" v-for="location in locations" v-bind:key="location.id">
        <!-- <div class="col" v-for="rating in ratings" v-bind:key="rating.id"> -->
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h2 class="card-title">{{ location.name }}</h2>
            <img v-bind:src="location.image" class="card-img-top" />
            <p class="card-description">{{ location.description }}</p>
            <p>{{ location.city }}</p>
            <p>{{ location.state }}</p>
            <!-- <p>{{ rating.id }}</p> -->
            <a v-bind:href="`/locations/${location.id}`" class="btn btn-primary">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
}
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
.col {
  float: left;
  width: 25%;
  padding: 0 10px;
}
</style>
