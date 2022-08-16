<template>
  <section class="vh-100 bg-image"
           style="background-image: url('https://wallpaper.dog/large/20459074.jpg');">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Üye Ol</h2>

                <form>

<!--                  <div class="form-outline mb-4">-->
<!--                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />-->
<!--                    <label class="form-label" for="form3Example1cg">Your Name</label>-->
<!--                  </div>-->

                  <div class="form-outline mb-4">
                    <input v-model="email" type="email" id="form3Example3cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example3cg">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input v-model="password" type="password" id="form3Example4cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cg">Şifre</label>
                  </div>

<!--                  <div class="form-outline mb-4">-->
<!--                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />-->
<!--                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>-->
<!--                  </div>-->

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label class="form-check-label" for="form2Example3g">
                       <a href="#!" class="text-body"><u>Üyelik Sözleşmesi'ni okudum, onaylıyorum</u></a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button @click="register" type="button"
                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Üye ol</button>
                  </div>

                   <router-link tag="li" to="/log">
                     <p class="text-center text-muted mt-5 mb-0">Üyeliğim var
                  </p>
                  </router-link>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!--<div class="other">-->
<!--<p class=""><button class="btn btn-primary" @click="signInWithGoogle">google ile üye ol</button></p>-->
<!--</div>-->
<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {useRouter} from "vue-router"
const email = ref("");
const password = ref("");
const router =useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(),email.value,password.value)
      .then((data) =>{
        console.log("Üyelik tamamlandı");
        router.push("/")
      })
      .catch((error)=>{
        console.log(error.code);
        alert(error.message)
      })

}


const signInWithGoogle = () =>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(),provider)
      .then((result)=>{
        console.log(result.user)
        router.push("/")
      })
      .catch((error)=>{

      })
}

</script>

<style>

div.other{

  padding-left: 450px;


}

</style>




<!--import {onMounted,ref} from "vue";-->
<!--import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";-->



<!--const isLoggenIn = ref(false)-->

<!--let auth;-->
<!--onMounted(() =>{-->
<!--auth=getAuth()-->
<!--onAuthStateChanged(auth,(user)=>{-->
<!--if (user){-->
<!--isLoggenIn.value=true-->
<!--}else {-->
<!--isLoggenIn.value = false-->
<!--}-->
<!--})-->

<!--})-->

<!--const handleSignOut = () =>{-->
<!--signOut(auth).then(()=>{-->
<!--router.push("/")-->
<!--})-->

<!--}-->