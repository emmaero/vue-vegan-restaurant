<template>
  <div class="container">
    <div class="category-header">
      <h1>{{ name }}</h1>
      <div class="overlay"></div>
      <img :src="imageUrl" alt="vegan" />
    </div>
    <div class="category-page-detail row">
      <p>{{ description }}</p>
      <ul class="product-list row">
        <product-card v-for="product in products"
        :id="product.id"
        :key="product.id"
        :name="product.name"
        :image="product.imageUrl"
        :highlight="product.highlight"
        :categoryId="id"
        :category="name"
        ></product-card>
      </ul>
    </div>
  </div>
</template>
<script>
import ProductCard from '../products/ProductCard.vue';
export default {
  components: {
   ProductCard 
  },
  props: ["id","name", "description", "image", "products"],

  computed: {
    imageUrl() {
      return require(`@/assets/images/category${this.image}`);
    },
  },
};
</script>
<style scoped>
.category-header {
  display: flex;
  min-height: 283px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
}
.category-header .overlay {
  z-index: 1;
}
.category-header h1 {
  color: #f5f5f5;
  z-index: 2;
}
.category-header img {
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.product-list {
  list-style: none;
}

@media only screen and (min-width: 920px) {
  .category-header {
    min-height: 500px;
    max-height: 80%;
  }
  .product-card-info {
    max-height: 80%;
  }
}
.page-details {
  width: 95%;
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  align-items: center;
}
.page-details h2 {
  padding: 8px 0;
}
.page-details .button-main {
  margin: auto;
}
@media only screen and (min-width: 768px) {
  .page-details h2 {
    padding: 16px 0;
  }
}
</style>
