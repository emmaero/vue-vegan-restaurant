<template>
  <div class="nutrition-facts">
    <div class="nutrition-facts__header">
      <h1 class="nutrition-facts__title">Nutrition Facts</h1>
    </div>
    <table class="nutrition-facts__table">
      <thead>
        <tr>
          <th colSpan="3" class="small-info">Amount Per Serving</th>
        </tr>
      </thead>
      <tbody>
        <calories-row />
        <!--      {nutrients.map((item, index) => (
            <NutritionRow key={index} item={item} />
          ))} -->
          <nutrition-row v-for="(item, index) in nutrients" :key="index" 
          :nutrient="item.nutrient"
          :amount="item.amount"
          :moreNutrients="item.moreNutrients"></nutrition-row>
        <tr class="thick-end">
          <th colSpan="2">
            <b>Protein</b>
            3g
          </th>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import CaloriesRow from "./CaloriesRow.vue";
import NutritionRow from "./NutritionRow.vue";
export default {
  components: {
        CaloriesRow,
    NutritionRow
    },
  props:["nutrients"]
};
</script>

<style scoped>
p {
  margin: 0;
}
.nutrition-facts {
  border: 1px solid black;
  margin: 20px;
  float: left;
  width: 280px;
  padding: 0.5rem;
  font-size: small;
  line-height: 1.4;
  align-self: center;
}
.nutrition-facts table {
  border-collapse: collapse;
}
.nutrition-facts__title {
  font-weight: bold;
  font-size: 2rem;
  margin: 0 0 0.25rem 0;
}
.nutrition-facts__header {
  border-bottom: 10px solid black;
  padding: 0 0 0.25rem 0;
  margin: 0 0 0.5rem 0;
}
.nutrition-facts__header p {
  margin: 0;
}

.nutrition-facts__table thead tr th,
.nutrition-facts__table thead tr td {
  border: 0;
}
.nutrition-facts__table th,
.nutrition-facts__table td {
  font-weight: normal;
  text-align: left;
  padding: 0.25rem 0;
  border-top: 1px solid black;
  white-space: nowrap;
}
.nutrition-facts__table td:last-child {
  text-align: right;
}
.nutrition-facts__table .blank-cell {
  width: 1rem;
  border-top: 0;
}
.nutrition-facts__table .thick-row th,
.nutrition-facts__table .thick-row td {
  border-top-width: 5px;
}

.thick-end {
  border-bottom: 10px solid black;
}
.thin-end {
  border-bottom: 1px solid black;
}
</style>
