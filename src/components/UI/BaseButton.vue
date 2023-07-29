<template>
    <button :class="mode"><slot></slot></button>
</template>
<script>
export default {
  props: ['mode']
}
</script>
<style scoped>
button {
  border: solid 2px #62a5a1;
  background-color: #f5f5f5;
  padding: 8px 0;
  min-width: 311px;
  height: 44px;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  color: #62a5a1;
}
.link {
  background: none;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: #62a5a1;
}
button:hover {
  background-color: #62a5a1;
  color: #f5f5f5;
}
@media (min-width: 920px) {
  button{
    font-size: 19px;
  }
}
</style>