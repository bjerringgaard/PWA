import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCbcObXBUqv5fkUqU0Gq_wWq1ZKVs4G15g",
    authDomain: "pwaexam.firebaseapp.com",
    databaseURL: "https://pwaexam.firebaseio.com",
    projectId: "pwaexam",
    storageBucket: "pwaexam.appspot.com",
    messagingSenderId: "768891124902",
    appId: "1:768891124902:web:9f42e1feea494223a1c867"
  };

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');
export const dbOrders = db.collection('orderItems');