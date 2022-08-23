import {
  savebdPost, onGetTasks, auth, signOut,
} from '../firebase/firebase.js';

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
              <i class="fa-solid fa-pencil"></i>
              <i class="fa-solid fa-trash-can"></i>
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

export function sendNewPost() {
  const currentUser = auth.currentUser;

  // savebdPost(currentUser.uid, currentUser.displayName);
  console.log('new poee');
  // console.log(savebdPost);
}

export function showPostFunt(containerMuro) {
  const postBodyContainer = containerMuro.querySelector('.postBodyContainer');
  const buttonSharePost = containerMuro.querySelector('.publicar');
  const inputRe = containerMuro.querySelector('.newPost');
  const currentUser = auth.currentUser;
  console.log('imoutre', inputRe);
  console.log('aqui aut', auth.currentU);
  buttonSharePost.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(auth.currentUser);
    console.log('aqui', auth.currentUser);
    savebdPost(currentUser.uid, currentUser.displayName, inputRe.value);
  });

  getPost(postBodyContainer);
  // sendNewPost();
}
