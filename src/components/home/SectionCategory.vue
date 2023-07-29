<template>
    
    <section class="category-section">
      <img
        :src="sectionImageUrl"
        alt="vegan halmstad"
      />
      <div class="section-description">
        <div class="container-inner">
          <h2>{{name}}</h2>
          <p>{{description}}</p>

          <router-link :to=categoryLink>
            <base-button class="button-main">View menu</base-button>
          </router-link>
        </div>
      </div>
    </section>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
    components: {
        BaseButton
    },
    props: ['id', 'name', 'category', 'image', 'description'],
    computed: {
        sectionImageUrl() {
            return require(`@/assets/images/category${this.image}`);
        },
    categoryLink() {
      return `@/${this.name}`;

    },
    }
}
</script>
<style>
.home-category{
  padding: 8px;
}
.category-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: auto;
  align-items: center;
}
.category-section > img {
  width: 95%;
}
.section-description {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-description button {
  margin: 16px 0;
  max-width: 350px;
}
@media only screen and (min-width: 620px) {
  .category-section > img {
    max-width: 50%;
  }
  .category-section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .category-section:nth-child(even) {
    flex-direction: row-reverse;
  }
  .category-section:nth-child(even) .section-description {
    align-items: flex-start;
    padding: 0;
  }
  .category-section > * {
    width: 50%;
  }
}

@media only screen and (min-width: 1124px) {
  .category-section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .category-section:nth-child(even) {
    flex-direction: row-reverse;
  }
  .category-section:nth-child(even) .section-description {
    align-items: flex-start;
    padding: 0;
  }
  .category-section > * {
    width: 50%;
  }
}


</style>