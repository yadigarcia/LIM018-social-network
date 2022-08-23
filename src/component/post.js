import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';
import { navigation } from '../main.js';

function getPost(pBodyContainer) {
  onGetTasks((querySnapshot) => {
    let viewposts = '';
    querySnapshot.forEach((doc) => {
      const bdmuro = doc.data();

      viewposts += `<div class="postsContainerDiv">
        <div class="headerPostContainer">
           <div class="userPostContainer">
              <img class=" postUsePhoto">
              <p class="postUserName">${bdmuro.userName}</p>
           </div>
           <div class="iconsEditDeletePostContainer">
              <i id="btnEdit" class="fa-solid fa-pencil"></i>
              <button class="btnDelete" id=${doc.id} >x</button>
           </div>
        </div>
        <div class="post">
              <div class="postTextDiv ">
                  <div class="posttext "> ${bdmuro.postDescription}</div>
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
      `;
    });
    pBodyContainer.innerHTML = viewposts;
  });
}

// 1.enviar pors nuevos--------
export function sendNewPost(inputRe) {
  const currentUser = auth.currentUser;
  savebdPost(currentUser.uid, currentUser.displayName, inputRe.value);
}

// 3. Eliminar post-----
function deletePost(btnDelete) {
  console.log(btnDelete);
  /*
  const modalDelete=`
<div class="modalDelete">
  <p> ¿Deseas borra este Post?</p>
  <button class="buttonAceptDeletePost">Aceptar</button>
  <button class="buttonCancelDeletePost">Cancelar</button>
</div>`;

const  buttonAceptDeletePost = modalDelete.querySelector('.buttonAceptDeletePost');
const  buttonCancelDeletePost = modalDelete.querySelector('.buttonCancelDeletePost');

 buttonAceptDeletePost.addEventListener('click', (e) =>{
     deleteTasks(idpost);
 });
  buttonCancelDeletePost.addEventListener('click', CancelDeletePost);
*/
}

// 2. funcion para mostrar todos los post - funcion principal---
export function showPostFunt(containerMuro) {
  const postBodyContainer = containerMuro.querySelector('.postBodyContainer');
  const buttonSharePost = containerMuro.querySelector('.publicar');
  const inputRe = containerMuro.querySelector('.newPost');

  getPost(postBodyContainer);

  buttonSharePost.addEventListener('click', (e) => {
    e.preventDefault();
    sendNewPost(inputRe);
  });
/*
 let templatePost=getPost(postBodyContainer);
  const btnDelete = templatePost.querySelectorAll('#btnDelete');
  console.log(templatePost);
  console.log(btnDelete);
 /* btnDelete.addEventListener('click', (e) => {
    e.preventDefault();
    deletePost(btnDelete);
  }); */
}

// 5. salir de la sesion---
export const exitPost = () => {
  signOut(auth).then(() => {
    alert('Estás seguro que quieres salir');

    navigation('/');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(`${errorCode} ${errorMessage}`);
  });
};
