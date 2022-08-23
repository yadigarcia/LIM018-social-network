import {
  savebdPost, onGetTasks, auth, signOut, deleteTasks,
} from '../firebase/firebase.js';
import { navigation } from '../main.js';

function mostrarPost(doc) {
  const bdmuro = doc.data();
  const viewpost = `<div class="postsContainerDiv">
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
  return viewpost;
}

// 3. Eliminar post-----
function deletePost(idpost) {
  deleteTasks(idpost);
}

function callPost(containerMuro) {
  const postBodyContainer = containerMuro.querySelector('.postBodyContainer');
  const modalDelete = containerMuro.querySelector('.modalDelete');
  const buttonAceptDeletePost = containerMuro.querySelector('.buttonAceptDeletePost');
  const buttonCancelDeletePost = containerMuro.querySelector('.buttonCancelDeletePost');

  onGetTasks((querySnapshot) => {
    let viewposts = '';
    querySnapshot.forEach((doc) => {
      viewposts += mostrarPost(doc);// fubcion para mostrar los posts
      postBodyContainer.innerHTML = viewposts;
      const btnDelete = postBodyContainer.querySelector('.btnDelete');
      // -----------evento para borrar posts......................................
      btnDelete.addEventListener('click', (e) => {
        e.preventDefault();
        modalDelete.style.display = 'block';

        buttonAceptDeletePost.addEventListener('click', (ef) => {
          ef.preventDefault();

          deletePost(e.target.id);
          modalDelete.style.display = 'none';
        });
        buttonCancelDeletePost.addEventListener('click', (ev) => {
          ev.preventDefault();
          modalDelete.style.display = 'none';
        });
      });
    });
  });
}

// 1.enviar pors nuevos--------
export function sendNewPost(inputRe) {
  const currentUser = auth.currentUser;
  savebdPost(currentUser.uid, currentUser.displayName, inputRe.value);
}

// 2. funcion para mostrar todos los post - funcion principal---
export function showPostFunt(containerMuro) {
  // const postBodyContainer = containerMuro.querySelector('.postBodyContainer');
  const buttonSharePost = containerMuro.querySelector('.publicar');
  const inputRe = containerMuro.querySelector('.newPost');

  callPost(containerMuro);
  buttonSharePost.addEventListener('click', (e) => {
    e.preventDefault();
    sendNewPost(inputRe);
  });
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
