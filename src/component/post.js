/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
// import { async } from 'regenerator-runtime';
import {
  savebdPost, onGetTasks, auth, signOut, deleteTasks, updateTask,
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
export function editPost(idEdit, newInput) {
  updateTask(idEdit, newInput);
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
    // const posttext = containerPost.querySelectorAll('.posttext');// l

    // const modificationInput = () => {
    // posttext.removeAttribute('readonly');

    // const n.innerHTML = ' texto modificado';
    //  const newInput = n;
    // };
    btnEdit.forEach((btnE) => {
      // const idEdit = btnE.id; // id del boton editar
      btnE.addEventListener('click', async (ee) => {
        ee.preventDefault();
        // console.log('2sd', btnE.id);
        // const doc = await getTask(btnE.id);
        // console.log('xxx', doc.data());
        // editPost(idEdit, newInput);
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
