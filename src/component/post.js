/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
// import { async } from 'regenerator-runtime';
import {
  savebdPost, onGetTasks, auth, signOut, deleteTasks, updateTask, getTask,
} from '../firebase/firebase.js';
import { navigation } from '../main.js';
import { mostrarPost } from './Muro.js';

// 1.enviar y almacenar datos nuevos-------------------------------------------------------------

export function sendNewPost(inputRe) {
  const currentUser = auth.currentUser;
  savebdPost(currentUser.uid, currentUser.displayName, inputRe.value);
}

// 2. Eliminar post---------------------------------------------------------------------

export function deletePost(idpost) {
  deleteTasks(idpost);
}

// 3. Editar post---------------------------------------------------------------------
export function editPost(idEdit, newInput, userId, username) {
  updateTask(idEdit, {
    postDescription: newInput,
    uId: userId,
    userName: username,
  });
  // console.log('EDIRT', newInput);
}
// 4. funcion para mostrar todos los post ----------------------------------------------

export function showPostFunt(containerMuro) {
  callPost(containerMuro);
}

export function callPost(containerMuro) {
  const containerPost = containerMuro.querySelector('.containerPost');
  const buttonSharePost = containerMuro.querySelector('.publicar');
  const inputRe = containerMuro.querySelector('.newPost');
  const modalDelete = containerMuro.querySelector('.modalDelete');
  const buttonAceptDeletePost = containerMuro.querySelector('.buttonAceptDeletePost');
  const buttonCancelDeletePost = containerMuro.querySelector('.buttonCancelDeletePost');
  const modalEditPosts = containerMuro.querySelector('.modalEditPost');
  buttonSharePost.addEventListener('click', (e) => {
    e.preventDefault();
    sendNewPost(inputRe);
  });

  onGetTasks((querySnapshot) => {
    let viewposts = '';
    querySnapshot.forEach((doc) => {
      viewposts += mostrarPost(doc);// constante q muestra los posts
    });

    // -----------evento para borrar posts......................................
    containerPost.innerHTML = viewposts;// colocando los templates en el div del muro
    const btnDelete = containerPost.querySelectorAll('.btnDelete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modalDelete.style.display = 'block';
        // console.log('PmosL', containerMuro);
        buttonAceptDeletePost.addEventListener('click', (ef) => {
          ef.preventDefault();
          deletePost(btn.id);
          modalDelete.style.display = 'none';
        });

        buttonCancelDeletePost.addEventListener('click', (ev) => {
          ev.preventDefault();
          modalDelete.style.display = 'none';
        });
      });
    });

    // -----------evento para editar posts......................................
    const btnEdit = containerPost.querySelectorAll('.btnEdit');
    const inputEditPost = containerMuro.querySelector('.inputEditPost');
    const buttonAceptEditPost = containerMuro.querySelector('.buttonAceptEditPost');
    const buttonCancelEditPost = containerMuro.querySelector('.buttonCancelEditPost');
    // const modificationInput = () => {
    // posttext.removeAttribute('readonly');

    // const n.innerHTML = ' texto modificado';
    //  const newInput = n;
    // };
    console.log('ANTEDES DEL FEA');
    btnEdit.forEach((btnE) => {
      // const idEdit = btnE.id; // id del boton editar
      btnE.addEventListener('click', async (ee) => {
        ee.preventDefault();
        modalEditPosts.style.display = 'block';
        console.log('BOTOB', btnEdit);

        const doc = await getTask(btnE.id);
        const postEdit = doc.data();
        inputEditPost.value = postEdit.postDescription;

        buttonAceptEditPost.addEventListener('click', (ed) => {
          ed.preventDefault();
          editPost(btnE.id, inputEditPost.value, postEdit.uId, postEdit.userName);
          modalEditPosts.style.display = 'none';
        });
        buttonCancelEditPost.addEventListener('click', (ec) => {
          ec.preventDefault();
          modalEditPosts.style.display = 'none';
        });
      });
    });
  });
}
// salir de la sesion---
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
