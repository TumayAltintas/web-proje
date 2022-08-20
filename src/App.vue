<template>
  <div>
<header2/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import Header2 from "./Headers/Header2.vue";
import BotHeaders from "./Headers/BotHeaders.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase";
test123
// import {onMounted,ref} from "vue";
// import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
//
//test
//
// const isLoggenIn = ref(false)
//
// let auth;
// onMounted(() =>{
//   auth=getAuth()
//   onAuthStateChanged(auth,(user)=>{
//     if (user){
//       isLoggenIn.value=true
//     }else {
//       isLoggenIn.value = false
//     }
//   })
//
// })
//
// const handleSignOut = () =>{
//   signOut(auth).then(()=>{
//     router.push("/")
//   })
//
// }


export default {
  components: {

    Header2,
    BotHeaders
  },
  data(){
    return{
      product : []
    }
  },



  async mounted() {
    const querySnapshot = await getDocs(collection(db, 'products'));
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
    this.$store.commit('item',this.product)



  },created() {

    console.log(this.$store.getters.bilgisayar)
  }

}
</script>
<style>

</style>





<!--<template>-->
<!--  <div id="nav" v-if="$store.state.user">-->
<!--    <Header2/>-->

<!--    <div>-->
<!--      <router-view></router-view>-->
<!--    </div>-->


<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { RouterLink, RouterView } from 'vue-router'-->
<!--import Header from "./components/Header2.vue";-->
<!--import Header2 from "./Header2.vue";-->
<!--import Duyurular from "./components/Duyurular.vue";-->
<!--import { onBeforeMount } from 'vue'-->
<!--import { useStore } from 'vuex'-->

<!--export default {-->
<!--  components: {-->
<!--    Header,-->
<!--    Header2,-->
<!--    Duyurular-->

<!--  },-->

<!--}-->
<!--</script>-->
<!--<style>-->

<!--</style>-->





