// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const muro = () => {
  const muroDiv = document.createElement('form');
  muroDiv.classList.add('muroDiv');

  const contentMuroDiv = document.createElement('div');
  contentMuroDiv.classList.add('contentMuroDiv');

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonStyle');

  buttonBackToLogin.textContent = 'Ir al Inicio';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  contentMuroDiv.appendChild(buttonBackToLogin);
  muroDiv.appendChild(contentMuroDiv);

  return muroDiv;
};
