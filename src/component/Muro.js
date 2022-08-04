// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
// import { savetask, getTask } from '../firebase/firebase.js';

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.classList.add('muroDiv');
  // muroDiv.id.add = ('task-form');

  const contentMuroForm = document.createElement('form');
  contentMuroForm.classList.add('contentMuroForm');
  //  contentMuroForm.submit();
  // contentMuroForm.setAttribute('method', 'post');
  // contentMuroForm.setAttribute('type', 'submit');
  // contentMuroForm.id.add = ('task-form');

  const titleComment = document.createElement('div');
  titleComment.classList.add('titleComment');

  const commentMuro = document.createElement('input');
  commentMuro.classList.add('commentMuro');

  const titleDescription = document.createElement('div');
  titleDescription.classList.add('titleDescription');

  const taskDescription = document.createElement('textarea');
  taskDescription.classList.add('taskDescription');

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonStyle');

  commentMuro.setAttribute('placeholder', 'Task titulo');
  titleComment.textContent = 'Titulo:';
  titleDescription.textContent = 'Descripcion:';
  buttonBackToLogin.textContent = 'Ir al Inicio';

  // buttonBackToLogin.addEventListener('click', () => navigation('/'));

  contentMuroForm.appendChild(titleComment);
  contentMuroForm.appendChild(commentMuro);
  contentMuroForm.appendChild(titleDescription);
  contentMuroForm.appendChild(taskDescription);
  contentMuroForm.appendChild(buttonBackToLogin);
  muroDiv.appendChild(contentMuroForm);

  // ------------------------  -Evento para obtener los datos de firebase---------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
    const querySnapshot = await getTask();
    querySnapshot.forEach((doc) => {
    // doc.data() convierte a objetos de js
      console.log(doc.data());
    });
  });

  // -------------------- evento para enviar datos a Firestore
  contentMuroForm.addEventListener('submit', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
    e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
    //  console.log(taskDescription.value, commentMuro.value);
    savetask(taskDescription.value, commentMuro.value);
    contentMuroForm.reset(); // borra el contenido
  });

  return muroDiv;
};
