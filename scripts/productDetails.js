let clickedItem=JSON.parse(localStorage.getItem("clickedItem"));
import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML=footer();

const container=document.querySelector(".parent-container");

let cartArr=JSON.parse(localStorage.getItem("cart")) || [];

function showInfo(){
    let left_container=document.querySelector(".left-container");
    let img1=document.createElement("img");
    img1.src=clickedItem.goodsImage;
    left_container.append(img1);

    let right_container=document.querySelector(".right-container");
    let h2=document.createElement("h2");
    h2.innerText=clickedItem.goodsTitle;
    let smalldiv=document.createElement("div");

    let img2=document.createElement("img");
    img2.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKuXuJFrNBPEdz6UrdTqvxhO1_fLq1-NmFw3ko7_Qf7tzFlORV";
    img2.style.width="200px"
   
    let h3=document.createElement("h2");
    h3.innerText="4.6";
    h3.style.marginBottom="-.0px";
    h3.style.marginLeft="20px";

    h3.style.color="#rgb(253,182,42)"
    smalldiv.style.display="flex";
    smalldiv.append(img2,h3);
    let p1=document.createElement("h4");
    p1.innerText=`Product SnCode:  ${clickedItem.goodsSn}`; ;
   
    let p2=document.createElement("p");
    p2.innerText = "  ✓Paid Shipping   ✓Cash On Delivery  "
    let p3=document.createElement("p");
    p3.innerText=" Delivery in 4 - 6 Working Days";
    let h1=document.createElement("h1");
    h1.innerText=`Price:   $ ${clickedItem.displayPrice}`;
    h1.style.color="#F30240";
    h1.style.marginBottom="150px"
    h1.style.marginTop="50px";

    let btn1=document.createElement("btn");
    btn1.setAttribute("id","addToCart");
    btn1.innerText="Add To Cart";
    btn1.addEventListener("click",()=>{
        addToCart(clickedItem);
    })
    let btn2=document.createElement("btn");
    btn2.setAttribute("id","buyNow");
    btn2.innerText="Buy Now";
    btn2.addEventListener("click",()=>{
        buyNow(clickedItem);
    })
    let btn3=document.createElement("btn");
    btn3.setAttribute("id","paypal");
    btn3.innerText="Paypal";
    btn3.addEventListener("click",paypal);
    
    right_container.append(h2,smalldiv,p1,p2,p3,h1,btn1,btn2,btn3);

container.append(left_container,right_container);
}
showInfo();

function addToCart(){
cartArr.push(clickedItem);
alert("item added to cart");
localStorage.setItem("cart",JSON.stringify(cartArr));
};
function buyNow(_clickedItem){
    window.location.href="checkout.html";
}
function paypal (){
    window.location.href="checkout.html";
}