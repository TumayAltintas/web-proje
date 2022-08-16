<template>



  <div class="container">

    <div class="row g-5">

      <div class="img" v-for="(item,index) in 24" :key="index">

        <img src="https://picsum.photos/seed/picsum/200/300">

        <p>Ürün fiyatı: {{ randomNumber() }} TL </p>

        <button type="button" class="btn btn-link">Link</button>

      </div>

    </div>

  </div>


</template>


<script>


export default {


  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (100)) + 1;
    }
  }


}
</script>


<style>


div.img {

  padding-bottom: 25px;
  padding-top: 300px;
  padding-left: 100px;
  height: 300px;
  width: 300px;

}


</style>