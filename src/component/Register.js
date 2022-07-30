// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList.add('registerDiv');

  const containerRegisterDiv = document.createElement('div');
  containerRegisterDiv.classList.add('containerRegisterDiv');

  const welcomeRegister = document.createElement('div');
  welcomeRegister.classList.add('welcomeRegister');
  welcomeRegister.textContent = 'Regístrate';

  const registerNombres = document.createElement('input');
  registerNombres.classList.add('registerimputs');
  registerNombres.setAttribute('placeholder', 'Escribe tu nombre');

  const registerApellidos = document.createElement('input');
  registerApellidos.classList.add('registerimputs');
  registerApellidos.setAttribute('placeholder', 'Escribe tus apellidos');

  const registerEmail = document.createElement('input');
  registerEmail.classList.add('registerimputs');
  registerEmail.setAttribute('placeholder', 'Escribe tu Email');

  const registerPasword = document.createElement('input');
  registerPasword.classList.add('registerimputs');
  registerPasword.setAttribute('placeholder', 'Escribe tu contraseña');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonStyle');
  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonStyle');

  buttonRegister.textContent = 'Registarse';
  buttonBackToLogin.textContent = 'Iniciar Sesión';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  registerDiv.appendChild(containerRegisterDiv);
  containerRegisterDiv.appendChild(welcomeRegister);
  containerRegisterDiv.appendChild(registerNombres);
  containerRegisterDiv.appendChild(registerApellidos);
  containerRegisterDiv.appendChild(registerEmail);
  containerRegisterDiv.appendChild(registerPasword);

  containerRegisterDiv.appendChild(buttonRegister);
  containerRegisterDiv.appendChild(buttonBackToLogin);

  return registerDiv;
};
