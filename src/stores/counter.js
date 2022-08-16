import {createStore} from "vuex";
import {collection, getDocs} from "firebase/firestore";

import {db} from "../firebase";


const store = createStore({
    state: {

        products: [],
    },
    mutations: {
        item(state, item) {
            state.products.push(item)
        }
    },

    getters : {
        bilgisayar : state => state.products.filter(i => i.kategori==='bilgisayar')
    }




})


export default store;

