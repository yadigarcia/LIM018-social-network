// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.classList.add('loginDiv');
  const containerLoginDiv = document.createElement('div');
  containerLoginDiv.classList.add('containerLoginDiv');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputEmailPaword');
  inputEmail.setAttribute('placeholder', 'Escribe tu Email');

  const inputPasword = document.createElement('input');
  inputPasword.classList.add('inputEmailPaword');
  inputPasword.setAttribute('placeholder', 'Escribe tu contraseña');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonStyle');

  const questionAboutCount = document.createElement('p');
  questionAboutCount.classList.add('questionAboutCount');
  questionAboutCount.textContent = '¿No tengo cuenta?';

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonStyle');

  buttonLogin.textContent = 'Ingresar';
  buttonRegister.textContent = 'Crear Cuenta';

  buttonLogin.addEventListener('click', () => navigation('/muro'));
  buttonRegister.addEventListener('click', () => navigation('/register'));

  loginDiv.appendChild(containerLoginDiv);
  containerLoginDiv.appendChild(inputEmail);
  containerLoginDiv.appendChild(inputPasword);
  containerLoginDiv.appendChild(buttonLogin);
  containerLoginDiv.appendChild(questionAboutCount);
  containerLoginDiv.appendChild(buttonRegister);

  return loginDiv;
};
