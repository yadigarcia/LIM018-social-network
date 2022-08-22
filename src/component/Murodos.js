/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';

// 1. HEADER DEL MURO, SE VA A MANTENER FIJO.............................

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.classList.add('muroDiv');

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
  iconExit.setAttribute('id', 'iconExit');
  iconExit.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-arrow-right-from-bracket"></i>');

  muroDiv.appendChild(headerContent);
  headerContent.appendChild(logoContent);
  headerContent.appendChild(iconsContent);

  logoContent.appendChild(logo);
  logoContent.appendChild(logoName);
  iconsContent.appendChild(iconSearch);
  iconsContent.appendChild(iconMessage);
  iconsContent.appendChild(iconExit);

  // 2. DONDE SE VA A ESCRIBIR NUEVOS POST------------------------------

  const newPostDiv = document.createElement('form');
  newPostDiv.classList.add('newPostDiv');

  const photoUpload = document.createElement('i');
  photoUpload.classList.add('iconphoto');
  photoUpload.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-image"></i>');

  const newPost = document.createElement('input');
  newPost.classList.add('newPost');
  newPost.setAttribute('placeholder', 'Cuentanos tu aventura Traveller');
  newPost.setAttribute('type', 'text');

  const buttonsavepost = document.createElement('i');
  buttonsavepost.classList.add('publicar');
  buttonsavepost.setAttribute('id', 'publicar');
  buttonsavepost.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-paper-plane"></i>');

  const showPost = document.createElement('div');
  showPost.innerHTML = createPost(); // hay q probar funcionalidad

  muroDiv.appendChild(newPostDiv);
  newPostDiv.appendChild(photoUpload);
  newPostDiv.appendChild(newPost);
  newPostDiv.appendChild(buttonsavepost);

  iconExit.addEventListener('click', (e) => e.then(exitPost()));

  newPost.addEventListener('input', (e) => {
    const newPostValue = e.target.value;
    console.log(newPostValue);
  });

  //buttonsavepost.addEventListener('click', (e) => e.then(savePost()));

  return muroDiv;
};

const botonenviar = document.querySelectorAll('.publicar');
//botonenviar.textContent = 'holaaaa';
console.log(botonenviar);
//botonenviar.addEventListener('click', savePost());


// 3.FUNCION PARA BORRAR POST DE FIREBASE-----------------

const createPost = (userName, postDescription, idpost) => {
  const postsContainerDiv = document.createElement('div');
  postsContainerDiv.classList.add('postsContainerDiv');

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
  iconPostDelete.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-trash-can"></i>');
  iconPostDelete.setAttribute('id', idpost);

  // CUERPO_POST
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
  // iconPostDelete.textContent = 'X';
  posttext.textContent = `${postDescription}`;
  postUserName.innerHTML = `${userName}`;

  postsContainerDiv.appendChild(headerPostContainer);
  postsContainerDiv.appendChild(post);

  headerPostContainer.appendChild(userPostContainer);
  headerPostContainer.appendChild(iconsEditDeletePostContainer);
  userPostContainer.appendChild(postUsePhoto);
  userPostContainer.appendChild(postUserName);
  iconsEditDeletePostContainer.appendChild(iconPostEdit);
  iconsEditDeletePostContainer.appendChild(iconPostDelete);

  post.appendChild(postTextDiv);
  post.appendChild(postIcon);
  postTextDiv.appendChild(posttext);
  postIcon.appendChild(starIcon);
  postIcon.appendChild(likeIcon);

  // ----evento para editar y e borrar
  // iconPostEdit.addEventListener('click', (e) => {
  //   editPost(e.target.id);
  // });

  // iconPostDelete.addEventListener('click', (e) => {
  //   borrarPost(e.target.id);
  // });

  return postsContainerDiv;
};

window.addEventListener('DOMContentLoaded', async () => {
  onGetTasks((querySnapshot) => {
    mostrarPosts(querySnapshot);
  });
});

// 4. guardar Post en firestore-------------------------------
const savePost = () => {
  const currentUser = auth.currentUser;

  savebdPost(currentUser.uid, currentUser.displayName);
  console.log('aqui');
  // console.log(savebdPost);
};

const mostrarPosts = function (querySnapshot) {
  querySnapshot.forEach((doc) => {
    const bdmuro = doc.data();

    createPost(bdmuro.postDescription, bdmuro.userName, doc.id);
  });
};

// iconPostDelete.addEventListener('click', (event) => {
//   event.preventDefault();
//   borrarPost(event.target.id);
// });

// let borrarPost = function (idpost) {
//   const muroDiv = document.createElement('div');
//   muroDiv.classList.add('muroDiv');

//   const modalDelete = document.createElement('div');
//   modalDelete.classList.add('modalDelete');

//   const buttonAceptDeletePost = document.createElement('button');
//   buttonAceptDeletePost.classList.add('buttonDeletePost');

//   const buttonCancelDeletePost = document.createElement('button');
//   buttonCancelDeletePost.classList.add('buttonDeletePost');

//   modalDelete.textContent = 'Desea borrar el post?';
//   buttonAceptDeletePost.textContent = 'Aceptar';
//   buttonCancelDeletePost.textContent = 'Cancelar';
//   muroDiv.appendChild(modalDelete);
//   modalDelete.appendChild(buttonAceptDeletePost);
//   modalDelete.appendChild(buttonCancelDeletePost);

//   buttonAceptDeletePost.addEventListener('click', AceptDeletePost);
//   // deleteTasks(idpost);
//   buttonCancelDeletePost.addEventListener('click', CancelDeletePost);

//   muroDiv.removeChild(modalDelete);
//   return muroDiv;
// };

// // ........................FUNCION PARA CREAR POST..................................

// // ----------------------GUARDAR POST EN FIRESTORE ----

// buttonsavepost.addEventListener('click', (e) => {
//   e.preventDefault();
//   guardarPost();
//   newPostDiv.reset();
// });

// // -----------------------MOSTAR POST A MURO-----------------------

// para salir de la sesion

const exitPost = () => {
  signOut(auth).then(() => {
    alert('Estás seguro que quieres salir');

    navigation('/');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(`${errorCode} ${errorMessage}`);
  });
};
