<template>
<category-page
:name="deserts.name"
:description="deserts.description"
:products="deserts.products"
:image="deserts.categoryImage"
:id="deserts.id"> 
</category-page>
</template>
<script>
import deserts from '../../data/deserts.json';
import CategoryPage from './CategoryPage.vue'

export default {
    components: {
        CategoryPage
    },
    data() {
    return {
     deserts:deserts,
    };
  },  
}
</script>