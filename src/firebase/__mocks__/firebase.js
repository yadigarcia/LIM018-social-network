export function registerUser(email, password) {
  if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
    return Promise.resolve({
      user: {
        uid: 'abc123',
        username: 'arkelly perez alayo',
        photoURL: '',
      },
    });
  }

  return Promise.reject(new Error());
}
export function signEmail(email, password) {
  if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
    return Promise.resolve({
      user: {
        uid: 'abc123',
        username: 'arkelly perez alayo',
        photoURL: '',
      },
    });
  }

  return Promise.reject(new Error());
}

export const signGoogle = jest.fn(() => Promise.resolve({ user: 'arkelly perez alayo', photoURL: '' }));

export const signFacebook = jest.fn(() => Promise.resolve({ user: 'arkelly perez alayo', photoURL: '' }));

export const update = jest.fn();

export const set = jest.fn();

export const ref = jest.fn();

export const database = {};

export const onGetPosts = jest.fn();

export const provider = jest.fn();

export const providerf = jest.fn();

export const userCollection = jest.fn();
