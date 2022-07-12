import {topnav,bottomFooter} from "../components/topnavAndBottomFooter.js";
document.querySelector("#top-nav").innerHTML=topnav();
document.querySelector("#bottom-footer").innerHTML=bottomFooter();



 document.querySelector("#paymentForm").addEventListener("submit", paymentPage)

 function paymentPage() {

     event.preventDefault();

     let num = '0123456789';
     let OTP = '';

     for (let i = 0; i < 6; i++) {
         OTP += num[Math.floor(Math.random() * 10)];
     }

     localStorage.setItem("otp", JSON.stringify(OTP))

     x = JSON.parse(localStorage.getItem("userDetails"));

     for (let i = 0; i < x.length; i++) {
         mail = x[i]["email"];
     }

     Email.send({
         Host: "smtp.gmail.com",
         Username: "writersboxx@gmail.com",
         Password: "kbphbgfhmyjilrzw",
         To: mail,
         From: "writersboxx@gmail.com",
         Subject: "OTP Received:",
         Body: "Your 6-digit OTP is " + OTP,
     }).then(
         message => {
             if (message == "OK") {
                 alert("OTP has been generated and sent to your Registered email-ID");
             }
         }
     )
  
 };
document.querySelector("#otp_button").addEventListener("click",move_on);
 function move_on() {
     window.location.href = "../otp.html"
 }