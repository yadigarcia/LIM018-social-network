// eslint-disable-next-line spaced-comment
//Type=module permite importar y exportar codigo
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-cycle
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import {
  getFirestore, // getFirestore nos permite conectarnos con firestore
  collection, // collection nos permite creae una tabla o coleccion de datos en firestore
  addDoc, // Nos permite indicar a FireStre que es lo que quiero hacer (guardar, actualizar,etc)
  getDocs, // Permite traer datos de Firestore
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
// Coneccion a la base de datos Firestore
const db = getFirestore();

// Funcion para enviar y almacenar datos en Firestore
export const savetask = (title, description) => {
  console.log(title, description);
  addDoc(collection(db, 'asks'), { title, description });// {} es un objeto que estás enviando
};

// Funcion para obtener datos de Firestore
export const getTask = () => getDocs(collection(db, 'asks'));
