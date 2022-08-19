/* eslint-disable func-names */
// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savetask, onGetTasks, deleteTasks, auth, signOut,
} from '../firebase/firebase.js';

// const userC = auth.currentUser;
// console.log(userC);
// ............................Construyendo el Muro...............................................
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

const iconExit = document.createElement('i');
iconExit.classList.add('icon');
iconExit.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-arrow-right-from-bracket"></i>');

muroDiv.appendChild(headerContent);

headerContent.appendChild(logoContent);
headerContent.appendChild(iconsContent);

logoContent.appendChild(logo);
logoContent.appendChild(logoName);
iconsContent.appendChild(iconSearch);
iconsContent.appendChild(iconMessage);
iconsContent.appendChild(iconExit);

// New post-----------------------------------------
const newPostDiv = document.createElement('div');
newPostDiv.classList.add('newPostDiv');

const photoUpload = document.createElement('i');
photoUpload.classList.add('iconphoto');
photoUpload.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-image"></i>');

const newPost = document.createElement('input');
newPost.classList.add('newPost');
newPost.setAttribute('placeholder', 'Cuentanos tu aventura Traveller');

const buttonsavepost = document.createElement('button');
buttonsavepost.classList.add('publicar');
// buttonsavepost.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-paper-plane"></i>');

muroDiv.appendChild(newPostDiv);
newPostDiv.appendChild(photoUpload);
newPostDiv.appendChild(newPost);
newPostDiv.appendChild(buttonsavepost);

const bodyContainer = document.createElement('div');// donde esta este elemento?
bodyContainer.classList.add('bodyContainer');

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

  buttonAceptDeletePost.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTasks(idpost);
    muroDiv.removeChild(modalDelete);
  });
};

// ............................Funciones crear Post.........................................
const createPost = function (postDescription, userName, idpost) {
  // console.log(`dentro de createpost${idpost}`);
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  // header del post
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

  const iconPostEdit = document.createElement('i');
  iconPostEdit.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-pencil"></i>');

  const iconPostDelete = document.createElement('button');
  iconPostDelete.classList.add('b');
  // iconPostDelete.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-trash-can"></i>');
  iconPostDelete.setAttribute('id', idpost);

  // cuerpo del post
  const post = document.createElement('div');
  post.classList.add('post');

  const postTextDiv = document.createElement('div');
  postTextDiv.classList.add('postTextDiv');

  const posttext = document.createElement('div');
  posttext.setAttribute('type', 'text');
  posttext.classList.add('posttext');

  const postIcon = document.createElement('div');
  postIcon.classList.add('postIcon');

  const starIcon = document.createElement('i');
  starIcon.classList.add('starIcon');
  starIcon.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-star"></i>');

  const likeIcon = document.createElement('i');
  likeIcon.classList.add('likeIcon');
  likeIcon.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-heart"></i>');

  const comentIcon = document.createElement('i');
  comentIcon.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-comment-dots"></i>');

  const postCommentsDiv = document.createElement('div');
  postCommentsDiv.classList.add('postCommentsContainer');
  const postComments = document.createElement('input');
  postComments.setAttribute('type', 'text');
  postComments.classList.add('postComments');

  iconPostDelete.textContent = 'X';
  postComments.setAttribute('placeholder', 'Comentario...');
  posttext.textContent = postDescription;
  postUserName.innerHTML = `${userName}`;
  bodyContainer.appendChild(postsContainer);// eliminar uno

  postsContainer.appendChild(headerPostContainer);
  postsContainer.appendChild(post);

  headerPostContainer.appendChild(userPostContainer);
  headerPostContainer.appendChild(iconsEditDeletePostContainer);
  userPostContainer.appendChild(postUsePhoto);
  userPostContainer.appendChild(postUserName);
  iconsEditDeletePostContainer.appendChild(iconPostEdit);
  iconsEditDeletePostContainer.appendChild(iconPostDelete);

  post.appendChild(postTextDiv);
  post.appendChild(postIcon);
  post.appendChild(postCommentsDiv);
  postTextDiv.appendChild(posttext);
  postIcon.appendChild(starIcon);
  postIcon.appendChild(likeIcon);
  postIcon.appendChild(comentIcon);
  postCommentsDiv.appendChild(postComments);
  muroDiv.appendChild(bodyContainer);
  // --------------------------evento para borrar post
  iconPostDelete.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    borrarPost(event.target.id);
  });
};

// ------------------------Guardar Posts en Firestore -----------------------
const guardarPost = function () {
// const userC = auth.currentUser;
  // console.log(auth.currentUser.displayName);
  console.log('dentro de guardar post post');
  savetask(auth.currentUser.uid, auth.currentUser.displayName, newPost.value);
};

// -------------------------mostrarPosts-----------------------
const mostrarPosts = function (querySnapshot) {
  bodyContainer.innerHTML = ' ';// consulta si es válido
  querySnapshot.forEach((doc) => {
    const bdmuro = doc.data();

    createPost(bdmuro.postDescription, bdmuro.userName, doc.id);
    console.log('dentro de mostrar post');
  });
};

// ............................Función Principal.........................................
export const muro = () => {
  // ------------------------  -Evento para obtener los datos de firestore-------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => {
    console.log('anted de inner borrar');// async se usa para que funcione await
    //  bodyContainer.innerHTML = ' ';
    onGetTasks((querySnapshot) => {
      console.log('anted de mostrar posts de guardar');
      mostrarPosts(querySnapshot);
      console.log('despues de mostrar posts de guardar');
    });
  });

  return muroDiv;
};

// para salir de la sesion

iconExit.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(auth).then(() => {
  // Sign-out successful.
    alert('Estás seguro que quieres salir');

    navigation('/');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(`${errorCode} ${errorMessage}`);
    muroDiv.innerHTML = ' ';
  });
});

// -------------------- evento para enviar datos a Firestore-----------------------
buttonsavepost.addEventListener('click', (event) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
  event.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
  console.log('antes de guardar');
  guardarPost();
  event.stopPropagation();
  console.log('despues de guardar');
  // newPostDiv.reset(s);
});
