<!--<template>-->
<!--  <div>-->
<!--    <div class="filter-options" v-for="option in filterOptions" :key="option.value">-->
<!--      <input type="checkbox" :id="option.value" :value="option.value" v-model="selectedFilters" @change="filterData">-->
<!--      <label :for="option.value">{{ option.label }}</label>-->
<!--    </div>-->
<!--    <div class="filtered-results" v-for="item in filteredData" :key="item.id">-->
<!--      <h2>{{ item.name }}</h2>-->
<!--      <p>{{ item.description }}</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      products: [],-->
<!--      stores: [],-->
<!--      showContent: false,-->
<!--      filterOptions: [-->
<!--        { label: 'Option 1', value: 'option1' },-->
<!--        { label: 'Option 2', value: 'option2' },-->
<!--        { label: 'Option 3', value: 'option3' }-->
<!--      ],-->
<!--      selectedFilters: [],-->
<!--      data: [-->
<!--        { id: 1, name: 'Item 1', description: 'Description for item 1', options: ['option1', 'option3'] },-->
<!--        { id: 2, name: 'Item 2', description: 'Description for item 2', options: ['option2'] },-->
<!--        { id: 3, name: 'Item 3', description: 'Description for item 3', options: ['option1', 'option2'] },-->
<!--        { id: 4, name: 'Item 4', description: 'Description for item 4', options: ['option3'] }-->
<!--      ]-->
<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    filteredData() {-->
<!--      if (this.selectedFilters.length === 0) {-->
<!--        return this.data-->
<!--      } else {-->
<!--        return this.data.filter(item => {-->
<!--          return item.options.some(option => this.selectedFilters.includes(option))-->
<!--        })-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    filterData() {-->
<!--      // No need to do anything here, as computed property will update automatically-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--input[type="checkbox"] {-->
<!--  -webkit-appearance: none;-->
<!--  -moz-appearance: none;-->
<!--  appearance: none;-->
<!--  width: 18px;-->
<!--  height: 18px;-->
<!--  border: 2px solid #ccc;-->
<!--  border-radius: 4px;-->
<!--  outline: none;-->
<!--  cursor: pointer;-->
<!--}-->

<!--input[type="checkbox"]:checked {-->
<!--  background-color: #007bff;-->
<!--  border-color: #007bff;-->
<!--}-->

<!--label {-->
<!--  margin-left: 10px;-->
<!--  font-size: 16px;-->
<!--}-->

<!--</style>-->

<template>
  <div>
    <button :class="{ active: isActive }" @click="toggleActive">Click me</button>
    <p v-if="isActive">Button is active</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.active {
  background-color: #645f5f;
  color: white;
}
</style>



