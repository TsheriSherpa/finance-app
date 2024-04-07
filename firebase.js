
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7_V5_ZgXD3t0Q4SmMidp8ZdM-k9U5Ntg",
    authDomain: "cross-platform-f678f.firebaseapp.com",
    projectId: "cross-platform-f678f",
    storageBucket: "cross-platform-f678f.appspot.com",
    messagingSenderId: "985476524297",
    appId: "1:985476524297:web:c757e976b44c9aff4d4bd8"
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionName = 'transactions';
const dbCollection = collection(db, collectionName);



export const firebaseHelper = {
    fetchTransactions() {
        console.log("data")
        return getDocs(dbCollection)
    },

    addTransaction(newTransaction) {
        return addDoc(dbCollection, newTransaction)
    },
}


export {app, db };
