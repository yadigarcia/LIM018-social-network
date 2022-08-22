/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
// eslint-disable-next-line import/no-cycle
import { navigation } from '../main.js';
import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';
import { showPostFunt } from './post.js';
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

        <div class="postBodyContainer">ds</div>



    </div>`;

  const containerViewMuro = document.createElement('div');
  containerViewMuro.innerHTML = viewMuro;

  // const postBodyContainer = postBodyContainer.querySelector('.postBodyContainer');

  showPostFunt(containerViewMuro);
  return containerViewMuro;
}
