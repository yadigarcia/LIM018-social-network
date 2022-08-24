// importamos la funcion que vamos a testear

/*
import {
  sendNewPost, deletePost, editPost, showPostFunt, callPost, exitPost,
} from '../src/component/post.js'; */

import { callPost } from '../src/component/post.js';
import { muro } from '../src/component/Muro.js';

// jest.mock('../src/firebase/firebase.js');
jest.mock('../../firebase.js');

describe('callPost', () => {
  document.body.innerHTML = "<div id='root'></div>";

  const muroTest = muro();

  it('is a function', () => {
    callPost(muroTest);
  //  expect(callPost(muroTest)).toBe('function');
  });
});
