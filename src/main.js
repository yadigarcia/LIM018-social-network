// eslint-disable-next-line import/no-cycle
import { login } from './component/Login.js';
import { muro } from './component/Muro.js';
import { register } from './component/Register.js';

const rootDiv = document.getElementById('root');
// whitch
const routes = {
  '/': login,
  '/register': register,
  '/muro': muro,
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
// whitch
