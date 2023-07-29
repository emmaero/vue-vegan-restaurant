<template>
  <nav class="nav-bar">
    <div class="logo">
      <router-link to="/">
        <img alt="Vegan Halmstad" src="../../assets/logos/logoMain.png" />
      </router-link>
    </div>
    <ul class="nav-router-links">
      <li>
        <router-link to="/dishes"> Dishes </router-link>
      </li>
      <li>
        <router-link to="/deserts"> Deserts </router-link>
      </li>
      <li>
        <router-link to="/drinks"> Drinks </router-link>
      </li>
      <li>
        <router-link to="/contact"> Contact us </router-link>
      </li>
    </ul>
    <button class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </button>
  </nav>
</template>
<script>

export default {


};
</script>
<style scoped>
.logo {
  height: 90px;
}
.logo img {
  height: 100%;
  margin-left: 8px;
}
a {
  text-decoration: none;
  color: #f5f5f5;
}
.nav-bar {
  font-size: 18px;
  background-color: #62a5a1;
  height: 48px;
  display: flex;
  color: #f5f5f5;
  align-items: center;
  z-index: 10;
  position: relative;
}
.nav-links li {
  list-style: none;
  text-align: center;
  margin: auto;
  opacity: 0;
}
.nav-bar li a {
  list-style: none;
  text-decoration: none;
  font-weight: bold;
}
.nav-links {
  height: 92vh;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  transform: translateX(100%);
  transition: transform 0.5s ease-in;
  background-color: #62a5a1;
  z-index: 10;
}
.nav-active {
  transform: translateX(0%);
  top: 48px;
}
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.burger {
  margin-left: auto;
  cursor: pointer;
  background: none;
  border: none;
}
.burger div {
  width: 30px;
  margin: 5px;
  background-color: #f5f5f5;
  height: 3px;
  transition: all 0.5s ease;
}
.cross .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.cross .line2 {
  opacity: 0;
}
.cross .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media screen and (min-width: 920px) {
  .burger {
    display: none;
  }

  .nav-bar {
    height: 90px;
    justify-content: space-between;
  }
  .nav-links {
    height: inherit;
    max-width: 611px;
    transform: translatex(0%);
    flex-direction: row;
    top: 0;
  }
  .nav-bar li {
    list-style: none;
    min-width: 144px;
    border-bottom: none;
    text-align: center;
    height: 100%;
    padding: 0px;
    margin: auto;
    opacity: 1;
  }
  .nav-bar li {
    display: flex;
    list-style: none;
    text-decoration: none;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  nav ul {
    position: relative;
    top: initial;
    display: flex;
    align-items: center;
  }
  .nav-links li:hover {
    background-color: #f5f5f5;
    color: #62a5a1 !important;
  }
}
</style>
