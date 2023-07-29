<template>
      <section class="hero" id="hero">
      <div class="hero-container">
        <h1>Vegan Halmstad</h1>
        <h2>Best vegan restaurant in town</h2>
      </div>
      <div class="overlay"></div>
      </section>  
</template>

<script></script>
<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  line-height: 44px;
  text-align: center;
  background-image: url("../../assets/images/dishes/lentil-stew.jpeg");
  background-color: var(--color-secondary);
  background-repeat: no-repeat;
  background-size: cover;
  color: #f5f5f5;
}
.overlay {
  position: absolute;
  top: 0;
  background-color:rgba(98, 165, 161, 0.4);
  bottom: 0;
  height: 100%;
  width: 100%;
}
.hero h1 {
  padding: 24px 0;
}
.hero h2 {
 font-weight: normal;
}
.hero-container {
  z-index: 1;
}
@media only screen and (min-width: 920px) {
  .hero-container {
    max-width: 500px;
  }
  .hero{
    height: calc(100vh - 90px);
  }
}

</style>