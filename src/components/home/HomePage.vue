<template>
<hero-section></hero-section>
<section-category v-for="cat in categories" 
:category="cat"
:key="cat.id"
:description="cat.description"
:name="cat.name"
:image="cat.categoryImage"></section-category>
</template>
<script>
import HeroSection from './HeroSection.vue'
import SectionCategory from './SectionCategory.vue';
import drinks from '../../data/drinks.json';
import dishes from '../../data/dishes.json';
import deserts from '../../data/deserts.json';
export default {
    data() {
        return {
            categories:[dishes,drinks,deserts]
        }
    },
    components:{
        HeroSection,
        SectionCategory
    },
    provide() {
        return {
        categoryList: this.categories
    }
}

}
</script>