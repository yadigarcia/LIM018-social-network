export function registerUser(email, password) {
  if (email === 'arkelly.perez.alayo@gmail.com' && password === '123456') {
    return Promise.resolve({
      user: {
        uid: 'jbkjnmnmn',
      },
    });
  }

  return Promise.reject(new Error());
}
