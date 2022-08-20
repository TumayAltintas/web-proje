<template>
  <div class="container">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border">
        <h3

            class="text-center mb-3 mt-3">Ürün yükleme</h3>
        <hr>
        <form >
          <div class="form-group">
            <label>description</label>
            <input v-model="descriptions"  type="text" class="form-control" placeholder="Ürün açıklaması">
          </div>
          <div class="form-group">
            <label>image</label>
            <input v-model="images"  type="text" class="form-control" placeholder="Resmin urlsi">
          </div>
          <div class="form-group">
            <label>price</label>
            <input v-model="prices"  type="text" class="form-control" placeholder="Fiyat">
          </div>
          <label>kayıt yeri</label>
          <select v-model="yer"  class="form-select" aria-label="Default select example">
            <option value="products">products</option>
<!--            <option value="işlemci">işlemci</option>-->
<!--            <option value="ram">ram</option>-->
          </select>
          <div class="form-group">
            <label>Kategori</label>
            <select v-model="kategoris"  class="form-select" aria-label="Default select example">
              <option value="bilgisayar">bilgisayar</option>
              <option value="işlemci">işlemci</option>
              <option value="ram">ram</option>
            </select>
          </div>
          <div class="form-group">
            <label>type</label>
            <select v-model="types"  class="form-select" aria-label="Default select example">
              <option value="ekrankartı">ekrankartı</option>
              <option value="işlemci">işlemci</option>
              <option value="ram">ram</option>
            </select>
          </div>
          <div class="form-group">
            <label>Marka</label>
            <select v-model="marka"  class="form-select" aria-label="Default select example">
              <option value="corsair">corsair</option>
              <option value="kingston">kingston</option>
              <option value="xpg">xpg</option>
              <option value="team">team</option>
              <option value="g.Skill">g.Skill</option>
              <option value="apacer">apacer</option>
              <option value="patriot ">patriot </option>
            </select>
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button @click="addItemToCart" type="button" class="btn btn-warning">Ürünü yükle</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, doc, setDoc, addDoc, getFirestore} from "firebase/firestore";
const db = getFirestore();

export default {



data(){
  return{
    descriptions : '',
    images : '',
    prices : '',
    kategoris : '',
    types : '',
    marka : '',
    yer : ''

  }
},

  methods: {


    async addItemToCart(products) {

      const docRef = await addDoc(collection(db, this.yer), {
        description: this.descriptions,
        image: this.images,
        price: this.prices,
        kategori : this.kategoris,
        type : this.types,
        brand : this.marka

      });


      window.location.reload();


    },



}
}
</script>

<style scoped>

</style>