// import Vue from "vue"
// import Vuex from "vuex"
// import axios from "axios"
// import { router } from "./router"
// import firebase from "firebase";
// import Auth from "./auth/Auth.vue";
//
// Vue.use(Vuex)
//
// const store = new Vuex.Store({
// 	state : {
// 		token : "",
// 		fbAPIKey : "AIzaSyD_cVEcPqUCCkNiSXCa-7m1Pm40fQT6O_s",
//
// 	},
// 	mutations : {
// 		setToken(state,token){
// 			state.token = token
// 		},
// 		clearToken(state){
// 			state.token = ""
// 		}
// 	},
//
//
//
//
//
//
//
//
//
// 	// state : {
// 	// 	token : "",
// 	// 	fbAPIKey : "AIzaSyD_cVEcPqUCCkNiSXCa-7m1Pm40fQT6O_s",
// 	// },
// 	// mutations : {
// 	// 	setToken(state, token){
// 	// 		state.token = token
// 	// 	},
// 	// 	clearToken(state){
// 	// 		state.token = ""
// 	// 	}
// 	// },
// 	actions : {
//
// 		initAuth({commit,dispatch}) {
// 			let token = localStorage.getItem("token")
// 			if (token) {
//
// 				let expirationDate = localStorage.getItem("expirationDate")
// 				let time = new Date().getTime()
// 				if (time >= +expirationDate) {
// 					console.log("token süresi doldu")
// 					dispatch("logout")
// 				}else {
// 					commit("setToken",token)
// 					let timerSecond = +expirationDate -time
// 					console.log(timerSecond)
// 					dispatch("setTimeoutTimer",timerSecond)
// 					router.push("/")
// 				}
// 			}
// 			else {
// 				router.push("/")
// 				return false
// 			}
// 		},
//
// 		// initAuth({ commit, dispatch}){
// 		// 	let token = localStorage.getItem("token")
// 		// 	if(token){
// 		//
// 		// 		let expirationDate = localStorage.getItem("expirationDate")
// 		// 		let time = new Date().getTime()
// 		//
// 		// 		if(time >= +expirationDate){
// 		// 			console.log("token süresi geçmiş...")
// 		// 			dispatch("logout")
// 		// 		} else {
// 		// 			commit("setToken", token)
// 		// 			let timerSecond = +expirationDate - time
// 		// 			console.log(timerSecond)
// 		// 			dispatch("setTimeoutTimer", timerSecond)
// 		// 			router.push("/")
// 		// 		}
// 		//
// 		// 	} else {
// 		// 		router.push("/auth")
// 		// 		return false
// 		// 	}
//
//
// 		login({commit,dispatch,state},authData){
// 			let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
// 			if (authData.isUser){
// 				authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
//
// 			}
// 			return axios.post(
// 				authLink + "AIzaSyD_cVEcPqUCCkNiSXCa-7m1Pm40fQT6O_s",
// 				{email : authData.email, password : authData.password,returnSecureToken : true}
// 			).then(response => {
// 				commit("setToken",response.data.idToken)
// 				localStorage.setItem("token",response.data.idToken)
//
// 				localStorage.setItem("expirationDate", new Date().getTime()+response.data.expiresIn * 1000)
//
// 				dispatch("setTimeoutTimer",response.data.expiresIn * 1000)
// 			})
// 		},
//
// 		// login({ commit, dispatch, state}, authData){
// 		// 	let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
// 		// 	if(authData.isUser){
// 		// 		authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
// 		// 	}
// 		// 	return axios.post(
// 		// 		authLink + "AIzaSyD_cVEcPqUCCkNiSXCa-7m1Pm40fQT6O_s",
// 		// 		{ email :authData.email, password : authData.password, returnSecureToken : true}
// 		// 	).then(response => {
// 		// 		// console.log(response.data)
// 		// 		commit("setToken", response.data.idToken)
// 		// 		localStorage.setItem("token", response.data.idToken)
// 		//
// 		// 		localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000)
// 		// 		// localStorage.setItem("expirationDate", new Date().getTime() + 10000)
// 		//
// 		// 		dispatch("setTimeoutTimer", +response.data.expiresIn * 1000)
// 		// 		// dispatch("setTimeoutTimer", 10000)
// 		// 	})
// 		// },
//
// 		logout({commit}){
// 			commit("clearToken")
// 			localStorage.removeItem("token")
// 			localStorage.removeItem("expirationDate")
// 			router.replace("/auth")
// 		},
// 		setTimeoutTimer({dispatch},expiresIn){
// 			setTimeout(() =>{
// 				dispatch("logout")
// 			},expiresIn)
// 		}
// 	},
// 	getters : {
// 		isAuthenticated(state){
// 			return state.token !== ""
// 		}
// 	}
//
// 	// 	logout({ commit}){
// 	// 		commit("clearToken")
// 	// 		localStorage.removeItem("token")
// 	// 		localStorage.removeItem("expirationDate")
// 	// 		router.replace("/auth")
// 	// 	},
// 	// 	setTimeoutTimer({dispatch}, expiresIn){
// 	// 		setTimeout(() => {
// 	// 			dispatch("logout")
// 	// 		}, expiresIn)
// 	// 	}
// 	// },
// 	// getters : {
// 	// 	isAuthenticated(state){
// 	// 		return state.token !== ""
// 	// 	}
// 	// }
// })
//
// export default store
//
// ------------------
// <template>
// <div class="container">
// 	<div class="row  mt-5">
// 	<div class="col-md-4 offset-4 card card-primary p-3 border"
// :class="{'border-primary' : isUser, 'border-success' : !isUser }">
// 	<h3
// :class="{'text-primary' : isUser, 'text-success' : !isUser }"
// class="text-center mb-3 mt-3">Vue.js | Auth</h3>
// <hr>
// 	<form @submit.prevent="onSubmit">
// 	<div class="form-group">
// 		<label>E-posta Adresiniz</label>
// 		<input v-model="user.email" type="email" class="form-control"
// 			   placeholder="E-posta adresinizi giriniz">
// 	</div>
// 	<div class="form-group">
// 		<label>Şifre</label>
// 		<input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
// 	</div>
// 	<div class="button-container d-flex  flex-column align-items-center">
// 		<button type="submit" :class="{'btn-primary' : isUser, 'btn-success' : !isUser }"
// 		class="btn btn-block mb-2">
// 		{{ isUser ? 'Giriş Yap' : 'Kayıt Ol' }}
// 	</button>
// 	<p><button @click="signInwithGoogle">google ile giriş yap</button></p>
// <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
// {{ isUser ? 'Üye değilim' : 'Üyeliğim var' }}
// </a>
// </div>
// </form>
// </div>
// </div>
// </div>
// </template>
// <script>
//
// 	export default {
// 	data() {
// 	return {
// 	user: {
// 	email: null,
// 	password: null
// },
// 	isUser: false
// }
// },
// 	methods: {
// 	onSubmit() {
// 	this.$store.dispatch("login", { ...this.user, isUser : this.isUser  })
// 	.then(response => {
// 	this.$router.push("/")
// })
// }
// }
// }
// </script>
