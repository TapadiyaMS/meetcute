import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import {
  SET_USER,
  SET_LOADING_STATUS,
  GET_ARTICLES,
  GET_USERS,
} from "./actionType";

const USER_DETAILS = "userDetails";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload: payload,
});

export function signInAPI() {
  console.log("signInAPI() is called under actions/index.js");

  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log("signInAPI() payload.user: ", payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function signUpAPI(email, password, history) {
  console.log("signUpAPI() is called under actions/index.js");

  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((payload) => {
        console.log(
          "signUpAPI() payload.user: ",
          payload.user.displayName,
          payload.user.email
        );
        dispatch(setUser(payload.user));
        // You can perform any additional actions here, like storing the user data in a database.
        history.push("/home"); // redirect to home page once signed up
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  console.log("getUserAuth() is called under actions/index.js");

  return (dispatch) => {
    dispatch(setLoading(true));

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("getUserAuth() ----> user email:  ", user.email);
        dispatch(setUser(user));
      }
    });
    dispatch(setLoading(false));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

// This function will be called when Home.js is loaded for the first time
export function addUserDetailsAPI(payload) {
  console.log("addUserDetailsAPI() is called under actions/index.js");

  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image) {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection(USER_DETAILS).add({
            actor: {
              email: payload.user.email,
              name: "user",
              about: payload.user.displayName,
              position: payload.user.timestamp,
              bodytype: payload.user.photoURL,
              lookingfor: payload.user.photoURL,
              status: payload.user.photoURL,
              userTrueLocation: payload.user.location,
              userFakeLocation: payload.user.location,
              isActive: true,
            },
            profileImage: downloadURL,
          });
          dispatch(setLoading(false));
        }
      );
    } else {
      db.collection(USER_DETAILS).add({
        actor: {
          email: payload.user.email,
          name: "user",
          about: payload.user.displayName,
          position: payload.user.timestamp,
          bodytype: payload.user.photoURL,
          lookingfor: payload.user.photoURL,
          status: payload.user.photoURL,
          userTrueLocation: payload.user.location,
          userFakeLocation: payload.user.location,
          isActive: true,
        },
        profileImage: null,
      });
      dispatch(setLoading(false));
    }
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.user.timestamp,
              image: payload.user.photoURL,
            },
            sharedImg: downloadURL,
          });
          dispatch(setLoading(false));
        }
      );
    } else {
      console.error("Only posting images are allowed.");
    }
  };
}

export function getArticleAPI(payload) {
  return (dispatch) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      });
  };
}

export function getUsersAPI() {
  console.log("Function getUsersAPI() is called under actions/index.js");

  return (dispatch) => {
    let payload;

    db.collection("userDetails")
      // .orderBy("name")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getUsers(payload));
      });
  };
}
