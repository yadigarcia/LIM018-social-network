/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { navigation } from '../main.js';
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  database,
  ref,
  update,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  providerf,
  userCollection,
} from '../firebase/firebase.js';

export const login = () => {
  const windowlogin = document.createElement('div');
  windowlogin.classList.add('windowlogin');

  const logoLogin = document.createElement('div');
  logoLogin.classList.add('logoLogin');
  const imgLogo = document.createElement('img');
  imgLogo.classList.add('imgLogo');
  const nameLogo = document.createElement('p');
  nameLogo.textContent = 'TRAVELLERS';
  nameLogo.classList.add('nameLogo');

  const formLogin = document.createElement('form');
  formLogin.classList.add('formviewlogin');

  const loginImputDiv = document.createElement('div');
  loginImputDiv.classList.add('loginImputDiv');
  const loginEmail = document.createElement('input');
  loginEmail.classList.add('inputs');
  loginEmail.setAttribute('placeholder', 'Escribe tu Email');

  const loginPasword = document.createElement('input');
  loginPasword.classList.add('inputs');
  loginPasword.setAttribute('type', 'password', 'required');
  loginPasword.setAttribute('placeholder', 'Escribe tu contraseña');

  const btnLoginDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonStyle');
  btnLoginDiv.classList.add('buttonStyleLogin');

  const googleFacebook = document.createElement('div');
  const btnGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const btnFacebook = document.createElement('button');
  const imgFacebook = document.createElement('img');
  googleFacebook.classList.add('googleFacebook');
  btnFacebook.classList.add('imgFacebook');
  btnGoogle.classList.add('imgGoogle');

  const loginQuestionDiv = document.createElement('div');
  const loginQuestionCount = document.createElement('p');
  loginQuestionCount.classList.add('questionAboutCount');
  loginQuestionDiv.classList.add('loginQuestionDiv');
  loginQuestionCount.textContent = '¿No tengo cuenta?';

  const lineLogin = document.createElement('p');
  lineLogin.classList.add('lineLogin');

  const btnToRegister = document.createElement('button');
  btnToRegister.classList.add('buttonStyle');

  buttonLogin.textContent = 'Ingresar';
  lineLogin.textContent = 'ingresar con';
  btnToRegister.textContent = 'Crear Cuenta';

  windowlogin.appendChild(formLogin);

  logoLogin.appendChild(imgLogo);
  logoLogin.appendChild(nameLogo);
  googleFacebook.appendChild(btnGoogle);
  googleFacebook.appendChild(btnFacebook);
  btnGoogle.appendChild(imgGoogle);
  btnFacebook.appendChild(imgFacebook);

  loginImputDiv.appendChild(loginEmail);
  loginImputDiv.appendChild(loginPasword);
  loginQuestionDiv.appendChild(loginQuestionCount);
  btnLoginDiv.appendChild(buttonLogin);
  btnLoginDiv.appendChild(lineLogin);
  btnLoginDiv.appendChild(googleFacebook);
  btnLoginDiv.appendChild(loginQuestionDiv);
  btnLoginDiv.appendChild(btnToRegister);

  formLogin.appendChild(logoLogin);
  formLogin.appendChild(loginImputDiv);
  formLogin.appendChild(btnLoginDiv);

  btnToRegister.addEventListener('click', () => navigation('/register'));

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const email = loginEmail.value;
    const password = loginPasword.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        formLogin.reset(userCredential);

        const dt = new Date();
        const user = userCredential.user;

        update(ref(database, `user/${user.uid}`), {
          last_Login: dt,
        });
        navigation('/muro');
        console.log(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`${errorMessage}`);
      });
  });

  // Ingreso con google-------------------------------------

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        navigation('/muro');
        userCollection(user.uid, user.displayName, user.photoURL);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(`${errorMessage}`);
      });
  });

  // Ingreso con facebook-------------------------------------

  btnFacebook.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithPopup(auth, providerf)
      .then((result) => {
      // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        navigation('/muro');
        userCollection(user.uid, user.displayName, user.photoURL);
      })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        alert(`${errorMessage}`);
      });
  });

  // observador------------------
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ...
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return windowlogin;
};
