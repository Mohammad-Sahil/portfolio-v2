// firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCPIz5z44LG1Br5T_F3l9Y2_O435jYqbDY',
  authDomain: 'portfolio-22e25.firebaseapp.com',
  projectId: 'portfolio-22e25',
  storageBucket: 'portfolio-22e25.firebasestorage.app',
  messagingSenderId: '25340420364',
  appId: '1:25340420364:web:d096d50a72745e5f7da929',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const db = getFirestore(app)
// const auth = getAuth(app);
// const storage = getStorage(app);

export {
  app,
  db,
  // auth,
  // storage
}
