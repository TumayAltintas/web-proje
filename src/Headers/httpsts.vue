<template>
  <nav class="navbar topheader " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">


      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-start">

        <router-link class=" fs-4" tag="li" to="/">
          <img src="../components/Pictures/TopHeader/lgma.png">
        </router-link>

        <router-link class="navbar-item fs-4" tag="li" to="/Hakkımızda">
          <a style="color:dodgerblue;" class=" fw-bold ">Hakkımda</a>
        </router-link>
        <router-link class="navbar-item fs-4" tag="li" to="/cart">
          <a style="color:dodgerblue;" class=" fw-bold">cart</a>
        </router-link>
        <!--        <router-link class="navbar-item" tag="li" to="/sadece">-->
        <!--          <a class="nav-link" href="#">sadece</a>-->
        <!--        </router-link>-->
        <!--        <router-link class="navbar-item" tag="li" to="/register">-->
        <!--          <a class="nav-link" href="#">register</a>-->
        <!--        </router-link>-->

        <div class="navbar-item has-dropdown is-hoverable">
          <a style="color:dodgerblue;" class="navbar-link fw-bold">
            Kategoriler
          </a>

          <div class="navbar-dropdown">
            <a class="nav-item">
              <router-link tag="li" to="/bilgisayar">
                <a class="fs-5 fw-bold">Bilgisayar</a>
              </router-link>
            </a>
            <br>
            <a class="nav-item">
              <router-link tag="li" to="/telefon">
                <a class="fs-5 fw-bold">Telefon</a>
              </router-link>
            </a>

            <br>
            <a class="nav-item">
              <router-link tag="li" to="/telefon">
                <a class="fs-5 fw-bold">Telefon</a>
              </router-link>
            </a>
            <hr class="navbar-divider">

          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link tag="li" to="/log">
              <a style="color:dodgerblue;" class="nav-link fs-4" v-if="!isLoggenIn">
                <img src="../components/Pictures/TopHeader/icons8-login-48.png">
                Giriş yap</a>
            </router-link>
            <div style="margin-right:20px">

              <!--            <router-link tag="li" to="/cart">-->
              <!--              <a style="color:dodgerblue;"  class="nav-link fs-4" v-if="isLoggenIn" >-->
              <!--                <img src="../components/Pictures/TopHeader/icons8-shopping-trolley-64.png">-->
              <!--                Sepet</a>-->
              <!--            </router-link>-->

            </div>

            <router-link tag="li" to="/register">
              <a style="color:dodgerblue;" class="nav-link fs-4" v-if="!isLoggenIn">
                <img src="../components/Pictures/TopHeader/icons8-sign-up-48.png">
                Üye ol</a>
            </router-link>
            <!--            <a style="color:dodgerblue;" class="nav-link fs-4" @click="handleSignOut" v-if="isLoggenIn">-->
            <!--              <img src="../components/Pictures/TopHeader/icons8-log-out-48.png">-->
            <!--              Çıkış yap</a>-->
            <div style="margin-right: 50px" class="navbar-item has-dropdown is-hoverable" v-if="isLoggenIn">
              <a style="color:dodgerblue;" class="navbar-link fw-bold">
                Profil
              </a>

              <div class="navbar-dropdown">
                <a class="nav-item">
                  <a style="color:dodgerblue;" class="nav-item" @click="handleSignOut">
                    <img src="../components/Pictures/TopHeader/icons8-log-out-48.png">
                    Çıkış yap</a>
                </a>
                <br>
                <a class="nav-item">
                  <router-link tag="li" to="/cart">
                    <a style="color:dodgerblue;" class="nav-item ">
                      <img src="../components/Pictures/TopHeader/icons8-shopping-trolley-64.png">
                      Sepet</a>
                  </router-link>
                </a>

                <hr class="navbar-divider">

              </div>

            </div>


          </div>

        </div>

      </div>

    </div>

  </nav>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "../router";


const isLoggenIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggenIn.value = true
    } else {
      isLoggenIn.value = false
    }
  })

})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })

}

</script>

<style scoped>


nav.topheader {
  background-color: white;
}

</style>

