<template>
  <div>
<header2/>
    <div>
      <router-view></router-view>
    </div>
    {{querySnapshot}}
  </div>
</template>
<script>

import Header2 from "./Headers/Header2.vue";
import BotHeaders from "./Headers/BotHeaders.vue";



//tester

export default {
  components: {

    Header2,
    BotHeaders
  },



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





