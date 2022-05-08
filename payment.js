document.querySelector("form").addEventListener("submit",payment);



function  payment(){
    event.preventDefault();
   
     
    var name=document.querySelector("#name").value;

    var cardno=document.querySelector("#cNum").value;

    var cvv=document.querySelector("#cvv").value;

    var edate=document.querySelector("#edate").value;

   

    alert("Order Placed Proceed to Home Page");
    

}