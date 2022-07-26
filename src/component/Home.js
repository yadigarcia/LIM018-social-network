import { navigation } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Ingresar';
  buttonRegister.textContent = 'Crear una Cuenta';

  buttonRegister.addEventListener('click', () => navigation('/register'));

  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};
