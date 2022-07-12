import {topnav,bottomFooter} from "../components/topnavAndBottomFooter.js";
document.querySelector("#top-nav").innerHTML=topnav();
document.querySelector("#bottom-footer").innerHTML=bottomFooter();


document.querySelector("#otpForm").addEventListener("submit",otpFun);


function otpFun (){
event.preventDefault();

// 
x=JSON.parse(localStorage.getItem("userDetails"));

for(let i=0; i<x.length; i++)
{
    mail=x[i]["email"];
}


num=document.querySelector('#otp_num').value;
x=JSON.parse(localStorage.getItem('otp'));
console.log(x,num)

if(x==num)
{
alert("Pament Successfull Your order has been successfully placed");
Email.send({
Host : "smtp.gmail.com",
Username : "writersboxx@gmail.com",
Password : "kbphbgfhmyjilrzw",
To : mail,
From : "writersboxx@gmail.com",
Subject : "Order Successfully Placed",
Body : `Transaction Successful:  Your Order number is: 100102. The detailed summary of your purchase and e-generated invoice will be sent to you via mail within 24 hours.                                                                          Thank You for Shopping with Us.`,
}).then(
message => {
  if(message=="OK")
  {
      alert("Check Your Registered Mail for order Details");
      window.location.href="../index.html";
  }
}
);

}
else{
alert("Oops.! Please check your Otp and try again");
document.querySelector("#otp_num").value="";
}

// window.location.href="../index.html";

cartData=[];
localStorage.setItem('cart',JSON.stringify(cartData))

}