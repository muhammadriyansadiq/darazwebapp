import { initializeApp } from "firebase/app";
import { getAuth,signOut , createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {

    apiKey: "AIzaSyA4NpBdfho9N7hUZKRTpVnDdFFVxOa6jKw",
    authDomain: "bhabaklo.firebaseapp.com",
    projectId: "bhabaklo",
    storageBucket: "bhabaklo.appspot.com",
    messagingSenderId: "667627587420",
    appId: "1:667627587420:web:748c43666060d4518aa399"
    
  };

const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  export{

      app,
      auth,
      createUserWithEmailAndPassword ,
      signInWithEmailAndPassword,
      onAuthStateChanged  ,
      signOut,
      collection, 
      addDoc,
      
  }