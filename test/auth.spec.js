import { register } from '../src/component/Register.js';

jest.mock('../src/firebase/firebase.js');
/*
const registerUserfn = jest.fn((registerUser) => { registerUser('sdds', 'Pasword'); });

registerUserfn((t, s) => {
  console.log(t, s);
}); */

describe('register es una funcion', () => {
  it('', () => {
    expect(typeof register).toBe('function');
  });

  it('register, deberia registar un nuevo usuario', () => {
    document.body.appendChild(register());
    const buttonRegisterTest = document.querySelector('#buttonRegister');

    expect(buttonRegisterTest instanceof HTMLElement).toBe(true);
  });

  it('Mensaje de error', () => {
    document.body.appendChild(register());
    const buttonRegisterTest = document.querySelector('#buttonRegister');
    const pasw = document.querySelector('#registerPasword');
    const messageDivTest = document.querySelector('.messageDiv');
    pasw.value = '';
    buttonRegisterTest.click();

    expect(messageDivTest.textContent).toEqual('Por favor ingresar los datos solicitados');
  });

  it('buttonBackToLogin,deberia mostrar la vista del Login', () => {
    document.body.appendChild(register());
    const buttonBackToLoginTest = document.querySelector('#buttonBackToLogin');

    expect(buttonBackToLoginTest instanceof HTMLElement).toBe(true);
  });

  it('debería mostrar error', () => {
    document.body.appendChild(register());
    const buttonRegisterTest = document.querySelector('#buttonRegister');
    const email = document.querySelector('#registerEmail');
    const pasw = document.querySelector('#registerPasword');
    email.value = 'arkelly.perez.alayo';
    pasw.value = '34';

    buttonRegisterTest.click();
    const messageDivTest = document.querySelector('.messageDiv');
    expect(messageDivTest.textContent).toEqual('Por favor ingresar los datos solicitados');
  });

  it('debería mostrar mensaje de usuario creado', () => {
    document.body.appendChild(register());
    const buttonRegisterTest = document.querySelector('#buttonRegister');
    const email = document.querySelector('#registerEmail');
    const pasw = document.querySelector('#registerPasword');
    const name = document.querySelector('#registerName');
    const lastname = document.querySelector('#registerLastName');
    name.value = 'arkelly';
    lastname.value = 'perez';
    email.value = 'arkelly.perez.alayo@gmail.com';
    pasw.value = '123456';

    buttonRegisterTest.click();
    const messageDivTest = document.querySelector('.messageDiv');
    expect(messageDivTest.textContent).toEqual('Usuario creado');
  });
});
