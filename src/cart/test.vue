<template>

<app-phone  v-on:addItemToCart="addItemToCart"></app-phone>
  <app-cart ></app-cart>

</template>

<script>

import Phones from "../Productpages/Televizyon.vue";
import cart from "./cart.vue";
import { collection, doc, setDoc } from "firebase/firestore";
export default {
  components : {
    appPhone : Phones,
    appCart : cart

  },
  data : function ()   {
    return {

      giden: [],


    };
  },
   methods: {
    addItemToCart(products) {
      this.giden.push(products)

      console.log(this.giden)


    },

  }

}
</script>

<style scoped>

</style>