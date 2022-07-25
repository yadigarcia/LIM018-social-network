// Este es el punto de entrada de tu aplicacion
import { home } from './component/Home.js';
import { register } from './component/Register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/Register': register,
};

export const navigation = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.appendChild(routes[pathname]());
};

rootDiv.appendChild(routes[window.location.pathname]());
