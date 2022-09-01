
<template>

  <div>
    <div class="container container-space">
      <div  class="row shadow-lg p-3 mb-5 bg-body rounded">
        <div class="col-md-6">
          <img class="img-fluid" :src="this.$route.params.image"  />
        </div>
        <div class="col-md-4">
          <p class="fs-3">{{this.$route.params.description}}</p>
          <br>
          <br>
          <br>
          <p class="fs-3">{{this.$route.params.price}} TL</p>
          <br>
          <br>
          <br>
          <button type="button" class="btn btn-outline-primary btn-lg btn-block btn-custom-color" @click="addItemToCart">
            Sepete ekle
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg btn-block btn-custom-color" @click="addToList">
            İstek listeme ekle
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";

export default {

  data(){
    return{
      setprice : '',
      setdescription: '',
      setimage: ''
    }
  },

  methods: {
    async addItemToCart() {
      this.setdescription = this.$route.params.description
      this.setimage = this.$route.params.image
      this.setprice = this.$route.params.price


      const docRef = await addDoc(collection(db, "sepet"), {
        description: this.setdescription,
        image: this.setimage,
        price: this.setprice
      });

      alert('Ürün sepete eklendi')

    },

    async addToList() {

      this.setdescription = this.$route.params.description
      this.setimage = this.$route.params.image
      this.setprice = this.$route.params.price



      const docRef = await addDoc(collection(db, "isteklistem"), {
        description: this.setdescription,
        image: this.setimage,
        price: this.setprice
      });

      alert('Ürün Listeye Eklendi')

    },


  },
}

</script>

<style scoped>
body {
  font-family: "Nunito", sans-serif;
  background-color: #eeeeee;
}
.container-space {
  margin-top: 2rem;
}

.product-thumbnails > ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.product-thumbnails > li {
  margin-right: 10px;
}
.product-thumbnails > ul > li > img {
  width: 100px;
  cursor: pointer;
}

.btn-custom-color {
  border: 2px solid #4fc08d;
  color: #4fc08d;
}
.btn-custom-color:hover {
  border: 2px solid #4fc08d;
  background-color: #4fc08d;
  color: #ffffff;
}
</style>

