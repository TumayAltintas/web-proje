import { defineStore } from 'pinia'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";



export const useCounterStore = defineStore('counter', {})