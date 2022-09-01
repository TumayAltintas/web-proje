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

        <router-link class="navbar-item fs-4" tag="li" to="/UrunYukle">
          <a style="color:dodgerblue;" class=" fw-bold ">UrunYukle</a>
        </router-link>
        <!--        <router-link class="navbar-item fs-4" tag="li" to="/sepet">-->
        <!--          <a style="color:dodgerblue;" class=" fw-bold">sepet</a>-->
        <!--        </router-link>-->

        <!--        <router-link class="navbar-item fs-4" tag="li" to="/test">-->
        <!--          <a style="color:dodgerblue;" class=" fw-bold">test</a>-->
        <!--        </router-link>-->
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
              <router-link tag="li" to="/Buzdolabı">
                <a class="fs-5 fw-bold">buzdolabı</a>
              </router-link>
            </a>
            <br>
            <a class="nav-item">
              <router-link tag="li" to="/Televizyon">
                <a class="fs-5 fw-bold">Televizyon</a>
              </router-link>
            </a>

            <br>
            <a class="nav-item">
              <router-link tag="li" to="/Mutfak">
                <a class="fs-5 fw-bold">Mutfak</a>
              </router-link>
            </a>

            <br>
            <a class="nav-item">
              <router-link tag="li" to="/SporUrunleri">
                <a class="fs-5 fw-bold">Spor Ürünleri</a>
              </router-link>
            </a>
            <hr class="navbar-divider">

          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link tag="li" to="/login">
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
            <div class="navbar-item has-dropdown is-hoverable drop " v-if="isLoggenIn">
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src="src/components/Pictures/icons8-cat-profile-100.png">
                Profil
              </a>


              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                   aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel"></h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                          aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <div class="imgLoc">
                    <img src="src/components/Pictures/TopHeader/bear.png" class="ofcanvas">
                  </div>
                  <div class="ofcanvaslinks">
                    <div class="ofcanvasLink">
                      <a class="nav-item">
                        <router-link tag="li" to="/sepet">
                          <a style="color:dodgerblue;" class="nav-item ">
                            <img style="color: red"
                                 src="../components/Pictures/TopHeader/icons8-shopping-trolley-64.png">
                            Sepet</a>
                        </router-link>
                      </a>
                    </div>
                    <div class="ofcanvasLink">
                      <a class="nav-item">
                        <router-link tag="li" to="/Listem">
                          <a style="color:dodgerblue;" class="nav-item ">
                            <img src="../components/Pictures/ProductDiscription/icons8-favorites-64.png">
                            İstek Listem</a>
                        </router-link>
                      </a>
                    </div>
                    <!--                    <div class="ofcanvasLink">-->
                    <!--                      <a class="nav-item">-->
                    <!--                        <router-link tag="li" to="/cart">-->
                    <!--                          <a style="color:dodgerblue;" class="nav-item ">-->
                    <!--                            <img src="../components/Pictures/ProductDiscription/icons8-hearts-48.png">-->
                    <!--                            Beğendiklerim</a>-->
                    <!--                        </router-link>-->
                    <!--                      </a>-->
                    <!--                    </div>-->
<!--                    <div class="ofcanvasLink">-->
<!--                      <a class="nav-item">-->
<!--                        <router-link tag="li" to="/cart">-->
<!--                          <a style="color:dodgerblue;" class="nav-item ">-->
<!--                            <img src="../components/Pictures/TopHeader/icons8-address-100.png">-->
<!--                            Adreslerim</a>-->
<!--                        </router-link>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="ofcanvasLink">-->
<!--                      <a class="nav-item">-->
<!--                        <router-link tag="li" to="/cart">-->
<!--                          <a style="color:dodgerblue;" class="nav-item ">-->
<!--                            <img src="../components/Pictures/TopHeader/icons8-lock-100.png">-->
<!--                            Güvenlik</a>-->
<!--                        </router-link>-->
<!--                      </a>-->
<!--                    </div>-->
                    <div class="ofcanvasLink">
                      <a class="nav-item">
                        <a style="color:dodgerblue;" class="nav-item" @click="handleSignOut">
                          <img src="../components/Pictures/TopHeader/icons8-log-out-48.png">
                          Çıkış Yap</a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!--              <div class="navbar-dropdown drop ">-->
              <!--                <a class="nav-item">-->
              <!--                  <a style="color:dodgerblue;" class="nav-item" @click="handleSignOut">-->
              <!--                    <img src="../components/Pictures/TopHeader/icons8-log-out-48.png">-->
              <!--                    Çıkış yap</a>-->
              <!--                </a>-->
              <!--                <br>-->
              <!--                <a class="nav-item">-->
              <!--                  <router-link tag="li" to="/cart">-->
              <!--                    <a style="color:dodgerblue;" class="nav-item ">-->
              <!--                      <img src="../components/Pictures/TopHeader/icons8-shopping-trolley-64.png">-->
              <!--                      Sepet</a>-->
              <!--                  </router-link>-->
              <!--                </a>-->

              <!--                <hr class="navbar-divider">-->

            </div>

          </div>


        </div>

      </div>

    </div>

    <!--    </div>-->

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

div.drop {
  width: 100px;


}

div.imgLoc {
  margin-left: 150px;
  margin-top: 3px;


}

div.ofcanvaslinks {
  padding-left: 150px;
  padding-top: 100px;

}

div.ofcanvasLink {
  margin-top: 55px;
}

img.ofcanvas {
  margin-left: 25px;
}

</style>

