
    
    document.querySelector("#confirm").addEventListener("click",confirm)

    function confirm(){
        event.preventDefault();

        

        var name=document.querySelector("#name").value;

        var lastName=document.querySelector("#lastName").value;

        var address=document.querySelector("#address").value;

        var country=document.querySelector("#country").value;

        var state=document.querySelector("#state").vlaue;

        var city=document.querySelector("#city").value;

        var pincode =document.querySelector("#pin").value;

        var mobile=document.querySelector("#mob").value;

        var email=document.querySelector("#email").value;

        
        

        
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("last", JSON.stringify(lastName));
        localStorage.setItem("address", JSON.stringify(address));
        localStorage.setItem("country", JSON.stringify(country));
        localStorage.setItem("country", JSON.stringify(state));
        localStorage.setItem("state", JSON.stringify(state));
        localStorage.setItem("city", JSON.stringify(city));
        localStorage.setItem("pin", JSON.stringify(pincode));
        localStorage.setItem("mobile", JSON.stringify(mobile));
        localStorage.setItem("email", JSON.stringify(email));

        alert("Address updated");

        window.location.href="payment.html"
    }