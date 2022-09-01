import { createRouter, createWebHistory } from 'vue-router'
import {getAuth,onAuthStateChanged} from "firebase/auth";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/auth',component: () => import("../auth/Auth.vue")},
		// {path: "/login", component: ()=> import("../components/LoginComp/Login.vue")},
		{path: "/", component: ()=> import("../Anasayfa.vue") ,},
		{path: "/login",component: () => import("../components/LoginComp/log.vue")},
		{path: '/Hakkimda',component: () => import("../Hakkimizda.vue"), },
		{path : "/sadece",component: ()=> import("../sadeceUyeler.vue")},
		{path : "/register",component: ()=> import("../components/LoginComp/Register.vue")},
		{path : '/about',component: () => import('../auth/Auth.vue')},
		{path : '/urundetay/:id', name: 'showdetails', component : () => import('../cart/UrunDetay.vue') },
		{path : "/sepet",component : () => import('../cart/cart.vue') },
		{path : "/Televizyon",component : () => import('../Productpages/Televizyon.vue') },
		{path : "/bilgisayar",component : () => import('../Productpages/Computers.vue') },
		{path : "/fire",component : () => import('../Productpages/Firebaseget.vue') },
		{path : "/Mutfak",component : () => import('../Productpages/Mutfak.vue') },
		{path : "/test",component : () => import('../cart/test.vue') },
		{path : "/SporUrunleri",component : () => import('../Productpages/SportÜrünleri.vue') },
		{path : "/Listem",component : () => import('../KullanıcıComp/İsteklistem.vue') },
		{path : "/UrunYukle",component : () => import('../yükleme/urunYukle.vue') },
		{path : "/Buzdolabı",component : () => import('../Productpages/Buzdolabı.vue') },


	]
});

// const getCurrentUser = () =>{
// 	return new Promise((resolve,reject)=>{
// 		const removeListener = onAuthStateChanged(
// 			getAuth(),
// 			(user)=>{
// 				removeListener();
// 				resolve(user)
// 			},
// 			reject
// 		);
// 	});
// };
//
// router.beforeEach(async (to,from,next) =>{
// 	if (to.matched.some((record)=> record.meta.requiresAuth)){
// 		if (await  getCurrentUser()){
// 			next()
// 		}else {
// 			alert("giriş yasak")
// 			next("/")
// 		}
// 	}
// })


export default router;