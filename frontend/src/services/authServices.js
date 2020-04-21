import firebase from 'firebase';

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
            resolve(response.user);
          })
          .catch((err) => {
            reject(err);
          });
      });
  });
};

const signOut = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const signUp = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response.user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { signUp, signIn, signOut };
