<template>
    <li>
      <div class="product-card">
        <img :src="productImage" alt="" />
        <div>
          <div class="product-card-info">
            <h3>{{ name }}</h3>
            <p>{{highlight}}</p>
          </div>
          <div class="view-page">
            <router-link :to="productLink">
              <base-button mode="link">View page</base-button>
            </router-link>
          </div>
        </div>
      </div>
    </li>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    props:['id','name','highlight','image','categoryId','category'],
    computed: {
        productImage() {
            return require(`@/assets/images${this.image}`);
        },
        productLink() {
            return {
                name: this.category,
                params:{catId:this.categoryId, productId: this.id}
            };
        }, 
    },

}
</script>
<style scoped>
.product-card {
  display: flex;
  list-style: none;
  flex-direction: row;
  max-height: 88px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  box-shadow: 1px 2px  #62a5a1;
}
.product-list img {
  max-height: 88px;
}
.product-card-info {
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 67px;
}
.product-list li {
  padding: 16px 0;
}
.product-list p {
  text-overflow: ellipsis;
}
.product-card > div {
  padding-left: 16px;
}
.view-page {
  width: 100%;
}
.view-page a {
  position: relative;
}
@media only screen and (min-width: 920px) {
  .product-list img,
  .product-card {
    max-height: 160px;
  }
  .product-card-info {
    max-height: 100px;
  }
  .product-card div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

}
</style>