import {createStore} from "vuex";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";


const store = createStore({
    state: {

        products: [],
    },

})


export default store;

