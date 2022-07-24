export const Register = () => {
  const RegisterDiv = document.createElement('div');

  RegisterDiv.textContent = 'Bienvenidos Viajeros';
  const buttonRegister = document.createElement('button');
  const buttonBackToHome = document.createElement('button');

  buttonRegister.textContent = 'Registarse';
  buttonBackToHome.textContent = 'Regresar';

  RegisterDiv.appendChild(buttonRegister);
  RegisterDiv.appendChild(buttonBackToHome);

  return RegisterDiv;
};
