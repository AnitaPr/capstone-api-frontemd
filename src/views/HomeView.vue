<template>
  <!-- <div class="home"> -->
  <h2>{{ "Your Ultimate Guide to Fun" }}</h2>
  <div id="main">
    <div id="map"></div>
    <!-- <div>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text purple lighten-3" id="basic-text1">
            <mdbIcon icon="search" />
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text cyan lighten-2" id="basic-text1">
            <mdbIcon icon="search" />
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text pink lighten-3" id="basic-text1">
            <mdbIcon icon="search" />
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </div> -->

    <!-- ======= Hero Slider Section ======= -->
    <section id="hero-slider" class="hero-slider">
      <div class="container-md" data-aos="fade-in">
        <div class="row">
          <div class="col-12">
            <div class="swiper sliderFeaturedPosts">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="/single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('src/assets/img/resorts.jpg')"
                  >
                    <div class="img-bg-inner">
                      <h2>Resorts</h2>
                      <p>A vacation to remember</p>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href="single-post.html"
                    class="img-bg d-flex align-items-end"
                    style="background-image: url('assets/img/best resort.jpeg')"
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
                    style="background-image: url('assets/img/post-slide-4.jpg')"
                  >
                    <div class="img-bg-inner">
                      <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae
                        minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore
                        repudiandae quidem necessitatibus rem atque.
                      </p>
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
              <a href="single-post.html"><img src="/assets/img/best resort.jpeg" alt="" class="img-fluid" /></a>
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
                <div class="photo"><img src="/assets/img/best resort.jpeg" alt="" class="img-fluid" /></div>
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
                    <img src="assets/img/post-landscape-5.jpg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date">Food</span>
                    <span class="mx-1">&bullet;</span>
                    <span>Jul 17th '22</span>
                  </div>
                  <h2>
                    <a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a>
                  </h2>
                </div>
              </div>
              <div class="col-lg-4 border-start custom-border">
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="assets/img/post-landscape-3.jpg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date">Business</span>
                    <span class="mx-1">&bullet;</span>
                    <span>Jul 5th '22</span>
                  </div>
                  <h2><a href="single-post.html">6 Easy Steps To Create Your Own Cute Merch For Instagram</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="single-post.html">
                    <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date">Tech</span>
                    <span class="mx-1">&bullet;</span>
                    <span>Mar 1st '22</span>
                  </div>
                  <h2><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
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
// import mdbIcon from "mdbvue";

export default {
  name: "HomeView",
  // components: {
  //   mdbIcon,

  data: function () {
    return {
      places: [],
    };
  },
  mounted: function () {
    this.getPlaces();
  },
  methods: {
    getPlaces() {
      // make axios
      this.places = [
        { lat: 40.73061, lng: -73.935242, description: "A place in USA" },
        { lat: 40.73061, lng: -73.935242, description: "The main city!" },
      ];
      this.setMap();
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
        const popup = new mapboxgl.Popup({ offset: 25 }).setText("American Museum of Natural History");

        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
        console.log(map, marker1);
      });
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
.input-group.md-form.form-sm.form-1 input {
  border: 1px solid #bdbdbd;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
