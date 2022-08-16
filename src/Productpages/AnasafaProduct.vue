<template>

  <div style="background-color: white">
    <div class="container text-center headeralt">
      <div class="row gx-2">
        <div class="col " v-for="product in productName " :key="product.id">


          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div><a :href="'/urundetay/'+product.name">
              <img :src="product.image">

            </a></div>
            <div><a>{{ product.name }}</a></div>
            <a class="fw-bold" :href="'/urundetay/'+product.id">{{ product.description }}</a>
            <div><span><strong>{{ product.price }} TL</strong></span></div>
            <div>
              <a class="productbtn ">Sepete Ekle
                <img src="src/components/Pictures/add_shopping_cart_FILL0_wght400_GRAD0_opsz48.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<div>-->
  <!--  <BotHeaders/>-->
  <!--</div>-->

</template>

<script>
import axios from "axios";


export default {

  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (100)) + 1;
    }
  },
  data() {
    return {
      productName: null,


    }
  },
  created: function () {

    axios.get("https://my-json-server.typicode.com/TumayAltintas/tmy/posts").then((response) => {
      this.productName = response.data
      this.$store.state.products.push(this.product)
      console.log(this.$store.state.products)


    })

  }
}

</script>

<style scoped>


div.Product {
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 20px;
  height: 500px;
  width: 300px;

}


div.headeralt {

  padding-top: 500px;


}

a.productbtn {

  padding: 20px;


}


</style>


<!--<template>-->
<!--<div><duyurular/></div>-->

<!--  <div class="container-fluid Product ">-->
<!--    <section class="row" v-for="product in productName " :key="product.id">-->

<!--      <ul class="row">-->

<!--        <a :href="'/urun-detay/'+product.id">-->
<!--          <img :src="product.image">-->
<!--        </a>-->


<!--        <div class="proctname fw-bold font-monospace"><a class="text-center">{{product.title}} </a></div>-->
<!--        <a class="fw-bold">{{product.description}}</a>-->
<!--        <div><span><strong>{{ product.price }} TL</strong></span></div>-->

<!--        <div>-->
<!--          <a class="productbtn ">Sepete Ekle-->
<!--            <img src="src/components/Pictures/icons8-plus-32.png"></a>-->
<!--        </div>-->
<!--        <br>-->
<!--      </ul>-->
<!--      <br>-->
<!--    </section>-->
<!--    <br>-->
<!--  </div>-->
<!--  &lt;!&ndash;<div>&ndash;&gt;-->
<!--  &lt;!&ndash;  <BotHeaders/>&ndash;&gt;-->
<!--  &lt;!&ndash;</div>&ndash;&gt;-->

<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--import duyurular from "../Duyurular.vue";-->

<!--export default {-->
<!--  components: {-->
<!--    duyurular-->


<!--  },-->
<!--  methods: {-->
<!--    randomNumber: function () {-->
<!--      return Math.floor(Math.random() * (100)) + 1;-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      productName: null,-->

<!--    }-->
<!--  },-->
<!--  created: function () {-->

<!--    axios.get("https://my-json-server.typicode.com/TumayAltintas/tmy/posts").then((response) => {-->
<!--      this.productName = response.data-->


<!--    })-->

<!--  }-->
<!--}-->

<!--</script>-->

<!--<style scoped>-->

<!--ul.productlist {-->
<!--  padding-top: 300px;-->
<!--  padding-left: 100px;-->
<!--  height: 300px;-->
<!--  width: 300px;-->
<!--  padding-bottom: 50px;-->
<!--}-->

<!--div.Product {-->

<!--  padding-top: 200px;-->
<!--  margin-left: 50px;-->
<!--  height: 400px;-->
<!--  width: 350px;-->
<!--}-->

<!--button.cart {-->

<!--  background-color: blue;-->
<!--  border-radius: 50px;-->

<!--}-->

<!--div.proctname {-->

<!--  height: 50px;-->


<!--}-->

<!--a.productbtn {-->

<!--  padding: 20px;-->


<!--}-->
<!--a.productdiscrip{-->


<!--}-->


<!--</style>-->




