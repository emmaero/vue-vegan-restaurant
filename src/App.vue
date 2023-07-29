<template>
  <the-nav></the-nav>
<router-view></router-view>
<the-footer></the-footer>

</template>

<script>
import TheNav from './components/layouts/TheNav.vue'
import TheFooter from './components/layouts/TheFooter.vue';

export default {

  components: {
    TheNav,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  overflow-x: hidden;
}
body {
  background-color: #f5f5f5;;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  width: 100%;
}
.img {
  max-width: 100%;
}
.container-inner {
  width: 100%;
}
@media (min-width: 920px) {
  .container-inner {
    width: 80%;
  }
}

#App {
  font-family: 'Roboto', sans-serif;
  width: 100%;
}
html {
  scroll-behavior: smooth;
}

.row {
  max-width: 1120px;
  padding: 16px;
  width: 100%;
  margin: auto;
}
h1 {
  font-size: 34px;
}

h2 {
  font-size: 22px;
}
h3 {
  font-size: 17px;

  margin: 0;
}
@media (min-width: 920px) {
  h1 {
    font-size: 64px;
  }
  h2 {
    font-size: 42px;
  }
}
</style>
