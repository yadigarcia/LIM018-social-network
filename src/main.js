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
  window.history.pushState(
    {}, // 1er parametro es el estado, que en ese caso lo estamos enviando vacío
    pathname, // 2do parametro Titulo, enviamos el mismo que recibimos
    window.location.origin + pathname,
  ); // 3ro parametro es la ruta que queremos asignar


  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => { // guarda la ultima navegacion
  rootDiv.appendChild(routes[window.location.pathname]());
};




