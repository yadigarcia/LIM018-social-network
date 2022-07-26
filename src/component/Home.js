// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('homeDiv');
  const containerHomeDiv = document.createElement('div');
  containerHomeDiv.classList.add('containerHomeDiv');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonStyle');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonStyle');

  buttonLogin.textContent = 'Ingresar';
  buttonRegister.textContent = 'Crear Cuenta';

  buttonLogin.addEventListener('click', () => navigation('/login'));
  buttonRegister.addEventListener('click', () => navigation('/register'));

  homeDiv.appendChild(containerHomeDiv);
  containerHomeDiv.appendChild(buttonLogin);
  containerHomeDiv.appendChild(buttonRegister);

  return homeDiv;
};
