// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const login = () => {
  const windowlogin = document.createElement('div');
  windowlogin.classList.add('windowlogin');

  const formRegister = document.createElement('form');
  formRegister.classList.add('formviewlogin');

  const loginEmailDiv = document.createElement('div');
  const loginEmail = document.createElement('input');
  loginEmail.classList.add('inputslogin');
  loginEmail.setAttribute('placeholder', 'Escribe tu Email');

  const loginPaswordDiv = document.createElement('div');
  const loginPasword = document.createElement('input');
  loginPasword.classList.add('inputslogin');
  loginPasword.setAttribute('placeholder', 'Escribe tu contraseña');

  const btnLoginDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonStyle');
  btnLoginDiv.classList.add('buttonStyleLogin');

  const loginQuestionDiv = document.createElement('div');
  const loginQuestionCount = document.createElement('p');
  loginQuestionCount.classList.add('questionAboutCount');
  loginQuestionDiv.classList.add('questionlogin');
  loginQuestionCount.textContent = '¿No tengo cuenta?';

  const btnToRegister = document.createElement('button');
  btnToRegister.classList.add('buttonStyle');

  buttonLogin.textContent = 'Ingresar';
  btnToRegister.textContent = 'Crear Cuenta';

  buttonLogin.addEventListener('click', () => navigation('/muro'));
  btnToRegister.addEventListener('click', () => navigation('/register'));

  windowlogin.appendChild(formRegister);

  loginEmailDiv.appendChild(loginEmail);
  loginPaswordDiv.appendChild(loginPasword);
  loginQuestionDiv.appendChild(loginQuestionCount);
  btnLoginDiv.appendChild(buttonLogin);
  btnLoginDiv.appendChild(loginQuestionDiv);
  btnLoginDiv.appendChild(btnToRegister);

  formRegister.appendChild(loginEmailDiv);
  formRegister.appendChild(loginPaswordDiv);
  formRegister.appendChild(btnLoginDiv);

  return windowlogin;
};
