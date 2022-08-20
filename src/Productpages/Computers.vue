<template>
  <div class="search-wrapper arama">
    <input type="text"
           v-model="searchQuery"
           placeholder="Ürün ara"/>
  </div>
  <div>
    <label for="customRange" class="form-label">Example range</label>
    <input v-model="stepprice" type="range" class="form-range" min="0" max="2000" id="customRange">
    <p style="text-align: center">{{stepprice}}</p>
  </div>
  <div class="dropdown-center sortby">
    <div class="dropdown">
      <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Sıralama
      </a>
      <ul class="dropdown-menu">
        <li><a @click="sortby" class="dropdown-item">Fiyat artan</a></li>
        <li><a @click="longby" class="dropdown-item">Fiyat azalan</a></li>
      </ul>
    </div>
  </div>
  <div class="">
    <div class="container atry ">
      <div class="row g-2">
        <div class="col-lg-auto animate__animated animate__fadeInUp "
             v-for="(products, index) in filteritem.slice(0,slice) "
             :key="index">
          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div>
              <img style="width: 200px" :src="products.image">
            </div>

            <a class="fw-bold" :href="'/urun-detay/'+product.id">{{ products.description.substring(0, 20) }}</a>
            <div><span><strong>{{ products.price }} TL</strong></span></div>

            <br>
            <div>
              <button type="button" class="btn btn-light" @click="addItemToCart(products)">Sepete ekle</button>
            </div>
            <div>
              <button type="button" class="btn btn-light" @click="addToList(products)">Listeye ekle</button>
            </div>
          </div>

        </div>
        <div class="btnurunyukle">
          <button @click="slicearttır" type="button" class="btn btn-danger yeniurun">Daha çok ürün yükle
          </button>
        </div>
      </div>
    </div>

  </div>


</template>

<script>


import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {addDoc} from "firebase/firestore";
import {ref, onMounted} from "vue";


export default {

  data: function () {
    return {
      product: [],
      giden: [],
      fiyat: '',
      setdescription: '',
      setimage: '',
      setname: '',
      setprice: '',
      slice: 12,
      searchQuery: '',
      stepprice : 0
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
        showprice : doc.data().showprice
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
    },
    sortby(){
      this.filteritem.sort((a,b)=> (a.price > b.price ? 1 : -1))
    },
    longby(){
      this.filteritem.sort((a,b)=> (a.price < b.price ? 1 : -1))
    }
  },
  computed: {
    filteritem() {
      const quary = this.searchQuery.toLowerCase()
      if (this.searchQuery === '') {
        return this.product
      }
      return this.product.filter((user) => {
        return Object.values(user).some((word) =>
            String(word).toLowerCase().includes(quary))
      })
    },

    // sortByLowPrice: function () {
    //   return this.products.sort(function (a, b) {
    //     return a.price - b.price;
    //   })
    // },
    // sortByHigherPrice: function () {
    //   return this.products.sort(function (a, b) {
    //     return a.price - b.price;
    //   })
    // }
  }
}
</script>
<style scoped>
div.Product {




  width: 250px;

}

button.yeniurun {
  width: 500px;
  text-align: center;
}

div.btnurunyukle {
  text-align: center;
  margin-bottom: 70px;
  margin-top: 5px;
}

div.arama {
  text-align: center;
}

div.alldiv {
  background-color: white;
  display: flex;
  text-align: center;
}

div.sortby {
  text-align: right;
  margin-right: 45px;
}
div.atry{
  text-align: center;
  padding-left: 100px;

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