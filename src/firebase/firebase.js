// eslint-disable-next-line spaced-comment
//Type=module permite importar y exportar codigo
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-cycle
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js';
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
const analytics = getAnalytics(app);
