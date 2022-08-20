import { defineStore } from 'pinia'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";



export const useCounterStore = defineStore('counter', {
    state: () => ({
        allproduct : []

    }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
       async increment() {
           const querySnapshot = await getDocs(collection(db, 'products'));
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
           });
           this.$store.allproduct.push(productlist)

        },
    },

})