import Axios from 'axios';
const URL = 'http://localhost:5000/auth/';

function signIn(email, password) {
  return new Promise((resolve, reject) => {
    Axios.post(URL + 'signin', { email, password })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
}

// async function asyncSignin(email, password) {
//   const req = await Axios.post(URL + 'signin', { email, password });
//   const data = await req.data;
//   console.log(data);
//   return data;
// }

function signOut(userId) {
  return new Promise((resolve, reject) => {
    Axios.get(URL + 'signout/' + userId)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function signUp(params) {
  return new Promise((resolve, reject) => {
    Axios.post(URL + 'signup', params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { signIn, signOut, signUp };
