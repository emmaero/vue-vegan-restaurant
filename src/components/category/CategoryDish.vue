<template>
<category-page
:name="dishes.name"
:description="dishes.description"
:products="dishes.products"
:image="dishes.categoryImage"
:id="dishes.id"> 
</category-page>
</template>
<script>
import dishes from '../../data/dishes.json';
import CategoryPage from './CategoryPage.vue'

export default {
    components: {
        CategoryPage
    },
    data() {
    return {
     dishes:dishes,
    };
  },  
}
</script>