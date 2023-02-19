<template>
  <div>
    <div class="row home-right__product">
      <div class="col-md-3 product_box" v-for="product in sortedProducts" :key="product.id">
        <div class="border bg-light">
          <div class="product_id">MT-0{{ product.id }}</div>
          <div class="product_name">{{ product.name }}</div>
          <div class="divider"></div>
          <div class="product_toppings">
            <div style="font-size: 20px; font-weight: 500">Toppings:</div>
            <div>{{ product.toppings }}</div>
            <div class="product_price">{{ formatCurrency()(product.price) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {formatCurrency} from "@/router/utils";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      stores: [],
    };
  },

  computed: {
    sortedProducts() {
      return this.products;
    },
  },

  methods: {
    formatCurrency,
  },

  mounted() {
    axios.get('/data/products.json')
        .then(response => {
          this.products = response.data.products;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>

<style scoped>

.home-right__product {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
}

.product_box {
  box-sizing: border-box;
  margin: 0 30px;
}

.border {
  border-radius: 10px;
  border: 1px solid transparent;
  width: 100%;
  margin-top: 140px;
}

.divider {
  border-top: 4px solid black;
  width: 90%;
  margin: 20px 12px;
  /*max-width: 290px;*/
  /*height: auto;*/
}

.border div {
  text-align: left;
  margin: 16px 10px;
}

.product_id {
  font-size: 20px;
  font-weight: 400
}

.product_name {
  font-size: 24px;
  font-weight: 600
}

.product_toppings div:not(:last-child) {
  margin-left: 0;
}

.product_toppings div:last-child {
  margin-right: 0;
}

.product_price {
  text-align: right !important;
}

</style>