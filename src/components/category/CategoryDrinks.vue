<template>
<category-page
:name="drinks.name"
:description="drinks.description"
:products="drinks.products"
:image="drinks.categoryImage"
:id="drinks.id"> 
</category-page>
</template>
<script>
import drinks from '../../data/drinks.json';
import CategoryPage from './CategoryPage.vue'

export default {
    components: {
        CategoryPage
    },
    data() {
    return {
     drinks:drinks,
    };
  },  
}
</script>