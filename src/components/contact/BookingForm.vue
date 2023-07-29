<template>
  <form>
    <text-input
      id="full-name"
      errorMessage="Please enter full name"
      label="Full name"
      type="text"
      v-model="name"
    ></text-input>
 
    <text-input
      id="email"
      errorMessage="invalid email"
      label="Email"
      type="email"
      v-model="email"
    ></text-input>

    <text-input
      id="date"
      errorMessage="Invalid date format. Please use YYYY-MM-DD."
      label="Date"
      type="date"
      v-model="date"
    ></text-input>

    <text-input
      id="time"
      errorMessage="Invalid time format. Please use HH:mm (24-hour) format."
      label="Time"
      type="time"
      v-model="time"
    ></text-input>
    <base-button>Submit</base-button>
  </form>
</template>
<script>
import TextInput from "../UI/TextInput.vue";
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: {
    TextInput,
    BaseButton,
  },
  data() {
    return {
      name: "",
      email: "",
      date: "",
      time: "",
    };
  },
};
</script>
<style scoped>
form {
  width: 100%;
}
</style>
