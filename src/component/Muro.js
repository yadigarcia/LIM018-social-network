// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savetask, onGetTasks, deleteTasks,
} from '../firebase/firebase.js';

// ............................Construyendo el Muro.........................................
const muroDiv = document.createElement('div');
muroDiv.classList.add('muroDiv');

// header para muro--------------------------------
const headerContent = document.createElement('div');
headerContent.classList.add('headerContent');

const logoContent = document.createElement('div');
logoContent.classList.add('logoContent');

const logo = document.createElement('img');
logo.classList.add('logo');
const logoName = document.createElement('p');
logoName.classList.add('logoName');
logoName.textContent = 'Travelers';

const iconsContent = document.createElement('div');
iconsContent.classList.add('iconsContent');

const iconSearch = document.createElement('i');
iconSearch.classList.add('icon');
iconSearch.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-magnifying-glass"></i>');

const iconMessage = document.createElement('i');
iconMessage.classList.add('icon');
iconMessage.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-envelope"></i>');

const iconBacktoLogin = document.createElement('i');
iconBacktoLogin.classList.add('icon');
iconBacktoLogin.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-arrow-left"></i>');

const iconExit = document.createElement('i');
iconExit.classList.add('icon');
iconExit.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-arrow-right-from-bracket"></i>');

iconBacktoLogin.addEventListener('click', () => navigation('/'));

muroDiv.appendChild(headerContent);

headerContent.appendChild(logoContent);
headerContent.appendChild(iconsContent);

logoContent.appendChild(logo);
logoContent.appendChild(logoName);
iconsContent.appendChild(iconSearch);
iconsContent.appendChild(iconMessage);
iconsContent.appendChild(iconBacktoLogin);
iconsContent.appendChild(iconExit);

// New post-----------------------------------------
const newPostDiv = document.createElement('div');
newPostDiv.classList.add('newPostDiv');

const photoUpload = document.createElement('i');
photoUpload.classList.add('photoUpload');
photoUpload.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-image"></i>');

const newPost = document.createElement('input');
newPost.classList.add('newPost');
newPost.setAttribute('placeholder', 'Cuentanos tu aventura Traveller');

const buttonsavepost = document.createElement('i');
buttonsavepost.classList.add('publicar');
buttonsavepost.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-paper-plane"></i>');

muroDiv.appendChild(newPostDiv);
newPostDiv.appendChild(photoUpload);
newPostDiv.appendChild(newPost);
newPostDiv.appendChild(buttonsavepost);

const bodyContainer = document.createElement('div');// donde esta este elemento?
bodyContainer.classList.add('bodyContainer');

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
};

// ------------------------Guardar Posts en Firestore -----------------------
const guardarPost = function () {
  savetask('Arkelly', newPost.value);
};

// -------------------------mostrarPosts-----------------------
const mostrarPosts = function (querySnapshot) {
  bodyContainer.innerHTML = ' ';// consulta si es válido
  querySnapshot.forEach((doc) => {
    const bdmuro = doc.data();
    createPost(bdmuro.postDescription, bdmuro.userName, doc.id);
  });
};

// ------------------------ Funcion para borrar post de firestore---------------------------
const borrarPost = function (idpost) {
  const modalDelete = document.createElement('div');
  modalDelete.classList.add('modalDelete');

  const buttonAceptDeletePost = document.createElement('button');
  buttonAceptDeletePost.classList.add('buttonDeletePost');

  const buttonCancelDeletePost = document.createElement('button');
  buttonCancelDeletePost.classList.add('buttonDeletePost');

  modalDelete.textContent = 'Desea borrar el post?';
  buttonAceptDeletePost.textContent = 'Aceptar';
  buttonCancelDeletePost.textContent = 'Cancelar';
  muroDiv.appendChild(modalDelete);
  modalDelete.appendChild(buttonAceptDeletePost);
  modalDelete.appendChild(buttonCancelDeletePost);
  console.log('afuera');
  buttonAceptDeletePost.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTasks(idpost);
    console.log(`${idpost}adentro`);
    muroDiv.removeChild(modalDelete);
  });
};

// ............................Función Principal.........................................
export const muro = () => {
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

  return muroDiv;
};
