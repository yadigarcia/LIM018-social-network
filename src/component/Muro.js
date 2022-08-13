// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savetask, onGetTasks, deleteTasks,
} from '../firebase/firebase.js';

// ............................Construyendo el Muro.........................................
const muroDiv = document.createElement('div');
muroDiv.classList.add('muroDiv');

const bodyContainer = document.createElement('div');
bodyContainer.classList.add('bodyContainer');

const buttonsavepost = document.createElement('button');
buttonsavepost.classList.add('buttonMuro');

const buttonBackToLogin = document.createElement('button');
buttonBackToLogin.classList.add('buttonMuro');
buttonsavepost.textContent = 'Guardar post';
buttonBackToLogin.textContent = 'Ir al Inicio';

const newPost = document.createElement('input');
newPost.classList.add('newPost');
newPost.setAttribute('placeholder', 'Nuevo Post..');

// ------------------------ Funcion para borrar post de firestore---------------------------
const borrarPost = function (idpost) {
  deleteTasks(idpost);
};

// ............................Funciones crear Post.........................................
const createPost = function (postDescription, userName, idpost) {
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  const headerPostContainer = document.createElement('div');
  headerPostContainer.classList.add('headerPostContainer');

  const userPostContainer = document.createElement('div');
  userPostContainer.classList.add('userPostContainer');

  const iconsEditDeletePostContainer = document.createElement('div');
  iconsEditDeletePostContainer.classList.add('iconsEditDeletePostContainer');

  const postUsePhoto = document.createElement('img');
  postUsePhoto.classList.add('postUsePhoto');

  const postUserName = document.createElement('p');
  postUserName.classList.add('postUserName');

  const iconPostEdit = document.createElement('button');
  iconPostEdit.classList.add('iconPostEdit');

  const iconPostDelete = document.createElement('button');
  iconPostDelete.classList.add('iconPostDelete');
  iconPostDelete.setAttribute('id', idpost);

  const post = document.createElement('div');
  post.classList.add('post');

  const posttext = document.createElement('div');
  posttext.classList.add('posttext');

  const postImg = document.createElement('img');
  postImg.classList.add('postImg');

  const likeIcon = document.createElement('button');
  likeIcon.classList.add('likeIcon');

  const postCommentsContainer = document.createElement('div');
  postCommentsContainer.classList.add('postCommentsContainer');

  const postComments = document.createElement('input'); //
  postComments.classList.add('postComments');

  const userComment = document.createElement('p');
  userComment.classList.add('userComment');

  bodyContainer.appendChild(postsContainer);
  postsContainer.appendChild(headerPostContainer);
  headerPostContainer.appendChild(userPostContainer);
  userPostContainer.appendChild(postUsePhoto);
  userPostContainer.appendChild(postUserName);

  headerPostContainer.appendChild(iconsEditDeletePostContainer);
  iconsEditDeletePostContainer.appendChild(iconPostEdit);
  iconsEditDeletePostContainer.appendChild(iconPostDelete);

  postsContainer.appendChild(post);
  post.appendChild(posttext);
  post.appendChild(postImg);
  postsContainer.appendChild(likeIcon);
  postsContainer.appendChild(postCommentsContainer);
  postCommentsContainer.appendChild(postComments);

  postUserName.textContent = 'Arkelly';
  iconPostEdit.textContent = '...';
  iconPostDelete.textContent = 'X';
  postComments.setAttribute('placeholder', 'Comentario...');
  posttext.textContent = postDescription;

  muroDiv.appendChild(bodyContainer);
  // --------------------------evento para borrar post
  iconPostDelete.addEventListener('click', (event) => {
    borrarPost(event.target.id);
  });
//-----------------------------------------------
};

// -------------------------mostrarPosts-----------------------
const mostrarPosts = function (querySnapshot) {
  bodyContainer.innerHTML = ' ';// consulta si es válido
  querySnapshot.forEach((doc) => {
    const bdmuro = doc.data();
    createPost(bdmuro.postDescription, bdmuro.userName, doc.id);
  });
};

// ------------------------Guardar Posts en Firestore -----------------------
const guardarPost = function () {
  savetask('Arkelly', newPost.value);
};
// ............................Función Principal.........................................
export const muro = () => {
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

  buttonBackToLogin.addEventListener('click', () => navigation('/'));

  logoName.textContent = 'Travelers';

  muroDiv.appendChild(headerContent);

  // header muro
  headerContent.appendChild(logoContent);
  logoContent.appendChild(logo);
  logoContent.appendChild(logoName);
  headerContent.appendChild(iconsContent);
  iconsContent.appendChild(iconSearch);
  iconsContent.appendChild(iconMessage);
  iconsContent.appendChild(iconBacktoLogin);
  // -------------------- evento para enviar datos a Firestore-----------------------
  buttonsavepost.addEventListener('click', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
    e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
    guardarPost();
  });
  // ------------------------  -Evento para obtener los datos de firestore-------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
    onGetTasks((querySnapshot) => {
      mostrarPosts(querySnapshot);
    });
  });

  muroDiv.appendChild(newPost);
  muroDiv.appendChild(buttonsavepost);
  muroDiv.appendChild(buttonBackToLogin);
  return muroDiv;
};
