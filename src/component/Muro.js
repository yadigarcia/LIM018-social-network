// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savetask, getTask, onGetTasks,
} from '../firebase/firebase.js';

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.classList.add('muroDiv');
  // muroDiv.id.add = ('task-form');
  // header muro
  const headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  const logoContent = document.createElement('div');
  logoContent.classList.add('logoContent');
  const logo = document.createElement('img');// img
  logo.classList.add('logo');
  const logoName = document.createElement('p');
  logoName.classList.add('logoName');

  const iconsContent = document.createElement('i');// i
  iconsContent.classList.add('iconsContent');

  const iconSearch = document.createElement('i');
  iconSearch.classList.add('icon');
  const iconMessage = document.createElement('i');
  iconMessage.classList.add('icon');
  const iconBacktoLogin = document.createElement('i');
  iconBacktoLogin.classList.add('i');
  // body
  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('bodyContainer');

  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  const headerPostContainer = document.createElement('div');
  headerPostContainer.classList.add('headerPostContainer');

  const userPostContainer = document.createElement('div');
  userPostContainer.classList.add('userPostContainer');

  const postUsePhoto = document.createElement('img');
  postUsePhoto.classList.add('postUsePhoto');

  const postUserName = document.createElement('p');
  postUserName.classList.add('postUserName');

  const iconPostEdit = document.createElement('i');
  iconPostEdit.classList.add('iconPostEdit');

  const post = document.createElement('div');
  post.classList.add('post');

  const posttext = document.createElement('div');
  posttext.classList.add('posttext');

  const postImg = document.createElement('img');
  postImg.classList.add('postImg');

  // const IconsPostContainer = document.createElement('div');
  //  IconsPostContainer.classList.add('IconsPostContainer');

  const likeIcon = document.createElement('p');
  likeIcon.classList.add('likeIcon');

  const postCommentsContainer = document.createElement('div');
  postCommentsContainer.classList.add('postCommentsContainer');

  const postComments = document.createElement('input'); //
  postComments.classList.add('postComments');

  const userComment = document.createElement('p');
  userComment.classList.add('userComment');

  /* const titleDescription = document.createElement('div');
  titleDescription.classList.add('titleDescription');

  const taskDescription = document.createElement('textarea');
  taskDescription.classList.add('taskDescription'); */

  const postdescription = document.createElement('div');// tritlepost es igual a postdescription
  postdescription.classList.add('postdescription');

  const buttonsavepost = document.createElement('button');
  buttonsavepost.classList.add('buttonMuro');

  const buttonBackToLogin = document.createElement('button');
  buttonBackToLogin.classList.add('buttonMuro');

  postComments.setAttribute('placeholder', 'Comentario...');
  userComment.textContent = 'Arkelly';
  // titleDescription.textContent = 'Cuéntanos tu aventura!';
  buttonsavepost.textContent = 'Guardar post';
  buttonBackToLogin.textContent = 'Ir al Inicio';
  likeIcon.textContent = 'like';
  /// //////////////////////////////////////////////
  logoName.textContent = 'Travelers';
  postUserName.textContent = 'Arkelly';
  // postUsePhoto.textContent = 'postUsePphoto';

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  muroDiv.appendChild(headerContent);
  muroDiv.appendChild(bodyContainer);
  // header muro
  headerContent.appendChild(logoContent);
  logoContent.appendChild(logo);
  logoContent.appendChild(logoName);
  headerContent.appendChild(iconsContent);
  iconsContent.appendChild(iconSearch);
  iconsContent.appendChild(iconMessage);
  iconsContent.appendChild(iconBacktoLogin);
  // body
  bodyContainer.appendChild(postsContainer);
  postsContainer.appendChild(headerPostContainer);
  headerPostContainer.appendChild(userPostContainer);
  userPostContainer.appendChild(postUsePhoto);
  userPostContainer.appendChild(postUserName);
  userPostContainer.appendChild(iconPostEdit);
  postsContainer.appendChild(post);
  post.appendChild(posttext);
  post.appendChild(postImg);
  postsContainer.appendChild(likeIcon);
  postsContainer.appendChild(postCommentsContainer);
  postCommentsContainer.appendChild(postComments);

  muroDiv.appendChild(buttonsavepost);
  muroDiv.appendChild(buttonBackToLogin);

  // -------------------- evento para enviar datos a Firestore
  // postsContainer.addEventListener('submit', (e) => {submit ejecuta al clic en boton dentr de form
  buttonsavepost.addEventListener('click', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
    //  console.log('holi');
    e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
    //   console.log(taskDescription.value, commentMuro.value);
    savetask('Arkelly', post.value);
    console.log(userComment.value, postComments.value);
    //  postsContainer.reset(); // borra el contenido
  });

  // PROBANDO.......................................................
  /* const posts = function viewposts(querySnapshot) {
    bdpost = querySnapshot.forEach((doc) => {
      const bdmuro = doc.data();
      return ` <div>
   <h3> ${bdmuro.postDescription}</h3>
   <p> ${bdmuro.userName}</p>

   </div> `;
    });
  }; */
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

         </div> `;
      //   titleposted.innerHTML = task1.title;
      //   desciptionposted.innerHTML = task1.description;
      });
      post.innerHTML = html1;
    }); 

    onGetTasks((querySnapshot) => {
    //  viewposts(querySnapshot);
  //    post.insertAdjacentHTML('afterbegin', viewposts(querySnapshot).join(''));
  //  });
  });

  return muroDiv;
};
