import { Navigation } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Ingresar';
  buttonRegister.textContent = 'Crear una Cuenta';

  buttonRegister.addEventListener('click', () => Navigation('./Register'));

  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonRegister);

  return HomeDiv;
};
