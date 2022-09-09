/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */

import {
  savebdPost,
  onGetPosts,
  auth,
  signOut,
  deletePosts,
  getPost,
  // likePost,
  // unLikePost,
  // likePost,
} from '../firebase/firebase.js';
import { navigation } from '../main.js';
import { mostrarPost } from './Muro.js';
import { editarPost } from './modalEditarPost.js';

// 1.enviar y almacenar datos nuevos-------------------------------------------------------------

export function sendNewPost(inputRe) {
  const currentUser = auth.currentUser;
  savebdPost(currentUser.uid, currentUser.displayName, inputRe.value, currentUser.photoURL, []);
}

// 2. Eliminar post---------------------------------------------------------------------

export function deletePost(idpost) {
  deletePosts(idpost);
}

// 4. funcion para mostrar todos los post ----------------------------------------------

export function showPostFunt(containerMuro) {
  callPost(containerMuro);
}

export function callPost(containerMuro) {
  // const btnEditDelete = containerMuro.querySelector('.iconsEditDeletePostContainer');
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

  onGetPosts((querySnapshot) => {
    let viewposts = '';
    querySnapshot.forEach((doc) => {
      viewposts += mostrarPost(doc);// constante q muestra los posts
    });

    // -----------evento para borrar posts......................................
    containerPost.innerHTML = viewposts;// colocando los templates en el div del muro

    const arrayBtnDelete = containerPost.querySelectorAll('.btnDelete');

    arrayBtnDelete.forEach((btn) => {
      btn.addEventListener('click', (c) => {
        c.preventDefault();
        modalDelete.style.display = 'block';

        buttonAceptDeletePost.addEventListener('click', (ea) => {
          ea.preventDefault();
          deletePost(btn.id);
          modalDelete.style.display = 'none';
        });

        buttonCancelDeletePost.addEventListener('click', (ec) => {
          ec.preventDefault();
          modalDelete.style.display = 'none';
        });
      });
    });

    // -----------evento para editar posts......................................
    const arrayBtnEdit = containerPost.querySelectorAll('.btnEdit');

    arrayBtnEdit.forEach((btnE) => {
      btnE.addEventListener('click', async (ez) => {
        ez.preventDefault();
        modalEditPosts.style.display = 'block';
        const doc = await getPost(btnE.id);
        const postData = doc.data();
        const postDescription = postData.postDescription;
        editarPost(doc.id, postDescription, containerMuro);
      });
    });

    //     // -----------evento para dar LIKE------------------
    //     const arrayBtnLike = containerPost.querySelectorAll('.btnLike');
    //     const idUser = auth.currentUser.reloadUserInfo.localId;

    //     arrayBtnLike.forEach((btnL) => {
    //       btnL.addEventListener('click', () => {
    //         //  e.push(likes(idUser, btnL.id));
    //         likes(idUser, btnL.id); // id del usuario y del boton funcionando
    //       });
    //     });
    //   });
    // }

    // export function likes(idUser, btnLi) {
    //   getPost(btnLi).then((post) => {
    //     // let newLike;
    //     const x = post.data(); // post y sus parametros
    //     const idUser = x.uId; // id del usuario
    //     // console.log('x', x);
    //     if (x.likes.includes(idUser)) {
    //       // newLike = idUser;
    //       likePost(idUser, btnLi);
    //       // newLike = { likes: arrayRemove(idUser) };
    //       // btnLi.style.color = '#000000';
    //     } else {
    //       // newLike = { likes: arrayUnion(idUser) };
    //       unLikePost(idUser, btnLi);
    //       // btnLi.style.color = '#7c1097';
    //     }
  });
}

// salir de la sesion--------
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
