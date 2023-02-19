<template>
  <div class="row">
    <div class="col-md-3 home-left" style="padding-right: 0">
      <router-link class="home-left__logo" to="/">Milk Tea Store</router-link>
      <div class="home-left__store" style="margin-top: 72px">
        <button @click="toggleActive"
                :title="store.name"
                class="btn-lg"
                :class="{ active: isActive }"
                v-for="store in stores"
                :key="store.id">
          {{ store.name }}
        </button>
      </div>
    </div>
    <div class="col-md-9 home-right" style="padding-left: 62px">
      <div class="home-right__menu">Menu</div>
      <div class="home-right__filter">
        <div class="filter-show">
          <button class="btn btn-primary btn-lg"
                  type="button"
                  @click="showContent = !showContent"
                  style="background-color: #0b0b78">
            Filter
          </button>
          <div v-show="showContent" class="filter-toppings">
            <div class="border bg-light filter-toppings__show">
              <span>Toppings:</span>
              <div v-for="topping in toppings"
                   :key="topping.id"
                   style="width: 33.33%; display: inline-block">
                <input type="checkbox" id="{{ topping.name }}"
                       value="{{ topping.name }}"
                       v-model="checkedToppings">
                <label for="{{ topping.name }}">{{ topping.name }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="home-right__sort" style="margin-left: auto; margin-right: 48px;">
          <div style="padding: 16px;">Sort by</div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
                    type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
              Name
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button @click="sortByNameAsc" class="dropdown-item">Name ▲</button>
              <button @click="sortByNameDsc" class="dropdown-item">Name ▼</button>
              <button @click="sortByPriceAsc" class="dropdown-item">Price ▲</button>
              <button @click="sortByPriceDsc" class="dropdown-item">Price ▼</button>
            </ul>
          </div>
        </div>
      </div>
      <div class="row home-right__product">
        <div class="col-md-3 product_box"
             v-for="product in sortedProducts"
             :key="product.id">
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
  </div>

</template>

<script>
import axios from 'axios';
import Products from "@/components/views/Products.vue";
import {formatCurrency} from "@/router/utils";

  export default {
    name: 'HomeView',
    components: {Products},

    data() {
      return {
        products: [],
        stores: [],
        sortCriteria: "",
        showContent: false,
        showStore: false,
        selectedStoreId: null,
        isActive: false,
        isHover: false,
        checkedToppings: [],
        toppings: [
          {id: 1, name: 'Milk Foam'},
          {id: 2, name: 'White Pearl'},
          {id: 3, name: 'Pearl'},
          {id: 4, name: 'Cream'},
          {id: 5, name: 'Aloe'},
          {id: 6, name: 'Mango'},
        ],
      };
    },

    methods: {
      formatCurrency() {
        return formatCurrency
      },
      sortByNameAsc() {
        this.sortCriteria = "nameAsc";
      },
      sortByNameDsc() {
        this.sortCriteria = "nameDsc";
      },
      sortByPriceAsc() {
        this.sortCriteria = "priceAsc";
      },
      sortByPriceDsc() {
        this.sortCriteria = "priceDsc";
      },
      toggleActive() {
        this.isActive = !this.isActive
      }
      // toggleStoreContent() {
      //   if (this.showStore === false) {
      //     this.showStore = true;
      //   }
      // },
    },
    computed: {
      sortedProducts() {
        if (this.sortCriteria === "nameAsc") {
          return this.products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.sortCriteria === "nameDsc") {
          return this.products.sort((a, b) => b.name.localeCompare(a.name));
        } else if (this.sortCriteria === "priceAsc") {
          return this.products.sort((a, b) => a.price - b.price);
        } else if (this.sortCriteria === "priceDsc") {
          return this.products.sort((a, b) => b.price - a.price);
        } else {
          return this.products;
        }
      },
      // selectedStore() {
      //   return this.stores.find((store) => store.id === this.selectedStoreId);
      // },
      // selectedStoreName() {
      //   return this.selectedStore ? this.selectedStore.name : "";
      // },
      // storeName() {
      //   return this.stores.find(store => store.id === this.showStore)?.name;
      // },
    },

    mounted() {
      axios.get('/data/products.json')
          .then(response => {
            this.products = response.data.products;
          })
          .catch(error => {
            console.log(error);
          });

      axios.get('/data/stores.json')
          .then(response => {
            this.stores = response.data.stores;
          })
          .catch(error => {
            console.log(error);
          });

      axios.get('/data/storeProducts.json')
          .then(response => {
            this.storeProducts = response.data.storeProducts;
          })
          .catch(error => {
            console.log(error);
          });
    }

  }
</script>


<style scoped>

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.home-left, .home-right {
  /*flex: 1;*/
  height: 100vh;
}

.home-left {
  background-color: #0b0b78;
}

.home-right {
  background-color: #e5dede;
  padding: 20px 60px;
}

.home-left__logo {
  text-decoration: none;
  color: #ffffff;
  font-size:30px;
  font-weight: 500;
  margin-top: 20px;
}

.home-right__menu,
.home-left__logo {
  display: flex;
  justify-content: center;
}

.home-right__menu {
  font-size: 40px;
  color: #02026e;
  font-weight: bold;
}

.home-left__store button {
  display: block;
  color: #d0cdcd;
  text-align: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  padding: 12px 0;
  width: 100%;
  background-color: #0b0b78;
  border: none;
}

button {
  width: 180px;
  height: 56px;
}

.home-right__filter {
  display: flex;
  margin-left: 48px;
}

.home-right__sort {
  display: flex;
  right: 0;
}

.dropdown-item i {
  margin-right: 88px;
}

.home-right__product {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
}

.dropdown-toggle {
  background-color: #f8f9fa;
  color: #02026e;
  text-align: left;
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

.filter-toppings__show {
  margin-top: 12px;
}

.active {
  background-color: #645f5f;
  color: white;
}
</style>
