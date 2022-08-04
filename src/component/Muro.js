// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import { savetask, getTask } from '../firebase/firebase.js';

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.classList.add('muroDiv');
  // muroDiv.id.add = ('task-form');

  const headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  const logoContent = document.createElement('div');
  logoContent.classList.add('logoContent');
  const logo = document.createElement('img');
  logo.classList.add('logo');
  const logoName = document.createElement('p');
  logoName.classList.add('logoName');
  logoName.textContent = 'TRAVELERS';

  const iconsContent = document.createElement('div');
  iconsContent.classList.add('iconsContent');

  const iconSearch = document.createElement('i');
  iconSearch.classList.add('icon');

  logoContent.appendChild('logo');
  logoContent.appendChild('logoName');

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

  const titlepost = document.createElement('div');
  titlepost.classList.add('titlepost');

  const buttonsavepost = document.createElement('button');
  buttonsavepost.classList.add('buttonStyle');

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonStyle');

  commentMuro.setAttribute('placeholder', 'Escribe un título para el post');
  titleComment.textContent = 'TRAVELERS';
  titleDescription.textContent = 'Cuéntanos tu aventura!';
  buttonsavepost.textContent = 'Guardar post';
  buttonBackToLogin.textContent = 'Ir al Inicio';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  contentMuroForm.appendChild(titleComment);
  contentMuroForm.appendChild(commentMuro);
  contentMuroForm.appendChild(titleDescription);
  contentMuroForm.appendChild(taskDescription);
  contentMuroForm.appendChild(buttonsavepost);
  contentMuroForm.appendChild(titlepost);
  contentMuroForm.appendChild(buttonBackToLogin);
  muroDiv.appendChild(contentMuroForm);

  // ------------------------  -Evento para obtener los datos de firebase---------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
    const querySnapshot = await getTask();
    let html1 = '';
    querySnapshot.forEach((doc) => {
      console.log('kff');
      // doc.data() convierte a objetos de js
      const task1 = doc.data();
      html1 += ` <div> <h3> ${task1.description}</h3> <p> ${task1.title}</p> </div> `;
      //   titleposted.innerHTML = task1.title;
      //   desciptionposted.innerHTML = task1.description;
    });
    titlepost.innerHTML = html1;
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
