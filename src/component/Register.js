/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { navigation } from '../main.js';
import {
  auth, database, createUserWithEmailAndPassword, set, ref, userCollection,
} from '../firebase/firebase.js';

export const register = () => {
  const windowRegister = document.createElement('div');
  windowRegister.classList.add('windowRegister');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('messageDiv');

  const formRegister = document.createElement('form');
  formRegister.classList.add('formRegister');
  formRegister.appendChild(messageDiv);

  const welcomeRegister = document.createElement('div');
  welcomeRegister.classList.add('welcomeRegister');
  welcomeRegister.textContent = 'Regístrate en esta nueva aventura viajero!';

  const registerDateDiv = document.createElement('div');
  registerDateDiv.classList.add('registerDateDiv');
  const registerName = document.createElement('input');
  registerName.setAttribute('placeholder', 'Escribe tu nombre');
  registerName.classList.add('inputs');

  const registerLastName = document.createElement('input');
  registerLastName.setAttribute('placeholder', 'Escribe tus apellidos');
  registerLastName.classList.add('inputs');

  const registerEmail = document.createElement('input');
  registerEmail.setAttribute('type', 'email');
  registerEmail.setAttribute('placeholder', 'Escribe tu Email');
  registerEmail.classList.add('inputs');

  const registerPasword = document.createElement('input');
  registerPasword.setAttribute('placeholder', 'Escribe tu contraseña');
  registerPasword.setAttribute('type', 'password', 'required');
  registerPasword.classList.add('inputs');

  const btnsRegisterDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('type', 'submit');
  buttonRegister.classList.add('buttonStyle');
  btnsRegisterDiv.classList.add('btnsRegisterDiv');
  buttonRegister.textContent = 'Registarse';

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.setAttribute('type', 'submit');
  buttonBackToLogin.classList.add('buttonStyle');
  buttonBackToLogin.textContent = 'Iniciar sesion';

  windowRegister.appendChild(formRegister);

  formRegister.appendChild(welcomeRegister);
  formRegister.appendChild(registerDateDiv);

  registerDateDiv.appendChild(registerName);
  registerDateDiv.appendChild(registerLastName);
  registerDateDiv.appendChild(registerEmail);
  registerDateDiv.appendChild(registerPasword);

  btnsRegisterDiv.appendChild(buttonRegister);
  btnsRegisterDiv.appendChild(buttonBackToLogin);
  formRegister.appendChild(btnsRegisterDiv);

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const username = registerName.value + registerLastName.value;
    const email = registerEmail.value;
    const password = registerPasword.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        formRegister.reset(userCredential);
        const user = userCredential.user;

        set(ref(database, `user/${user.uid}`), { // Envia a Realtime los campos indicados
          username,
          email,
        });
        messageDiv.textContent = 'Usuario creado';
        userCollection(user.uid, username, user.photoURL);
      })
      .catch((error) => {
        const errorMessage = error.message;

        messageDiv.textContent = errorMessage;
      });
  });

  return windowRegister;
};
