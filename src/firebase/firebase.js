/* eslint-disable import/no-unresolved */
// 1. Import y export de FIREBASE------------------------------------------------------------------

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import {
  getDatabase, set, ref, update,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';

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
  getFirestore, // getFirestore nos permite conectarnos con firestore
  collection, // collection nos permite creae una tabla o coleccion de datos en firestore
  addDoc, // Nos permite indicar a FireStre que es lo que quiero hacer (guardar, actualizar,etc)
  getDocs, // Permite traer datos de Firestore
  deleteDoc, // Permite eliminar datos de Firestore
  onSnapshot, // Permite mostrar los datos cuando son enviados
  doc,
  setDoc,
  getDoc,
  updateDoc,
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
export {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
};

export { set, ref, update };

// 2.  Inicializando AUTENTICACION ---------------------------------------------------------------

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const providerf = new FacebookAuthProvider(app);

// 3.  Inicializando FIRESTORE------------------------------------------------------------------

const db = getFirestore(app);

// Funcion para registrar usuarios

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
export const signEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signGoogle = () => signInWithPopup(auth, provider);

export const signFacebook = () => signInWithPopup(auth, providerf);

// Funcion para enviar y almacenar datos en Firestore
export const savebdPost = (uId, userName, postDescription) => {
  addDoc(collection(db, 'bd-muro'), { uId, userName, postDescription });
};

// Funcion para obtener datos de Firestore
export const getPosts = () => getDocs(collection(db, 'bd-muro'));

// Funcion para cuando pase eso estará escuchando modificacion para mostrarlo
export const onGetPosts = (callback) => onSnapshot(collection(db, 'bd-muro'), callback);

// Funcion para eliminar posts de Firestore
export const deletePosts = (id) => deleteDoc(doc(db, 'bd-muro', id));

// Funcion para editar posts de Firestore
export const getPost = (idEdit) => getDoc(doc(db, 'bd-muro', idEdit));

export const updatePost = (idEdit, newFields) => updateDoc(doc(db, 'bd-muro', idEdit), newFields);

// Funcion para mostar nombre de usuario en post
export const userCollection = (uId, nameUser, photoUser) => {
  setDoc(doc(db, 'db-user', uId), {
    id: uId,
    name: nameUser,
    photo: photoUser,
  });
};
