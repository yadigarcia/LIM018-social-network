// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('homeDiv');
  const containerHomeDiv = document.createElement('div');
  containerHomeDiv.classList.add('containerHomeDiv');

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

  buttonLogin.addEventListener('click', () => navigation('/login'));
  buttonRegister.addEventListener('click', () => navigation('/register'));

  homeDiv.appendChild(containerHomeDiv);
  containerHomeDiv.appendChild(inputEmail);
  containerHomeDiv.appendChild(inputPasword);
  containerHomeDiv.appendChild(buttonLogin);
  containerHomeDiv.appendChild(questionAboutCount);
  containerHomeDiv.appendChild(buttonRegister);

  return homeDiv;
};
