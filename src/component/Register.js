/* eslint-disable import/no-cycle */
import { navigation } from '../main.js';
import {
  auth, database, createUserWithEmailAndPassword, set, ref,
} from '../firebase/firebase.js';

export const register = () => {
  const windowRegister = document.createElement('div');
  windowRegister.classList.add('windowRegister');

  const formRegister = document.createElement('form');
  formRegister.classList.add('formRegister');

  const welcomeRegister = document.createElement('div');
  welcomeRegister.classList.add('welcomeRegister');
  welcomeRegister.textContent = 'Regístrate en esta nueva aventura viajero!';

  const registerNameDiv = document.createElement('div');
  const registerName = document.createElement('input');
  registerName.setAttribute('placeholder', 'Escribe tu nombre');
  registerName.classList.add('inputs');

  const registerLastNameDiv = document.createElement('div');
  const registerLastName = document.createElement('input');
  registerLastName.setAttribute('placeholder', 'Escribe tus apellidos');
  registerLastName.classList.add('inputs');

  const registerEmailDiv = document.createElement('div');
  const registerEmail = document.createElement('input');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Escribe tu Email');
  registerEmail.classList.add('inputs');

  const registerPaswordDiv = document.createElement('div');
  const registerPasword = document.createElement('input');
  registerPasword.setAttribute('placeholder', 'Escribe tu contraseña');
  registerPasword.setAttribute('type', 'password', 'required');
  registerPasword.classList.add('inputs');

  const btnsRegister = document.createElement('div');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('type', 'submit');
  buttonRegister.classList.add('buttonStyle');
  btnsRegister.classList.add('btnsRegister');
  buttonRegister.textContent = 'Registarse';

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.setAttribute('type', 'submit');
  buttonBackToLogin.classList.add('buttonStyle');
  buttonBackToLogin.textContent = 'Atras';

  windowRegister.appendChild(formRegister);

  formRegister.appendChild(welcomeRegister);
  formRegister.appendChild(registerNameDiv);
  formRegister.appendChild(registerLastNameDiv);
  formRegister.appendChild(registerEmailDiv);
  formRegister.appendChild(registerPaswordDiv);

  registerNameDiv.appendChild(registerName);
  registerLastNameDiv.appendChild(registerLastName);
  registerEmailDiv.appendChild(registerEmail);
  registerPaswordDiv.appendChild(registerPasword);

  btnsRegister.appendChild(buttonRegister);
  btnsRegister.appendChild(buttonBackToLogin);
  formRegister.appendChild(btnsRegister);

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const password = registerPasword.value;
    const email = registerEmail.value;
    const username = registerName.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        formRegister.reset(userCredential); // para resetear el valor del input
        const user = userCredential.user;
        set(ref(database, `user/${user.uid}`), { // Envia a Realtime los campos indicados
          username,
          email,
        });

        alert('Usuario Creado');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(`${errorCode} ${errorMessage}`);
      });
  });

  return windowRegister;
};
