// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savetask, getTask, onGetTasks,
} from '../firebase/firebase.js';

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.classList.add('muroDiv');
  // muroDiv.id.add = ('task-form');

  const headerContent = document.createElement('form');
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

  const contentMuroForm = document.createElement('div');
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

  const userComment = document.createElement('p');
  userComment.classList.add('userComment');

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

  postComments.setAttribute('placeholder', 'Nuevo post...');
  userComment.textContent = 'Arkelly';
  titleDescription.textContent = 'Cuéntanos tu aventura!';
  buttonsavepost.textContent = 'Guardar post';
  buttonBackToLogin.textContent = 'Ir al Inicio';
  /// //////////////////////////////////////////////
  //  headerContent.textContent = 'headerContent';
  logoName.textContent = 'Travelers';
  postUserName.textContent = 'Arkelly';
  // postUsePhoto.textContent = 'postUsePphoto';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  muroDiv.appendChild(headerContent);
  muroDiv.appendChild(contentMuroForm);

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
  postsContainer.appendChild(userComment);
  postsContainer.appendChild(postComments);
  postsContainer.appendChild(buttonsavepost);
  postsContainer.appendChild(buttonBackToLogin);
  // -------------------------------avanzando----

  // ------------------------  -Evento para obtener los datos de firebase---------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
    onGetTasks((querySnapshot) => {
      let html1 = '';
      querySnapshot.forEach((doc) => {
        //   console.log('kff');
        // doc.data();convierte a objetos de js
        const bdmuro = doc.data();
        html1 += ` <div>
         <h3> ${bdmuro.postDescription}</h3> 
         <p> ${bdmuro.userName}</p>
         <Input placeholder="Comentarios..."></Input>
         <button>Guardar Comentario<button>
         <button>Borrar Post<button>
         <button>Editar Post</<button>
         </div> `
        ;
      //   titleposted.innerHTML = task1.title;
      //   desciptionposted.innerHTML = task1.description;
      });
      postdescription.innerHTML = html1;
    });
  });

  // -------------------- evento para enviar datos a Firestore
  // postsContainer.addEventListener('submit', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
  buttonsavepost.addEventListener('click', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
  //  console.log('holi');
    e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
    //   console.log(taskDescription.value, commentMuro.value);
    savetask('Arkelly', postComments.value);
    console.log(userComment.value, postComments.value);
  //  postsContainer.reset(); // borra el contenido
  });

  return muroDiv;
};
