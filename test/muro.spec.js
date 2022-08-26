// importamos la funcion que vamos a testear
import { callPost } from '../src/component/post.js';
import { muro } from '../src/component/Muro.js';

// jest.mock('../src/__mocks__/firebase-mock.js');
jest.mock('../src/firebase/firebase.js');

describe('callPost', () => {
  document.body.innerHTML = "<div id='root'></div>";
  const muroTest = muro();

  it('is a function', () => {
    callPost(muroTest);
  //  expect(callPost(muroTest)).toBe('function');
  });
});
