import { defineStore } from "pinia";
import gql from "graphql-tag";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
    product: {},
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      
    },
  },
});
