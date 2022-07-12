import {topnav,bottomFooter} from "../components/topnavAndBottomFooter.js";
document.querySelector("#top-nav").innerHTML=topnav();
document.querySelector("#bottom-footer").innerHTML=bottomFooter();


// ----------------------using localStorage-------------------------


document.querySelector(".signup-form").addEventListener("submit",signUpFun);
let signupData=JSON.parse(localStorage.getItem("userDetails"))  ||[];
 console.log(signupData)

        function signUpFun(){
          event.preventDefault();
          console.log("Insidefun")
          let signupObj={
           name:document.querySelector("#exampleInputUsername").value,

           email:document.querySelector("#exampleInputEmail1").value,
          
           password:document.querySelector("#exampleInputPassword1").value,
          
          }
          // console.log(signupObj)
signupData.push(signupObj);
// console.log(signupData);
localStorage.setItem("userDetails", JSON.stringify(signupData));

alert("Your Account has been succeesfully created Go to the login Page");
window.location.href="login.html"
        }


// -------------------------------using firebase------------------------

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// import { getDatabase,set, ref } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyA0XBSYg22hvT8OjT0PkUBxb89yMZ9lxfM",
//   authDomain: "gearbeast-clone.firebaseapp.com",
//   databaseURL: "https://gearbeast-clone-default-rtdb.firebaseio.com",
//   projectId: "gearbeast-clone",
//   storageBucket: "gearbeast-clone.appspot.com",
//   messagingSenderId: "857200395625",
//   appId: "1:857200395625:web:e0d60a0b676153274769f8",
//   measurementId: "G-FQQQ4WFQFX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const database=getDatabase(app);
// const auth = getAuth();
// let signup=document.querySelector("#signup");
// signup.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let email=document.querySelector("#exampleInputEmail1").value;
//     let password=document.querySelector("#exampleInputPassword1").value;
// let username=document.querySelector("#exampleInputUsername").value;
//     createUserWithEmailAndPassword(auth, email, password,username)
// .then((userCredential) => {
// // Signed in 
// const user = userCredential.user;
// set(ref(database, 'users/' + user.uid),{
//   username: username,
//   email: email
// })
// alert("your account has been successfully created go to the login page");
// window.location.href="login.html";

// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// // ..
// alert(errorMessage);
// });

// })