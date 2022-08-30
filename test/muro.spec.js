// importamos la funcion que vamos a testear
import { callPost } from '../src/component/post.js';
import {
  muro,
  // mostrarPost
} from '../src/component/Muro.js';

// jest.mock('../src/__mocks__/firebase-mock.js');
jest.mock('../src/firebase/firebase.js');

describe('callPost', () => {
  document.body.innerHTML = "<div id='root'></div>";
  const muroTest = muro();

  it('Debería hacer operaciones con los posts como mostrarlos, editarlo y eliminarlos', () => {
    // callPost(muroTest);
    //  expect(muro instanceof HTMLElement).toBe(true);
    expect(callPost(muroTest) instanceof HTMLElement).toBe(true);
  });
});
/*
describe('mostrarPost', () => {
  // const doc = jest.fn();
  // doc.fn();
  // const doc= {''};

  const bdmuro = [{
    doc: {
      data: {
        id: '4nt8dM97lr9AofyQrJpG',
        postDescription: 'lmkkm',
        userName: 'arkelly perez alayo',
      },
    },
  }];

  document.body.innerHTML = "<div id='root'></div>";

  it('Debería hacer operasciones con los posts como mostrarlos, editarlo y eliminarlos', () => {
    mostrarPost(bdmuro);
    //  expect(muro instanceof HTMLElement).toBe(true);
    expect(mostrarPost(bdmuro) instanceof HTMLElement).toBe(true);
  });
});
*/
