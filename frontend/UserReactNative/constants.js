import { getFirestore} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import {Firebase_API_KEY} from '@env';

// Firebase configuration
const firebaseConfig = {
  apiKey: Firebase_API_KEY,
  authDomain: "fruitable-76b68.firebaseapp.com",
  projectId: "fruitable-76b68",
  storageBucket: "fruitable-76b68.appspot.com",
  messagingSenderId: "683642091071",
  appId: "1:683642091071:web:696079310e425cde00ea8a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app, {experimentalForceDetectLongPolling: true})
  
export default {
    fetch_url: 'http://192.168.0.108:5000/api/v1/user/',
    firestore : firestore
}