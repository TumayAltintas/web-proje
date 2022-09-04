import Vue from "vue";
import Vuex from "vuex";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
Vue.use(Vuex);

const state = {
    products: [],

};

const getters = {
    total(state, getters) {
        return getters.cartProducts.reduce((total, p) => {
            return total + p.price * p.quantity;
        }, 0);
    },
    cartProducts: (state) => {
        return state.products.filter((p) => p.quantity !== 0);
    },
    likedProducts: (state) => {
        return state.products.filter((p) => p.liked === "yes");
    },
    itemsInCart: (state, getters) => {
        return getters.cartProducts.reduce(
            (accum, item) => accum + item.quantity,
            0
        );
    },
    itemsInLiked(state, getters) {
        return getters.likedProducts.length;
    },
};

const actions = {
    async getProducts({ commit }) {
        let querySnapshot = await getDocs(collection(db, 'products'));
        let productlist = []
        querySnapshot.forEach((doc) => {
            const list = {
                id: doc.id,
                description: doc.data().description,
                image: doc.data().image,
                name: doc.data().name,
                price: doc.data().price,
                showprice : doc.data().showprice
            }
            productlist.push(list)
            commit("allProducts", productlist);
        });


    },

};

const mutations = {
    allProducts: (state, payload) => {
        payload.forEach((el) => {
            el.price = Math.floor(Math.random() * 5 + 10);
            el.quantity = 0;
            let rand = Math.floor(Math.random() * state.images.length);
            el.src = "images/" + state.images[rand] + ".webp";
            el.liked = "no";
        });
        state.products = payload;
    },

    addToCart: (state, product) => {
        const item = state.products.find((p) => p.id === product.id);
        item.quantity++;
    },

    removeFromCart: (state, product) => {
        const item = state.products.find((p) => p.id === product.id);
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            item.quantity = 0;
        }
    },

    addToLiked: (state, product) => {
        const item = state.products.find((p) => p.id === product.id);
        if (item) {
            item.liked = "yes";
        }
    },
    removeFromLiked: (state, product) => {
        const item = state.products.find((p) => p.id === product.id);
        item.liked = "no";
    },
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
