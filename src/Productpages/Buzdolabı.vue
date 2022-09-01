<template>
  <div class="search-wrapper arama">
    <input type="text"
           v-model="searchQuery"
           placeholder="Ürün ara"/>
    <p>{{ this.bybrand }}</p>
    <p>{{ this.$route.query.kategory }}</p>
  </div>
  <!--  <div>-->
  <!--    <label for="customRange" class="form-label">Example range</label>-->
  <!--    <input v-model="stepprice" type="range" class="form-range" min="0" max="20000" id="customRange">-->
  <!--    <p style="text-align: center">{{stepprice}}</p>-->
  <!--  </div>-->
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
  <div style="display: flex" class="allsearch">
    <div class="dropdown-center">
      <div class="dropdown">
        <a class="btn btn-warning dropdown-toggle btnfiltre" href="#" role="button" data-bs-toggle="dropdown"
           aria-expanded="false">
          Filtre
        </a>
        <ul class="dropdown-menu">
<!--          <li><a @click="brandbyamd" href="?kategory=asus,amd" class="dropdown-item">Asus</a></li>-->
<!--          <li><a @click="brandbyamd" href="?kategory=amd" class="dropdown-item">AMD</a></li>-->
          <li><a @click="brandbyamd" href="?kategory=lg" class="dropdown-item">lg</a></li>
          <li><a @click="brandbyamd" href="?kategory=samsung" class="dropdown-item">samsung</a></li>
<!--          <li><a @click="brandbyamd" href="?kategory=amd" class="dropdown-item">AMD</a></li>-->
<!--          <li><a @click="brandbyamd" href="?kategory=intel" class="dropdown-item">Intel</a></li>-->

        </ul>
      </div>
    </div>
  </div>
  <div style="display: flex" class="container">

    <div class="container">

      <div class="row g-2">
        <div class="col-lg-auto animate__animated animate__fadeInUp "
             v-for="(products, index) in filteritem.slice(0,slice) "
             :key="index">
          <div class="p-3 Product opacity-100 shadow-lg p-3 mb-5 bg-body rounded">
            <div>
              <img style="width: 200px" :src="products.image">
            </div>

            <div style="text-align: center"><router-link :to="{ name: 'showdetails', params: { id: products.id, description: products.description,image: products.image,price: products.price }}">
              <a  class="fw-bold">{{ products.description.substring(0, 30)}}</a>
            </router-link></div>
            <div style="text-align: center"><span><strong>{{ products.showprice }} TL</strong></span></div>

            <br>
            <div style="text-align: center">
              <button type="button" class="btn btn-light" @click="addItemToCart(products)">Sepete ekle</button>
            </div>
            <div style="text-align: center">
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
import {collection, getDocs, getDoc, query, orderBy, where,limit} from "firebase/firestore";
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
      slice: 10,
      searchQuery: '',
      stepprice: 10000,
      bywhere: 'brand',
      querySnapshots: ' ',
      getcategorysleng: this.$route.query.kategory ? this.$route.query.kategory.length : 0,
      incategorys: this.$route.query.kategory?.split(","),
      bybrand: '',
      showprice: ''
    }
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
      this.slice += 10
    },
    sortby() {
      this.filteritem.sort((a, b) => (a.price > b.price ? 1 : -1))
    },
    longby() {
      this.filteritem.sort((a, b) => (a.price < b.price ? 1 : -1))
    },
    brandbyamd() {
      this.bybrand = this.$route.query.kategory
    }
  },

  setup() {
    // const getCategory = route.params.brandname;
  },

  async mounted() {
    console.log(this.getcategorysleng)

    this.querySnapshots = await getDocs(collection(db, 'buzdolabı'));

    if (this.getcategorysleng > 0) {
      this.querySnapshots = await getDocs(query(collection(db, "buzdolabı"), where('brand', "in", this.incategorys)));
    }

    let productlist = []
    this.querySnapshots.forEach((doc) => {
      const list = {
        id: doc.id,
        description: doc.data().description,
        image: doc.data().image,
        name: doc.data().name,
        price: doc.data().price,
        showprice: doc.data().showprice,
      }
      productlist.push(list)
    });
    this.product = productlist
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

div.atry {
  text-align: center;
  padding-left: 100px;
  display: flex;
}

a.btnfiltre {
  margin-left: 110px;
}
</style>

