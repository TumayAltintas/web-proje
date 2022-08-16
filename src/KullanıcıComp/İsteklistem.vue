<template>


  <div style="background-color: white">
    <div class="container text-center headeralt">
      <div class="row gx-2">
        <div class="col " v-for="(products, item) in product" :key="item">


          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div>
              <img :src="products.image">

            </div >
            <div><a>{{ products.name }}</a></div>
            <a class="fw-bold" >{{ products.description }}</a>
            <div ><span><strong>{{ products.price }} TL</strong></span></div>
            <br>
            <div>
              <button @click="sil(products)" type="button" class="btn btn-danger">Sil</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


import {collection, getDocs, getFirestore} from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
const db = getFirestore();


export default {


  data: function ()  {
    return{
      product: '',
      deletid: ''
    }
  },

  async mounted() {
    const querySnapshot = await getDocs(collection(db, 'isteklistem'));
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
    this.product = productlist

  },



  methods: {
    async sil(products)  {

      this.deletid = products.id
      console.log(this.deletid)

      await deleteDoc(doc(db, "isteklistem", this.deletid));
      window.location.reload();

    }
  },







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






</style>