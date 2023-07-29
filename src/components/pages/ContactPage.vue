<template>
  <div class="container">
    <div class="page-image">
      <img :src="require(`@/assets/images/contact/owner.jpg`)" alt="coffee" />
    </div>
    <div class="page-details">
      <h2>Opening times</h2>
      <booking-time></booking-time>
      <h2>Booking table</h2>
      <booking-form></booking-form>
      <h2>Address</h2>
      <booking-address></booking-address>
      <div class="map-section">
        <img :src="require(`@/assets/images/map.png`)" alt="map" />
      </div>
    </div>
  </div>
</template>
<script>
import BookingForm from "../contact/BookingForm.vue";
import BookingAddress from "../contact/BookingAddress.vue";
import BookingTime from "../contact/BookingTime.vue";
export default {
  components: {
    BookingForm,
    BookingAddress,
    BookingTime,
  },
};
</script>
<style>
.map-section {
  display: flex;
  height: 273px;
  width: 100%;
  justify-content: center;
}
.map-section img {
  height: 100%;
  object-fit: cover;
  margin: auto;
}
@media (min-width: 920px) {
  .map-section {
    height: 560px;
  }
}
</style>
