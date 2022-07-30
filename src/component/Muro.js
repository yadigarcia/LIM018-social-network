// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const muro = () => {
  const loginDiv = document.createElement('div');
  loginDiv.classList.add('loginDiv');

  const contentloginDiv = document.createElement('div');
  contentloginDiv.classList.add('contentloginDiv');

  const buttonBackToHome = document.createElement('button');
  buttonBackToHome.classList.add('buttonStyle');

  buttonBackToHome.textContent = 'Ir al Inicio';

  buttonBackToHome.addEventListener('click', () => navigation('/'));

  contentloginDiv.appendChild(buttonBackToHome);
  loginDiv.appendChild(contentloginDiv);

  return loginDiv;
};
