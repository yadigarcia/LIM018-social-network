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

  const containerMuro = document.createElement('div');
  containerMuro.innerHTML = viewMuro;
  return containerMuro;
}
