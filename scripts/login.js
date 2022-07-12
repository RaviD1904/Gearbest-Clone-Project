import {topnav,bottomFooter} from "../components/topnavAndBottomFooter.js";
document.querySelector("#top-nav").innerHTML=topnav();
document.querySelector("#bottom-footer").innerHTML=bottomFooter();



document.querySelector(".login-form").addEventListener("submit", loginFun);
    let regUsers = JSON.parse(localStorage.getItem("userDetails"));
   



    function loginFun() {
      event.preventDefault();
      let enteredEmail = document.querySelector("#exampleInputEmail1").value;
      let enteredPassword = document.querySelector("#exampleInputPassword1").value;
      for (let i = 0; i < regUsers.length; i++) {
        if (
          enteredEmail == regUsers[i].email &&
          enteredPassword == regUsers[i].password
        ) {
          alert("Login Successful");
          window.location.href = "../index.html";
          break;  
        } else {
          alert("Login Failed Please Enter Correct Data");
          break;
        }
      }
    }
    





























//         import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
//         import { getDatabase } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
//         import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
//         import { GoogleAuthProvider } from "fhttps://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

        
        

//         import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
        
      
        
//         const firebaseConfig = {
//           apiKey: "AIzaSyA0XBSYg22hvT8OjT0PkUBxb89yMZ9lxfM",
//           authDomain: "gearbeast-clone.firebaseapp.com",
//           databaseURL: "https://gearbeast-clone-default-rtdb.firebaseio.com",
//           projectId: "gearbeast-clone",
//           storageBucket: "gearbeast-clone.appspot.com",
//           messagingSenderId: "857200395625",
//           appId: "1:857200395625:web:e0d60a0b676153274769f8",
//           measurementId: "G-FQQQ4WFQFX"
//         };
      
//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
//         // const analytics = getAnalytics(app);
//         const database=getDatabase(app);
//         const auth = getAuth();
//         let login=document.querySelector("#login");
//         login.addEventListener('click',(e)=>{
//             e.preventDefault();
//    var email = document.getElementById('exampleInputEmail1').value;
//    var password = document.getElementById('exampleInputPassword1').value;

//       signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         // const user = userCredential.user;

//         // const dt = new Date();
//         //  update(ref(database, 'users/' + user.uid),{
//         //   last_login: dt,
//         // })

//          alert('You have successfully logged in!');
//          window.location.href="index.html";
       
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         alert(errorMessage);
//   });

//  });
// document.querySelector("#google-img").addEventListener("click",loginwithGoogle);
//  function loginwithGoogle(){
//     //  e.preventDefault();
//      const provider = new GoogleAuthProvider();

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });

//  }