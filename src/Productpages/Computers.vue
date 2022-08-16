<template>

  <!--  <div  class="alert alert-primary aler" role="alert">-->
  <!--    A simple primary alert—check it out!-->
  <!--  </div>-->
  <div style="background-color: white ">
    <div class="search-wrapper arama">
    <input type="text"
           v-model="searchQuery"
           placeholder="Ürün ara"/>
  </div>
    <div class="container text-center headeralt">
      <div class="row gx-2">
        <div class="col animate__animated animate__fadeInUp " v-for="(products, item) in filteritem.slice(0,slice)"
             >


          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div><a :href="'/urun-detay/'+product.name">
              <img :src="products.image">

            </a></div>
            <div><a>{{ products.name }}</a></div>
            <a class="fw-bold" :href="'/urun-detay/'+product.id">{{ products.description.substring(0,50) }}</a>
            <div><span><strong>{{ products.price }}</strong></span></div>
            <br>
            <div>
              <button type="button" class="btn btn-light" @click="addItemToCart(products)">Sepete ekle</button>
            </div>
            <div>
              <button type="button" class="btn btn-light" @click="addToList(products)">Listeye ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnurunyukle"> <button @click="slicearttır" type="button" class="btn btn-danger yeniurun">Daha çok ürün yükle</button></div>
  </div>


</template>

<script>


import {collection, getDocs, getFirestore} from "firebase/firestore";

const db = getFirestore();
import {addDoc} from "firebase/firestore";
import {ref, onMounted} from "vue";

export default {

  data: function () {
    return {
      product: '',

      giden: [],

      setdescription: '',
      setimage: '',
      setname: '',
      setprice: '',
      slice: 12,
      searchQuery: '',


    }

  },

  async mounted() {
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
    this.product = productlist

  },


  methods: {
    async addItemToCart(products) {
      this.setdescription = products.description
      this.setimage = products.image
      this.setprice = products.price
      console.log(this.setprice)


      const docRef = await addDoc(collection(db, "sepet"), {
        description: this.setdescription,
        image: this.setimage,
        price: this.setprice
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Ürün sepete eklendi')


    },

    async addToList(products) {

      this.setdescription = products.description
      this.setimage = products.image
      this.setprice = products.price
      console.log(this.setprice)


      const docRef = await addDoc(collection(db, "isteklistem"), {
        description: this.setdescription,
        image: this.setimage,
        price: this.setprice
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Ürün Listeye Eklendi')

    },
    slicearttır() {

      this.slice += 12

    }
  },
  computed:{
    filteritem(){
      const quary = this.searchQuery.toLowerCase()
      if (this.searchQuery === ''){
        return this.product
      }
      return this.product.filter((user) => {
        return Object.values(user).some((word)=>
            String(word).toLowerCase().includes(quary))
      })
    }
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

div.aler {
  margin-left: 650px;
  max-width: 400px;
}


button.yeniurun {
  width: 500px;
  text-align: center;
}
div.btnurunyukle{
  text-align: center;
  margin-bottom: 55px;
  margin-top: 5px;
}
div.arama {
  text-align: center;
}

</style>


<!--<template>-->
<!--  <div class="container text-center">-->
<!--    <div class="row gx-2 ">-->
<!--      <div class="col" v-for="product in productName " :key="product.id">-->
<!--        <div class="p-3  Product" >-->

<!--          <div><a>{{product.name}}</a></div>-->
<!--          <div><img :src="product.thumbnail"></div>-->
<!--          <a class="fw-bold">{{product.description}}</a>-->
<!--          <div><span><strong>{{ product.price }} TL</strong></span></div>-->
<!--          <div>-->
<!--            <a class="productbtn ">Sepete Ekle-->
<!--              <img src="src/components/Pictures/icons8-plus-32.png"></a>-->
<!--          </div>-->


<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      productName: null,-->

<!--    }-->
<!--  },-->
<!--  created: function () {-->

<!--    axios.get("https://dummyjson.com/products?limit=10").then((response) => {-->
<!--      this.productName = response.data.products-->


<!--    })-->

<!--  },-->

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
<!--  margin-top: 40px;-->
<!--  margin-bottom: 25px;-->
<!--  margin-left: 20px;-->
<!--  height: 400px;-->
<!--  width: 300px;-->
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
<!--ul.productall{-->

<!--  padding-top: 300px;-->
<!--  padding-left: 15px;-->
<!--  height: 100px;-->
<!--  width: 400px;-->
<!--  padding-bottom: 150px;-->

<!--}-->

<!--</style>-->