/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';

// 1. HEADER DEL MURO, SE VA A MANTENER FIJO.............................
export function muro() {
  const viewMuro = `
    <div id="muroDiv" class="muroDiv">
        <nav class="headerContent">
            <div class="'logoContent">
            <img class="logo" src="img/logo1.png" alt="logo"> </img>
            <p class="logoName">Travelers</p>
            </div>
            <div class="iconsContent">
                <i id="icon" class="fa-solid fa-magnifying-glass"> </i>
                <i id="icon" class="fa-solid fa-envelope"></i>
                <i id="iconExit"class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </nav>

        <form class="newPostDiv">
            <i id="iconPhoto" class="fa-regular fa-image"></i>
            <input type="text" class="newPost" placeholder="Cuentanos tu aventura Traveller"></input>
            <button class="publicar" ><i class="fa-solid fa-paper-plane"></i></button>     
        </form>;

        <!--POST-->

        <div class="postsContainerDiv">
        <div class="headerPostContainer"> 
            <div class="userPostContainer"> 
            <img class=" postUsePhoto">postUsePhoto
            <p class="postUserName"> postUserName</p>
            </div>
            <div class="iconsEditDeletePostContainer"> 
            <i class="fa-solid fa-pencil"></i>
            <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
        <div class="post"> 
                <div class="postTextDiv ">
                <div class="posttext "> posttext</div>
                </div>
                <div class="postIcon "> 
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment-dots"></i>
                </div>
                <div class="postCommentsDiv "> 
                <div class="postComments"> postComments</div>
                </div>
        
  </div>

</div>

    </div>`;

<<<<<<< HEAD
  const containerMuro = document.createElement('div');
  containerMuro.innerHTML = viewMuro;
  return containerMuro;
}
=======
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

// ---------------DONDE SE VA A ESCRIBIR NUEVOS POST------------------------------

const newPostDiv = document.createElement('form');
newPostDiv.classList.add('newPostDiv');

const photoUpload = document.createElement('i');
photoUpload.classList.add('iconphoto');
photoUpload.insertAdjacentHTML('afterbegin', '<i class="fa-regular fa-image"></i>');

const newPost = document.createElement('input'); // -------POST_TEXT_IMPUT
newPost.classList.add('newPost');
newPost.setAttribute('placeholder', 'Cuentanos tu aventura Traveller');

const buttonsavepost = document.createElement('i');
buttonsavepost.classList.add('publicar');
buttonsavepost.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-paper-plane"></i>');

muroDiv.appendChild(newPostDiv);
newPostDiv.appendChild(photoUpload);
newPostDiv.appendChild(newPost);
newPostDiv.appendChild(buttonsavepost);

// -------------------FUNCION PARA BORRAR POST DE FIREBASE-----------------

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

// ........................FUNCION PARA CREAR POST..................................

const createPost = function (postDescription, userName, idpost) {
  // console.log(`dentro de createpost${idpost}`);
  const postsContainerDiv = document.createElement('div');
  postsContainerDiv.classList.add('postsContainerDiv');

  // HEADER_POST
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

  muroDiv.appendChild(postsContainerDiv);
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
  post.appendChild(postCommentsDiv);
  postTextDiv.appendChild(posttext);
  postIcon.appendChild(starIcon);
  postIcon.appendChild(likeIcon);
  postIcon.appendChild(comentIcon);
  postCommentsDiv.appendChild(postComments);

  // --------------------------evento para borrar post
  iconPostDelete.addEventListener('click', (event) => {
    event.preventDefault();
    borrarPost(event.target.id);
  });
};

// ----------------------GUARDAR POST EN FIRESTORE ----
const guardarPost = function () {
  savetask(auth.currentUser.uid, auth.currentUser.displayName, newPost.value);
};

buttonsavepost.addEventListener('click', (e) => {
  e.preventDefault();
  guardarPost();
  newPostDiv.reset();
});

// -----------------------MOSTAR POST A MURO-----------------------

export const muro = () => {
// revisar rama yadi------------
  const mostrarPosts = function (querySnapshot) {
    querySnapshot.forEach((doc) => {
      const bdmuro = doc.data();

      createPost(bdmuro.postDescription, bdmuro.userName, doc.id);
    });
  };

  window.addEventListener('DOMContentLoaded', async () => {

  // ------------------------  -Evento para obtener los datos de firestore-------------------------
  // consults asincrona- querySnapshot es los datos que existen en este momento
  window.addEventListener('DOMContentLoaded', async () => { // async se usa para que funcione await
  
  //Arkelly-rama-------------------
    onGetTasks((querySnapshot) => {
      mostrarPosts(querySnapshot);
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
  });
});

// -------------------- evento para enviar datos a Firestore-----------------------
buttonsavepost.addEventListener('click', (e) => { // submit se ejecuta cuando se hace clic en el boton dentro del form
  e.preventDefault(); // cancerlar el evento por defecto (refrescar la pagina)
  guardarPost();
  newPostDiv.reset();
});
>>>>>>> f4e26b367719d6d2d39f259f2bbe671bb0889b1e
