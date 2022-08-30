import { login } from '../src/component/login.js';

jest.mock('../src/firebase/firebase.js');

describe('LOGIN', () => {
  it('login es una funcion', () => {
    expect(typeof login).toBe('function');
  });

  it('reconocimineto del boton INGRESAR', () => {
    document.body.appendChild(login());
    const buttonLoginTest = document.querySelector('#buttonLogin');
    expect(buttonLoginTest instanceof HTMLElement).toBe(true);
  });

  it('deberia cambiar la vista al ingresar con email y pasword', (done) => {
    document.body.appendChild(login());
    const buttonLogin = document.querySelector('#buttonLogin');
    const loginEmail = document.querySelector('#loginEmail');
    const loginPasword = document.querySelector('#loginPasword');
    loginEmail.value = 'arkelly.perez.alayo@gmail.com';
    loginPasword.value = '123456';

    // document.body.innerHTML = '<div id="root"></div>';

    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(routes[pathname]());

    buttonLogin.click();

    const view = new Promise(process.nextTick);
    view.then(() => {
      expect(window.location.pathname).toBe('/muro');
      done();
    });
  });
});
