/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { navigation } from '../main.js';
import {
  auth, signInWithEmailAndPassword, onAuthStateChanged, database, ref, update, signOut,
} from '../firebase/firebase.js';

export const login = () => {
  const windowlogin = document.createElement('div');
  windowlogin.classList.add('windowlogin');

  const formLogin = document.createElement('form');
  formLogin.classList.add('formviewlogin');

  const loginEmailDiv = document.createElement('div');
  const loginEmail = document.createElement('input');
  loginEmail.classList.add('inputslogin');
  loginEmail.setAttribute('placeholder', 'Escribe tu Email');

  const loginPaswordDiv = document.createElement('div');
  const loginPasword = document.createElement('input');
  loginPasword.classList.add('inputslogin');
  loginPasword.setAttribute('type', 'password', 'required');
  loginPasword.setAttribute('placeholder', 'Escribe tu contraseña');

  const btnLoginDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonStyle');
  btnLoginDiv.classList.add('buttonStyleLogin');

  const loginQuestionDiv = document.createElement('div');
  const loginQuestionCount = document.createElement('p');
  loginQuestionCount.classList.add('questionAboutCount');
  loginQuestionDiv.classList.add('questionlogin');
  loginQuestionCount.textContent = '¿No tengo cuenta?';

  const lineLogin = document.createElement('p');
  lineLogin.classList.add('lineLogin');

  const btnToRegister = document.createElement('button');
  btnToRegister.classList.add('buttonStyle');

  buttonLogin.textContent = 'Ingresar';
  btnToRegister.textContent = 'Crear Cuenta';
  lineLogin.textContent = 'Or';

  // lineLogin.textContent = '_____________Or______________';

  buttonLogin.addEventListener('click', () => navigation('/muro'));
  btnToRegister.addEventListener('click', () => navigation('/register'));

  windowlogin.appendChild(formLogin);

  loginEmailDiv.appendChild(loginEmail);
  loginPaswordDiv.appendChild(loginPasword);
  loginQuestionDiv.appendChild(loginQuestionCount);
  btnLoginDiv.appendChild(buttonLogin);
  btnLoginDiv.appendChild(loginQuestionDiv);
  btnLoginDiv.appendChild(btnToRegister);

  formLogin.appendChild(loginEmailDiv);
  formLogin.appendChild(loginPaswordDiv);
  formLogin.appendChild(btnLoginDiv);
  formLogin.appendChild(lineLogin);

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`${errorCode} ${errorMessage}`);
      });

    // observador
    /* const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ...
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    }); */
  });

  return windowlogin;
};
// para salir de la sesion
// variableparasalir.addEventListener('click', (e) => {
//   e.preventDefault();
//   signOut(auth).then(() => {
//   // Sign-out successful.
//     alert('Estas seguro que quieres salir de la pagina');
//   }).catch((error) => {
//   // An error happened.
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     alert(`${errorCode} ${errorMessage}`);
//   });
// });
