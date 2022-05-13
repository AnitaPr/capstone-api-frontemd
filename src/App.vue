<template>
  <nav id="navbar" class="navbar">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/locations">Locations</a></li>
      <li class="dropdown">
        <a href="/location-types">
          <span>Location Categories</span>
          <i class="bi bi-chevron-down dropdown-indicator"></i>
        </a>
        <ul>
          <li><a href="search-result.html">Search Result</a></li>
          <li><a href="#">Drop Down 1</a></li>
          <li class="dropdown">
            <a href="#">
              <span>Deep Drop Down</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i>
            </a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li>

      <li><a href="/home">Home</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/home" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>Neverland</h1>
      </a>

      <div class="position-relative">
        <!-- <a href="#" class="mx-2"><span class="bi-facebook"></span></a>
        <a href="#" class="mx-2"><span class="bi-twitter"></span></a>
        <a href="#" class="mx-2"><span class="bi-instagram"></span></a> -->

        <a href="#" class="mx-2 js-search-open"><span class="bi-search"></span></a>
        <i class="bi bi-list mobile-nav-toggle"></i>

        <!-- ======= Search Form ======= -->
        <div class="search-form-wrap js-search-form-wrap">
          <form action="/location-types" class="search-form">
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

  <router-view />
  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="row g-1">
          <div class="col-lg-2">
            <h3 class="footer-heading">Neverland</h3>
            <p>This is my first project</p>
            <p><a href="about.html" class="footer-link-more"></a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div class="copyright">
              © Copyright
              <strong><span>Neverland</span></strong>
              . All Rights Reserved
            </div>

            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
              Designed by
              <a href="">Anita Bllaca</a>
            </div>
          </div>

          <div class="col-md-6">
            <div class="social-links mb-3 mb-lg-0 text-center text-md-end">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
