/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import { auth } from '../firebase/firebase.js';

export const register = () => {
  const windowRegister = document.createElement('div');
  windowRegister.classList.add('windowRegister');

  const formRegister = document.createElement('form');
  formRegister.classList.add('formview');

  const welcomeRegister = document.createElement('div');
  welcomeRegister.classList.add('welcomeRegister');
  welcomeRegister.textContent = 'Regístrate en esta nueva aventura viajero!';

  const registerNombresDiv = document.createElement('div');
  const registerNombres = document.createElement('input');
  registerNombres.setAttribute('placeholder', 'Escribe tu nombre');
  registerNombres.classList.add('inputs');

  const registerApellidosDiv = document.createElement('div');
  const registerApellidos = document.createElement('input');
  registerApellidos.setAttribute('placeholder', 'Escribe tus apellidos');
  registerApellidos.classList.add('inputs');

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
  formRegister.appendChild(registerNombresDiv);
  formRegister.appendChild(registerApellidosDiv);
  formRegister.appendChild(registerEmailDiv);
  formRegister.appendChild(registerPaswordDiv);

  registerNombresDiv.appendChild(registerNombres);
  registerApellidosDiv.appendChild(registerApellidos);
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

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        buttonRegister.reset();
        console.log(hola);
      });
  });

  return windowRegister;
};
