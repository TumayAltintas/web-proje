import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/auth',component: () => import("../auth/Auth.vue")},
		{path: "/", component: ()=> import("../Anasayfa.vue") ,},
		{path: "/login",component: () => import("../components/LoginComp/log.vue")},
		// {path: '/Hakkimda',component: () => import("../Hakkimizda.vue"), },
		// {path : "/sadece",component: ()=> import("../sadeceUyeler.vue")},
		{path : "/register",component: ()=> import("../components/LoginComp/Register.vue")},
		// {path : '/about',component: () => import('../auth/Auth.vue')},
		{path : '/urundetay/:id', name: 'showdetails', component : () => import('../cart/UrunDetay.vue') },
		{path : "/sepet",component : () => import('../cart/cart.vue') },
		{path : "/Televizyon",component : () => import('../Productpages/Televizyon.vue') },
		{path : "/bilgisayar",component : () => import('../Productpages/Computers.vue') },
		{path : "/Mutfak",component : () => import('../Productpages/Mutfak.vue') },
		// {path : "/test",component : () => import('../cart/test.vue') },
		{path : "/SporUrunleri",component : () => import('../Productpages/SportÜrünleri.vue') },
		{path : "/Listem",component : () => import('../KullanıcıComp/İsteklistem.vue') },
		{path : "/UrunYukle",component : () => import('../yükleme/urunYukle.vue') },
		{path : "/Beyazesya/buzdolabi",component : () => import('../Productpages/buzdolabı.vue') },
		{path : "/bilgisayar/Ram",component : () => import('../Productpages/Ram.vue') },
		{path : "/bilgisayar/Ekrankarti",component : () => import('../Productpages/ekrankarti.vue') },
		{path : "/bilgisayar/Islemci",component : () => import('../Productpages/islemci.vue') },
		{path : "/Beyazesya/camasirmakinesi",component : () => import('../Productpages/Camasır-makinesi.vue') },
		{path : "/Beyazesya/microdalgafirin",component : () => import('../Productpages/Mıcrodalga-fırın.vue') },
	]
});
export default router;