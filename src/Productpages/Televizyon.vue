<template>

  <div style="background-color: white ">
    <div class="search-wrapper arama">


      <input type="text"
             v-model="searchQuery"
             placeholder="Ürün ara"/>
    </div>
    <div class="dropdown-center sortby">
      <div class="dropdown">
        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sıralama
        </a>
        <ul class="dropdown-menu">
          <li><a @click="sortby" class="dropdown-item">Fiyat artan</a></li>
          <li><a @click="longby" class="dropdown-item" h>Fiyat azalan</a></li>
        </ul>
      </div>
    </div>
    <div class="container text-center headeralt">
      <div class="row gx-2">
        <div class="col animate__animated animate__fadeInUp " v-for="products in filteritem.slice(0,slice)">
          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div><a :href="'/urun-detay/'+product.name">
              <img style="max-width: 100px" :src="products.image">

            </a></div>
            <div>
              <a>{{ products.name }}</a>
            </div>

            <a class="fw-bold" :href="'/urun-detay/'+product.id">{{ products.description.substring(0, 20)}}</a>
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
      </div>
    </div>
    <div class="btnurunyukle">
      <button @click="ShowMoreProduct" type="button" class="btn btn-danger yeniurun">Daha çok ürün yükle</button>
    </div>
  </div>
</template>

<script>
import AddToCart from "../cart/UrunDetay.vue";
import Cart from "../cart/cart.vue";

import {collection, getDocs, getFirestore} from "firebase/firestore";

import {db} from "../firebase";
import {addDoc} from "firebase/firestore";


export default {
  components: {
    Cart,

    AddToCart
  },


  data() {
    return {
      product: [],
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
    const querySnapshot = await getDocs(collection(db, 'televizyon'));
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

    console.log(this.$store.state.products)


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

      alert('Ürün Listeye Eklendi')

    },
    ShowMoreProduct() {

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
    }
  },


}
</script>


<style scoped>


div.Product {
  margin-top: 40px;
  margin-bottom: 70px;
  margin-left: 20px;
  height: 350px;
  width: 300px;

}

button.yeniurun {
  width: 500px;
  text-align: center;
}

div.btnurunyukle {
  text-align: center;
  margin-bottom: 55px;
  margin-top: 5px;
}

div.arama {
  text-align: center;
}
div.sortby {
  text-align: right;
  margin-right: 45px;
}


</style>