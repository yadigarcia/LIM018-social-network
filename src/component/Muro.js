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
  const logo = document.createElement('p');
  logo.classList.add('logo');
  const logoName = document.createElement('p');
  logoName.classList.add('logoName');

  const iconsContent = document.createElement('i');
  iconsContent.classList.add('iconsContent');

  /* const iconSearch = document.createElement('i');
  iconSearch.classList.add('icon'); */

  const contentMuroForm = document.createElement('form');
  contentMuroForm.classList.add('contentMuroForm');
  //  contentMuroForm.submit();
  // contentMuroForm.setAttribute('method', 'post');
  // contentMuroForm.setAttribute('type', 'submit');
  // contentMuroForm.id.add = ('task-form');

  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  const headerPostContainer = document.createElement('div');
  headerPostContainer.classList.add('headerPostContainer');

  const postUsePhoto = document.createElement('p');
  postUsePhoto.classList.add('postUsePhoto');

  const postUserName = document.createElement('p');
  postUserName.classList.add('postUserName');

  const postComments = document.createElement('input'); // commentmuro
  postComments.classList.add('postComments');

  const titleComment = document.createElement('div');
  titleComment.classList.add('titleComment');

  const titleDescription = document.createElement('div');
  titleDescription.classList.add('titleDescription');

  const taskDescription = document.createElement('textarea');
  taskDescription.classList.add('taskDescription');

  const postdescription = document.createElement('div');// tritlepost es igual a postdescription
  postdescription.classList.add('postdescription');

  const buttonsavepost = document.createElement('button');
  buttonsavepost.classList.add('buttonMuro');

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonMuro');

  postComments.setAttribute('placeholder', 'Comentario...');
  titleComment.textContent = 'TRAVELERS';
  titleDescription.textContent = 'Cuéntanos tu aventura!';
  buttonsavepost.textContent = 'Guardar post';
  buttonBackToLogin.textContent = 'Ir al Inicio';
  /// //////////////////////////////////////////////
  //  headerContent.textContent = 'headerContent';
  logoName.textContent = 'Travelers';
  postUserName.textContent = 'postUserName';
  postUsePhoto.textContent = 'postUsePphoto';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  muroDiv.appendChild(headerContent);
  muroDiv.appendChild(contentMuroForm);
  muroDiv.appendChild(buttonsavepost);
  muroDiv.appendChild(buttonBackToLogin);
  headerPostContainer.appendChild(postUsePhoto);
  headerPostContainer.appendChild(postUserName);
  contentMuroForm.appendChild(postsContainer);
  /* contentMuroForm.appendChild(taskDescription);
  contentMuroForm.appendChild(titleComment);
  contentMuroForm.appendChild(commentMuro);
  contentMuroForm.appendChild(titleDescription);
  contentMuroForm.appendChild(taskDescription); */

  headerContent.appendChild(logoContent);
  logoContent.appendChild(logo);
  logoContent.appendChild(logoName);
  postsContainer.appendChild(headerPostContainer);
  postsContainer.appendChild(postdescription);
  postsContainer.appendChild(postComments);
  // -------------------------------avanzando----

  // ------------------------  -Evento para obtener los datos de firebase---------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
    const querySnapshot = await getTask();
    let html1 = '';
    querySnapshot.forEach((doc) => {
      // console.log('kff');
      // doc.data() convierte a objetos de js
      const task1 = doc.data();
      html1 += ` <div> <h3> ${task1.description}</h3> <p> ${task1.title}</p> </div> `;
      //   titleposted.innerHTML = task1.title;
      //   desciptionposted.innerHTML = task1.description;
    });
    postdescription.innerHTML = html1;
  });

  // -------------------- evento para enviar datos a Firestore
  contentMuroForm.addEventListener('submit', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
    e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
    //  console.log(taskDescription.value, commentMuro.value);
    savetask(taskDescription.value, postComments.value);
    contentMuroForm.reset(); // borra el contenido
  });

  return muroDiv;
};
