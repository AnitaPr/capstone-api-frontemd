<template>
  <!-- <div class="home"> -->
  <div id="main">
    <div class="row">
      <div class="col">
        <div id="map"></div>
      </div>
      <div class="col">
        <!-- <div class="searchbar" style="position: relative"> -->
        <div id="sb-search" class="sb-search" style="float: left">
          <form class="example">
            <input type="text" v-model="searchText" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
          <!-- |
          <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
          |
          <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form> -->
        </div>
        <div>
          <!-- <div v-for="place in places" v-bind:key="place.id">
            <h2>{{ place.description }}</h2>
          </div> -->
        </div>
      </div>
    </div>

    <!-- ======= Hero Slider Section ======= -->
    <section id="hero-slider" class="hero-slider">
      <div class="container-md" data-aos="fade-in">
        <div class="row">
          <div class="col-12">
            <div class="swiper sliderFeaturedPosts">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('/assets/img/disney-s-animal-kingdom.jpeg')"
                  >
                    <div class="img-bg-inner">
                      <h2>The Most Rated Kid Friendly Resort in the US</h2>
                      <p>
                        There are so many great Disney hotels in Orlando, which is already one of the best family
                        vacation spots in the U.S. no matter where you choose to stay. But a reservation at Disney’s
                        Animal Kingdom Lodge is extra special because it’ll whisk your entire family away to the
                        continent of Africa, no passport required.
                      </p>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('assets/img/child back cover.jpeg')"
                  >
                    <div class="img-bg-inner">
                      <h2>Tips and Tricks for Traveling with Kids</h2>
                      <p>
                        From wearing masks on board to whether you can schlep your stroller on the plane itself, it’s
                        important to know the rules before you go. (Your Liberty Travel consultant will also know the
                        details.) You’ll save yourself so much stress at the airport. While airlines each have
                        individual rules, you can be sure that an infant carrier and booster seat will be allowed on
                        board for safety purposes
                      </p>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('/assets/img/Road-Trips-with-Kids.jpeg')"
                  >
                    <div class="img-bg-inner">
                      <h2>Best Car Travel Toys for Toddlers</h2>
                      <p></p>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('/assets/img/best museum.png')"
                  >
                    <div class="img-bg-inner">
                      <h2>The 15 Best Children's Museums in the US</h2>
                      <p></p>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('/assets/img/amusement park.jpeg')"
                  >
                    <div class="img-bg-inner">
                      <h2>Toddler-Friendly Theme Parks</h2>
                      <p></p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="custom-swiper-button-next">
                <span class="bi-chevron-right"></span>
              </div>
              <div class="custom-swiper-button-prev">
                <span class="bi-chevron-left"></span>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Slider Section -->

    <!-- ======= Post Grid Section ======= -->
    <section id="posts" class="posts">
      <div class="container" data-aos="fade-up">
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="post-entry-1 lg">
              <a href="single-post.html">
                <img src="/assets/img/disney-s-animal-kingdom.jpeg" alt="" class="img-fluid" />
              </a>
              <div class="post-meta">
                <span class="date"></span>
                <span class="mx-2">&bullet;</span>
                <span>Jul 5th '22</span>
              </div>
              <h2><a href="">The Most Rated Kid Friendly Resort in the US</a></h2>
              <p class="mb-4 d-block">
                There are so many great Disney hotels in Orlando, which is already one of the best family vacation spots
                in the U.S. no matter where you choose to stay. But a reservation at Disney’s Animal Kingdom Lodge is
                extra special because it’ll whisk your entire family away to the continent of Africa, no passport
                required.
              </p>

              <div class="d-flex align-items-center author">
                <div class="photo"><img src="" alt="" class="img-fluid" /></div>
                <div class="name">
                  <h3 class="m-0 p-0"></h3>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="row g-5">
              <div class="col-lg-4 border-start custom-border">
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="assets/img/child back cover.jpeg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date"></span>
                    <span class="mx-1">&bullet;</span>
                    <span>Jul 5th '22</span>
                  </div>
                  <h2><a href="single-post.html">Tips and Tricks for Traveling with Kids</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="/assets/img/Road-Trips-with-Kids.jpeg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date"></span>
                    <span class="mx-1">&bullet;</span>
                    <span>Jul 17th '22</span>
                  </div>
                  <h2>
                    <a href="single-post.html">Best Car Travel Toys for Toddlers</a>
                  </h2>
                </div>
              </div>
              <div class="col-lg-4 border-start custom-border">
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="/assets/img/best museum.png" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date"></span>
                    <span class="mx-1">&bullet;</span>
                    <span>Jul 5th '22</span>
                  </div>
                  <h2><a href="single-post.html">The 15 Best Children's Museums in the US</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="/assets/img/amusement park.jpeg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date"></span>
                    <span class="mx-1">&bullet;</span>
                    <span>Mar 1st '22</span>
                  </div>
                  <h2><a href="single-post.html">Toddler-Friendly Theme Parks</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End .row -->
    </section>
    <!-- End Post Grid Section -->
  </div>
  <!-- End #main -->
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
/* global mapboxgl */
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "axios";

export default {
  name: "HomeView",

  data: function () {
    return {
      places: [],
      locations: [],
      searchText: "",
    };
  },
  watch: {
    searchText(val) {
      console.log(val);
      if (val == "") {
        this.getPlaces();
      } else {
        this.places = this.places.filter((place) => {
          var lowercaseTitle = place.description.toLowerCase();
          var lowercaseSearchText = this.searchText.toLowerCase();
          return lowercaseTitle.includes(lowercaseSearchText);
        });
      }
      this.setMap();
    },
  },
  mounted: function () {
    this.getPlaces();
    this.indexLocations();
  },
  methods: {
    filterLocations() {
      return this.locations.filter((location) => {
        var lowercaseName = location.name.toLowerCase();
        var lowercaseSearchText = this.searchText.toLowerCase();
        return lowercaseName.includes(lowercaseSearchText);
      });
    },
    indexLocations: function () {
      axios.get("/locations").then((response) => {
        this.locations = response.data;
        console.log(this.locations);
      });
    },
    getPlaces() {
      axios.get("/map").then((response) => {
        var data = response.data.data;
        // loop through the returned places to create the map markers! Create a NEW ARRAY that is specific to the mapbox api
        data.forEach((place) => {
          this.places.push({
            lat: place.geoCode.latitude,
            lng: place.geoCode.longitude,
            description: place.name,
            type: place.category.toLowerCase(),
          });
        });
        this.setMap();
      });
    },
    setMap() {
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [this.places[0].lng, this.places[0].lat], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      this.places.forEach((place) => {
        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);

        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
        console.log(map, marker1);
      });
      // Add the control to the map.
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  height: 500px;
  width: 800px;
}
#marker {
  background-image: url("");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  max-width: 200px;
}
 {
  box-sizing: border-box;
}

/* Style the search field */
form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 50%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 10%;
  padding: 10px;
  background: #008000;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
