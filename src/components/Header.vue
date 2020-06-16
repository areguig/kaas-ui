<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="android-icon-192x192.png" width="28" height="28" />
        Karate As A Service
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="https://intuit.github.io/karate/" target="_blank">Documentation</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <!--<div class="buttons">
            <a class="button is-light">
              <strong>Share</strong>
            </a>
          </div>-->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>