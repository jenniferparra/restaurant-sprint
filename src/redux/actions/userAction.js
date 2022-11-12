import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const userRegisterAsync = ({ email, password, name }) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(userRegisterSync({ name, email, error: false }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(userRegisterSync({ error: true, email, name }));
      });
  };
};

const userRegisterSync = ({ name, email, error }) => {
  return {
    type: userTypes.CREATE_USER,
    payload: { name, email, error },
  };
};

export const loginAsync = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response);
      const user = response.user;
      dispatch(loginSync({...user, error:false}))
    })
    .catch((error) => {
      console.log(error)
      dispatch(loginSync({error: true}))
    })

  }
}

const loginSync = (user) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: user
  }
}