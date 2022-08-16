import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import {router} from "./router"


Vue.use(Vuex)


export  default  new Vuex.Store({
	state : {
		token : "",
		fbAPIKey: "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",

	},

	mutations : {
		setToken(state,token){
			state.token = token
		}
	},

	actions : {
		initAuth({commit, dispatch}) {
			let  token = localStorage.getItem("token")
			if (token) {
				let expirationDate = localStorage.getItem("expirationDate")
				let time = new Date().getTime()
				if (time >= expirationDate){
					alert("token süresi doldu")
					dispatch("logout")
				}else {
					commit("setToken",token)
					let timersecond = +expirationDate -time
					console.log(timersecond)
					dispatch("setTimeoutTimer",timersecond)
					router.push("/")
				}
			}else{
				router.push("/auth")
				return false
			}
		},
		login({commit, dispatch, state}, authData) {
			let  autLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
				if (authData.isUser){
					autLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
				}
				return axios.post(
					autLink + "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
				{email: authData.email, password: authData.password, returnSecureToken : true}
			).then(response =>{
				commit("setToken",response.data.idToken)
				localStorage.setItem("token",response.data.idToken)
				localStorage.setItem("expirationDate",new Date().getTime() + + response.data.expiresIn * 1000)

				dispatch("setTimeoutTimer", + response.data.expiresIn * 1000)

			})
		},
		logout({commit}){
			commit("clearToken")
			localStorage.removeItem("token")
			localStorage.removeItem("expirationDate")
			router.replace("/auth")
		},
		setTimeoutTimer({dispatch}, expiresIn) {
			setTimeout(() =>{
				dispatch("logout")

			},expiresIn)
		}

	},
	getters : {
		isAuthenticated(state){
			return state.token !== ""
		}
	}


})





