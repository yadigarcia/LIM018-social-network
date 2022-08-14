import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

import {
  getDatabase, set, ref, update,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';

import {
  getFirestore, // getFirestore nos permite conectarnos con firestore
  collection, // collection nos permite creae una tabla o coleccion de datos en firestore
  addDoc, // Nos permite indicar a FireStre que es lo que quiero hacer (guardar, actualizar,etc)
  getDocs, // Permite traer datos de Firestore
  onSnapshot, // Permite mostrar los datos cuando son enviados
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDBqQpWxgLbRQOupFwXsIOZfFUfRuKNfnk',
  authDomain: 'travelers-lim018.firebaseapp.com',
  projectId: 'travelers-lim018',
  storageBucket: 'travelers-lim018.appspot.com',
  messagingSenderId: '928230572150',
  appId: '1:928230572150:web:4030d235fab2ba0663df57',
  measurementId: 'G-8Z6J1FH9JZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Autentication auth from Firebase

export const database = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const providerf = new FacebookAuthProvider(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
};
export { set, ref, update };

// FIRESTORE
// Coneccion a la base de datos Firestore
const db = getFirestore();

// Funcion para enviar y almacenar datos en Firestore
export const savetask = (userName, postDescription) => {
//  console.log(title, description);
  addDoc(collection(db, 'bd-muro'), { userName, postDescription });// {} es un objeto que estás enviando
};

// Funcion para obtener datos de Firestore
export const getTask = () => getDocs(collection(db, 'bd-muro'));
// Funcion para cuando pase eso estará escuchando modificacion para mostrarlo
export const onGetTasks = (callback) => onSnapshot(collection(db, 'bd-muro'), callback);
