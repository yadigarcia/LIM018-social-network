import { navigation } from '../main.js';

export const register = () => {
  const registerDiv = document.createElement('div');

  registerDiv.textContent = 'Bienvenidos Viajeros';
  const buttonRegister = document.createElement('button');
  const buttonBackToHome = document.createElement('button');

  buttonRegister.textContent = 'Registarse';
  buttonBackToHome.textContent = 'Regresar a Login';

  buttonBackToHome.addEventListener('click', () => navigation('/'));

  registerDiv.appendChild(buttonRegister);
  registerDiv.appendChild(buttonBackToHome);

  return registerDiv;
};
