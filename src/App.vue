<template>
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

    <title>Neverland</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

    <!-- Template Main CSS Files -->
    <link href="assets/css/variables.css" rel="stylesheet" />
    <link href="assets/css/main.css" rel="stylesheet" />

    <!-- =======================================================
  * Template Name: ZenBlog - v1.0.0
  * Template URL: https://bootstrapmade.com/zenblog-bootstrap-blog-template/
  * Author: BootstrapMade.com
  * License: https:///bootstrapmade.com/license/
  ======================================================== -->
  </head>
  <body>
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top">
      <div class="container container-xl d-flex align-items-center justify-content-between">
        <a href="/home" class="logo d-flex align-items-center">
          <h1>Neverland</h1>
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="single-post.html">Blog</a></li>
            <li class="dropdown">
              <a href="/home">
                <span>Categories</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li class="dropdown"></li>
                <li><a href="/location/1">Hotels</a></li>
                <li><a href="/location/3">Museums</a></li>
                <li><a href="/location/4">Restaurants</a></li>
                <li><a href="/location/5">Waterparks</a></li>
              </ul>
            </li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </nav>
        <!-- .navbar -->

        <div class="position-relative">
          <!-- <a href="#" class="mx-2"><span class="bi-facebook"></span></a>
          <a href="#" class="mx-2"><span class="bi-twitter"></span></a>
          <a href="#" class="mx-2"><span class="bi-instagram"></span></a>
 -->
          <a href="#" class="mx-2 js-search-open"><span class="bi-search"></span></a>
          <i class="bi bi-list mobile-nav-toggle"></i>

          <!-- ======= Search Form ======= -->
          <div class="search-form-wrap js-search-form-wrap">
            <form action="/locations" class="search-form">
              <span class="icon bi-search"></span>
              <input type="text" placeholder="Search" class="form-control" />
              <button class="btn js-search-close"><span class="bi-x"></span></button>
            </form>
          </div>
          <!-- End Search Form -->
        </div>
      </div>
    </header>
    <!-- End Header -->
    <h1></h1>
    <div class="content">
      <router-view />
    </div>
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer fixed-bottom">
      <div class="container">
        <div class="copyright">
          © Copyright
          <strong><span>Neverland</span></strong>
          . All Rights Reserved
        </div>

        <div class="credits">
          <a>Designed by Anita Bllaca</a>
        </div>
      </div>
    </footer>
  </body>
</template>

<style>
.header {
  padding: 5px;
}

.content {
  padding: 80px;
}
.footer {
  height: 70px;
}
</style>
