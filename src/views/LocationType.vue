<script>
import axios from "axios";
export default {
  data: function () {
    return {
      locations: [],
    };
  },
  created: function () {
    this.locationType();
  },
  methods: {
    locationType: function () {
      console.log(this.$route.params);
      let type_id = this.$route.params.type_id;
      axios.get(`/location/${type_id}`).then((response) => {
        console.log(response.data);
        this.locations = response.data;
      });
    },
    createRating: function (location, rating) {
      let user_rating = {
        location_id: location.id,
        rating: rating,
      };

      axios.post("/ratings", user_rating).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col">
      <meta charset="UTF-8" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <title>Star rating using pure CSS</title>
      <h1>All Locations</h1>
      <div
        class="col"
        v-bind:class="{ selected: location === currentLocation }"
        v-for="location in locations"
        v-bind:key="location.id"
        v-on:click="currentLocation = location"
      ></div>
      <div class="col" v-for="location in locations" v-bind:key="location.id">
        <div class="card" style="width: 20rem">
          <div class="card-body">
            <h2 class="card-title">{{ location.name }}</h2>
            <img v-bind:src="location.image" class="card-img-top" />
            <p>{{ location.city }}, {{ location.state }}</p>
            <div v-for="rating in location.ratings" v-bind:key="rating.id">User Rating: {{ rating.rating }}</div>
            <div class="rate">
              <input v-on:click="createRating(location, 5)" type="radio" id="star5" name="rate" value="5" />
              <label for="star5" title="text">5 stars</label>
              <input v-on:click="createRating(location, 4)" type="radio" id="star4" name="rate" value="4" />
              <label for="star4" title="text">4 stars</label>
              <input v-on:click="createRating(location, 3)" type="radio" id="star3" name="rate" value="3" />
              <label for="star3" title="text">3 stars</label>
              <input v-on:click="createRating(location, 2)" type="radio" id="star2" name="rate" value="2" />
              <label for="star2" title="text">2 stars</label>
              <input v-on:click="createRating(location, 1)" type="radio" id="star1" name="rate" value="1" />
              <label for="star1" title="text">1 star</label>
            </div>
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
 {
  margin: 0;
  padding: 0;
}
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
</style>
