<template>
  <section class="vh-100 bg-image"
           style="background-image: url('https://wallpaperaccess.com/full/343619.jpg')">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Üye Ol</h2>

                <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
<!--              <p class="lead fw-normal mb-0 me-3">Sign in with</p>-->
<!--              <button type="button" class="btn btn-primary btn-floating mx-1">-->
<!--                <i class="fab fa-facebook-f"></i>-->
<!--              </button>-->

<!--              <button type="button" class="btn btn-primary btn-floating mx-1">-->
<!--                <i class="fab fa-twitter"></i>-->
<!--              </button>-->

<!--              <button type="button" class="btn btn-primary btn-floating mx-1">-->
<!--                <i class="fab fa-linkedin-in"></i>-->
<!--              </button>-->
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0"></p>
            </div>


            <div class="form-outline mb-4">
              <input v-model="email" type="email" id="form3Example3" class="form-control form-control-lg"
                     placeholder="Enter a valid email address" />
              <label class="form-label" for="form3Example3">Email</label>
            </div>


            <div class="form-outline mb-3">
              <input v-model="password" type="password" id="form3Example4" class="form-control form-control-lg"
                     placeholder="Enter password" />
              <label class="form-label" for="form3Example4">Şifre</label>
            </div>

            <div class="d-flex justify-content-between align-items-center">

              <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Beni hatırla
                </label>
              </div>
              <a href="#!" class="text-body">Şifremi unuttum ?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button @click="register" type="button" class="btn btn-primary btn-lg"
                      style="  padding-left: 2.5rem; padding-right: 2.5rem;">Giriş</button>
              <router-link tag="li" to="/register">
              <p class="text-center text-muted mt-5 mb-0">Üye ol
              </p>
              </router-link>
            </div>

          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  </section>
</template>



<script setup>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {useRouter} from "vue-router"



const email = ref("");
const password = ref("");
const router =useRouter()
const errMsg = ref()

const register = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth,email.value,password.value)
      .then((data) =>{
        console.log("Giriş işlemi başarılı");
        router.push("/")
      })
      .catch((error)=>{
        console.log(error.code);
        switch (error.code){
          case "auth/invalid-email":
            errMsg.value = "Yanlış Email";
            break;
          case "auth/user-not-found":
            errMsg.value = "Bu emaile kayıtlı üyelik bulunamdı";
            break;
          case "auth/worng-password":
            errMsg.value = "Yanlış şifre";
            break;
          default:
            errMsg.value = "Email ya da şifre yanlış";
            break;
        }
      })

}


const signInWithGoogle = () =>{

}
</script>

