<template>
    <tr>
        <th colSpan="2">
          <b>{{nutrient}}</b>
        </th>
        <td>
          <b>{{amount}}</b>
        </td>
      </tr>
      <!-- {moreNutrients.map((moreNutrient, index) => ( -->
        
        <tr v-for="(moreNutrient,index) in moreNutrients" :key="index">
          <td class="blank-cell"></td>
          <th>{{moreNutrient.nutrient}}</th>
          <td>
            <b>{{moreNutrient.amount}}</b>
          </td>
        </tr>
</template>
<script>
export default {
    props:['nutrient', 'amount', 'moreNutrients'  ]
}
</script>