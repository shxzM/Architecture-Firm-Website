import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore ,collection} from "firebase/firestore"
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBb8b0mlle_Q7Y8ibShH1FqtmGc3TBb8zk",
  authDomain: "tashdid-architects.firebaseapp.com",
  projectId: "tashdid-architects",
  storageBucket: "tashdid-architects.firebasestorage.app",
  messagingSenderId: "867517677736",
  appId: "1:867517677736:web:cb832d5e9dae5fbe6ec29d",
  measurementId: "G-64BKZ3HZ4S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);


export const ProjectListCollectionRef = collection(db, "Projects")
export const MessagesCollectionRef = collection(db, "Messages")
export const ClientsCollectionRef = collection(db, "Clients")

export const ADMIN_EMAIL = "sarthverma120@gmail.com";

