// import {createStore} from "vuex";
//
// const store = createStore({
// 	state : {
// 		token : "",
// 		fbAPIKey : "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
// 	},
// 	mutations : {
// 		setToken(state, token){
// 			state.token = token
// 		},
// 		clearToken(state){
// 			state.token = ""
// 		}
// 	},
// 	actions : {
// 		initAuth({ commit, dispatch}){
// 			let token = localStorage.getItem("token")
// 			if(token){
//
// 				let expirationDate = localStorage.getItem("expirationDate")
// 				let time = new Date().getTime()
//
// 				if(time >= +expirationDate){
// 					console.log("token süresi geçmiş...")
// 					dispatch("logout")
// 				} else {
// 					commit("setToken", token)
// 					let timerSecond = +expirationDate - time
// 					console.log(timerSecond)
// 					dispatch("setTimeoutTimer", timerSecond)
// 					router.push("/")
// 				}
//
// 			} else {
// 				router.push("/auth")
// 				return false
// 			}
// 		},
// 		login({ commit, dispatch, state}, authData){
// 			let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
// 			if(authData.isUser){
// 				authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
// 			}
// 			return axios.post(
// 				authLink + "AIzaSyANU9F5rwWo9S6xucGvmxF5lm-MyjwXTto",
// 				{ email :authData.email, password : authData.password, returnSecureToken : true}
// 			).then(response => {
// 				// console.log(response.data)
// 				commit("setToken", response.data.idToken)
// 				localStorage.setItem("token", response.data.idToken)
//
// 				localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000)
// 				// localStorage.setItem("expirationDate", new Date().getTime() + 10000)
//
// 				dispatch("setTimeoutTimer", +response.data.expiresIn * 1000)
// 				// dispatch("setTimeoutTimer", 10000)
// 			})
// 		},
// 		logout({ commit}){
// 			commit("clearToken")
// 			localStorage.removeItem("token")
// 			localStorage.removeItem("expirationDate")
// 			router.replace("/auth")
// 		},
// 		setTimeoutTimer({dispatch}, expiresIn){
// 			setTimeout(() => {
// 				dispatch("logout")
// 			}, expiresIn)
// 		}
// 	},
// 	getters : {
// 		isAuthenticated(state){
// 			return state.token !== ""
// 		}
// 	}
// })
//
// export default store