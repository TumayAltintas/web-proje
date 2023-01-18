<template>
  <div style="display: flex;"  class="hpt" v-for="(products, number) in product">

    <div class="pic">
      <img :src="products.image">
    </div>
    <div>
      <a>
        {{ products.name }}
      </a>
    </div>
    <div class="desc">
      {{ products.description }}
    </div>

    <div class="price">
      <span>
        <strong>
          {{ products.price }} TL
        </strong>
      </span>
    </div>

    <div class="btndelet">
      <button @click="sil(products)" type="button" class="btn btn-danger">Sil</button>
    </div>
    <br>
  </div>








</template>

<script>

import { collection, getDocs, getFirestore} from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const db = getFirestore();

export default {


  data: function () {

    return {

      product: '',
      deletid: '',
    }
  },


  async mounted() {
    const querySnapshot = await getDocs(collection(db, 'sepet'));
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
    async sil(products) {
      this.deletid = products.id
      console.log(this.deletid)
      await deleteDoc(doc(db, "sepet", this.deletid));
      window.location.reload();
    }
  },
}

</script>

<style scoped>
div.hpt {
  margin-left: 200px;
  margin-top: 40px;
  width: 700px;
}
div.pic {
  max-width: 75px;
  max-height: 75px;
}
div.desc{

  margin-left: 15px;
  margin-top: 15px;
}

div.price{
  margin-top: 15px;
  margin-left: 20px;
}
div.btndelet{
  margin-left: 55px;
  margin-top: 15px;
}



</style>
