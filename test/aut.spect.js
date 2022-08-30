import { register } from '../src/component/Register.js';

jest.mock('../src/firebase/firebase.js');

describe('register es una funcion', () => {
  it('', () => {
    expect(typeof register).toBe('function');
  });
  /* const registerEmail = document.createElement('input');
  registerEmail.classList.add('inputs');

  const registerPasword = document.createElement('input');
  registerPasword.classList.add('inputs');

  const registerLastName = document.createElement('input')
  registerLastName.classList.add('inputs');

  const registerName = document.createElement('input');
  registerName.classList.add('inputs');

  formRegister.appendChild(registerDateDiv);

  registerDateDiv.appendChild(registerName);
  registerDateDiv.appendChild(registerLastName);
  registerDateDiv.appendChild(registerEmail);
  registerDateDiv.appendChild(registerPasword); */

  it('register, deberia registar un nuevo usuario', () => {
    register();
    const x = document.querySelectorAll('buttonRegisterDiv');
    expect(register).toEqual(x);
  });
});
