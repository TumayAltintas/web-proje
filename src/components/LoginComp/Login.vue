<template>

  <div class="fixed">
    <div class="kayıt">
      <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight">Login
      </button>

      <h1 class="animate__animated animate__bounce">An animated element</h1>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="src/components/Pictures/sunrise-planet-earth-space_117023-843%20(1).jpg" class="d-block w-100"
                 alt="...">
          </div>
          <div class="carousel-item">
            <img src="src/components/Pictures/2474215.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="src/components/Pictures/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg"
                 class="d-block w-100" alt="...">
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <div class="form">

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

    </div>
  </div>


</template>


<script>


export default {

  name: "Login",

  data() {
    return {
      show: false

    }
  },


}
</script>


<style>


div.fixed {
  position: center;
  margin-top: 150px;
  margin-left: 300px;
  margin-right: 300px;
  background-color: red;
  min-width: max-content;

}


</style>

<template>
  <div class="container">
    <div class="row  mt-5">
      <div class="col-md-4 offset-4 card card-primary p-3 border"
           :class="{'border-primary' : isUser, 'border-success' : !isUser }">
        <h3
            :class="{'text-primary' : isUser, 'text-success' : !isUser }"
            class="text-center mb-3 mt-3">Sing in/Sing Up</h3>
        <hr>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input v-model="user.email" type="email" class="form-control"
                   placeholder="E-posta adresinizi giriniz">
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
          </div>
          <div class="button-container d-flex  flex-column align-items-center">
            <button type="submit" :class="{'btn-primary' : isUser, 'btn-success' : !isUser }"
                    class="btn btn-block mb-2">
              {{ isUser ? 'Giriş Yap' : 'Kayıt Ol' }}
            </button>
            <p><button @click="signInwithGoogle">google ile giriş yap</button></p>
            <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
              {{ isUser ? 'Üye değilim' : 'Üyeliğim var' }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import {auth} from "../../firebase";


export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      isUser: false
    }
  },
  methods: {
    onSubmit() {
      let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
      if (this.isUser){
        authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
      }

      axios.post(authLink + "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
          {email : this.user.email, password : this.user.password, returnSecureToken : true}
      ).then(response => {
        console.log(this.user)
      })


    }
  }
}
</script>
