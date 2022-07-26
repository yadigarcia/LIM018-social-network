// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('registerDiv');

  const containerRegisterDiv = document.createElement('div');
  containerRegisterDiv.classList.add('containerRegisterDiv');

  const welcomeRegister = document.createElement('div');
  welcomeRegister.classList.add('welcomeRegister');
  welcomeRegister.textContent = 'Bienvenido Viajero!';

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonStyle');
  const buttonBackToHome = document.createElement('button');
  buttonBackToHome.classList.add('buttonStyle');

  buttonRegister.textContent = 'Registarse';
  buttonBackToHome.textContent = 'Ir al Inicio';

  buttonRegister.addEventListener('click', () => navigation('/newUser'));
  buttonBackToHome.addEventListener('click', () => navigation('/'));

  registerDiv.appendChild(containerRegisterDiv);
  registerDiv.appendChild(welcomeRegister);
  containerRegisterDiv.appendChild(buttonRegister);
  containerRegisterDiv.appendChild(buttonBackToHome);

  return registerDiv;
};
