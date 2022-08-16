<template>


  <div class="container text-center headeralt ">
    <div class="row gx-2 ">
      <div class="col" v-for="asc in product">


        <div class="p-3 Product border border-primary">
          <div>
            <img :src="asc.image">
          </div>
          <div><a>{{ asc.name }}</a></div>
          <a class="fw-bold" :href="'/urun-detay/'+product.id">{{ asc.description }}</a>
          <div><span><strong>{{ asc.price }} TL</strong></span></div>
          <div>
            <a class="productbtn ">Sepete Ekle
              <!--              <img src="src/components/Pictures/icons8-add-to-cart-siyah.png">-->
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<div>-->
  <!--  <BotHeaders/>-->
  <!--</div>-->

</template>

<script setup>


import {collection, getDocs, getFirestore} from "firebase/firestore";
import {ref, onMounted} from "vue";

const db = getFirestore();

const product = ref([
  // {
  //   id : '',
  //   description : '',
  //   image : '',
  //   name : '',
  //   price : '',
  //
  //
  //
  // }
])


onMounted(async () => {


  const querySnapshot = await getDocs(collection(db, 'products'));
  let productlist = []
  querySnapshot.forEach((doc) => {


    const list = {
      id: doc.id,
      description: doc.data().description,
      image: doc.data().image,
      name: doc.data().name,
      price: doc.data().price,
    }
    productlist.push(list)
  });
  product.value = productlist

})




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