<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="id"
      @blur="validInput"
      v-model="textValue"
    />
    <p v-if="textValueValidity === 'invalid'">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  props: ["label", "type", "id", "errorMessage", "modelValue"],
  data() {
    return {
      textValue: this.modelValue,
      textValueValidity: "pending",
    };
  },
  methods: {
    validInput() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

      switch (this.type) {
        case "time":
          if (timeRegex.test(this.textValue)) {
            this.textValueValidity = "valid";
          } else {
            this.textValueValidity = "invalid";
          }
          break;
        case "date":
          if (dateRegex.test(this.textValue)) {
            this.textValueValidity = "valid";
          } else {
            this.textValueValidity = "invalid";
          }
          break;
        case "email":
          if (emailRegex.test(this.textValue)) {
            this.textValueValidity = "valid";
          } else {
            this.textValueValidity = "invalid";
          }
          break;
        default:
          if (this.textValue === "") {
            this.textValueValidity = "invalid";
          } else {
            this.textValueValidity = "valid";
          }
      }
    },
  },
};
</script>
<style scoped>
.form-control {
  width: 100%;
}
input {
  display: block;
  margin: 8px 0;
  width: 95%;
  height: 44px;
  border: none;
}
</style>
