// Este es el punto de entrada de tu aplicacion
import { home } from './component/Home.js';
import { login } from './component/login.js';
import { register } from './component/Register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const navigation = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

rootDiv.appendChild(routes[window.location.pathname]());

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};
