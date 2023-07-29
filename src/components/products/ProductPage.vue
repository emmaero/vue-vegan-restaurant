<template>
      <div class="container">
      <div class="page-image">
        <img
          :src="productImage"
          alt="vegan"
        />
      </div>
      <div class="page-details">
        <h2>{{product.name}}</h2>
        <p>{{product.description}}</p>
        <h2>Ingredients</h2>
      <span v-for="(item, index) in product.ingredients" :key="index">{{ item }}</span>
      <nutrition-fact :nutrients="product.nutrients"></nutrition-fact>
        <base-button >
          Go back
        </base-button>
      </div>
    </div>
</template>

<script>
import drinks from "../../data/drinks.json";
import dishes from "../../data/dishes.json";
import deserts from "../../data/deserts.json";
import BaseButton from "../UI/BaseButton.vue";
import NutritionFact from "./NutritionFact.vue";
export default {
    components: {
        BaseButton, 
       NutritionFact
    },
  data() {
    return {
      product: null,
      category: null,
      categories: [{ ...drinks }, { ...dishes }, { ...deserts }],
    };
  },
  beforeRouteUpdate(to, from, next) {
    // Fetch and load data based on the new route's type parameter
    alert("yeaH!!");
    this.loadData(to.params.catId, to.params.productId);
    next();
    },
    computed: {
        productImage() {
            return require(`@/assets/images${this.product.imageUrl}`);
        },
    },
  methods: {
    loadData(catId, productId) {
          this.category = this.categories.find((x) => x.id === catId);
       
      this.product = this.category.products.find((p) => p.id == productId);
    },
  },
  watch: {
    "$route.params.type": "loadData",
  },
  created() {
    // Initial load of data based on the current route's type parameter

    this.loadData(this.$route.params.catId, this.$route.params.productId);
  },
};
</script>
<style>
.page-image {
  width: 95%;
  max-width: 1327px;
  margin: auto;
  padding: 16px;
}
.page-image img {
  width: 100%;
  object-fit: cover;
  max-height: 600px;
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