import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getDatabase,set, ref } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA0XBSYg22hvT8OjT0PkUBxb89yMZ9lxfM",
  authDomain: "gearbeast-clone.firebaseapp.com",
  databaseURL: "https://gearbeast-clone-default-rtdb.firebaseio.com",
  projectId: "gearbeast-clone",
  storageBucket: "gearbeast-clone.appspot.com",
  messagingSenderId: "857200395625",
  appId: "1:857200395625:web:e0d60a0b676153274769f8",
  measurementId: "G-FQQQ4WFQFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database=getDatabase(app);
const auth = getAuth();
let signup=document.querySelector("#signup");
signup.addEventListener("click",(e)=>{
    e.preventDefault();
    let email=document.querySelector("#exampleInputEmail1").value;
    let password=document.querySelector("#exampleInputPassword1").value;
let username=document.querySelector("#exampleInputUsername").value;
    createUserWithEmailAndPassword(auth, email, password,username)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
set(ref(database, 'users/' + user.uid),{
  username: username,
  email: email
})
alert("your account has been successfully created go to the login page");
window.location.href="login.html";

})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
alert(errorMessage);
});

})