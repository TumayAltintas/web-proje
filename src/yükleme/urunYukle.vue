<template>
  <div class="container">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border">
        <h3

            class="text-center mb-3 mt-3">Ürün yükleme</h3>
        <hr>
        <form >
          <div class="form-group">
            <label>isim</label>
            <input v-model="isim"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>Soyisim</label>
            <input v-model="soyisim"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>OGR_NO</label>
            <input v-model="ogrencino"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>TC_NO</label>
            <input v-model="tcno"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>DOGUM_YERI</label>
            <input v-model="dogunyeri"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>DOGUM_TARIHI</label>
            <input v-model="doguntarihi"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>ADRES</label>
            <input v-model="adres"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>IL</label>
            <input v-model="il"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>ILCE</label>
            <input v-model="ilce"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>EMAIL</label>
            <input v-model="email"  type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label>GSM</label>
            <input v-model="gsm"  type="text" class="form-control" placeholder="">
          </div>

<!--          <div class="form-group">-->
<!--            <label>Marka</label>-->
<!--            <select v-model="marka"  class="form-select" aria-label="Default select example">-->
<!--              <option value="patriot">patriot</option>-->
<!--              <option value="kingston">kingston</option>-->
<!--              <option value="corsair">corsair</option>-->
<!--              <option value="beko">beko</option>-->
<!--              <option value="g.Skill">g.Skill</option>-->
<!--              <option value="corsair">corsair</option>-->
<!--              <option value="beko">beko</option>-->
<!--            </select>-->
<!--          </div>-->
          <div class="button-container d-flex  flex-column align-items-center">
            <button @click="addItemToCart" type="button" class="btn btn-warning">Ürünü yükle</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p>Branc2</p>
</template>

<script>
import {collection, doc, setDoc, addDoc, getFirestore} from "firebase/firestore";
const db = getFirestore();

export default {



data(){
  return{
   isim: '',
    soyisim: '',
    ogrencino: '',
    tcno: '',
    dogunyeri: '',
    doguntarihi: '',
    adres: '',
    il: '',
    ilce: '',
    email: '',
    gsm: '',

  }
},

  methods: {


    async addItemToCart(products) {

      const docRef = await addDoc(collection(db, 'ogrenciler'), {
        name: this.isim,
        lastname: this.soyisim,
        StudentNo: this.ogrencino,
        TcNo : this.tcno,
        Place_of_birth : this.dogunyeri,
        Date_of_birth : this.doguntarihi,
        Adres : this.adres,
        IL : this.il,
        Ilce : this.ilce,
        Email : this.email,
        GSM : this.gsm,



      });
      window.location.reload();
    },



}
}
</script>

<style scoped>

</style>