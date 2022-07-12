import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML=footer();

let cartData=JSON.parse(localStorage.getItem("cart"));
console.log(cartData);

cartData.map(function (elem, index) {
    let box1 = document.createElement("div")
    let image = document.createElement("img")
    image.src = elem.goodsImage;
    box1.append(image);
    
  
    let box2 = document.createElement("div")
    let name = document.createElement("h3");
    name.innerText = elem.goodsTitle;
    
    name.style.marginTop = "40px"
  
  
    let box3 = document.createElement("div")
    box3.setAttribute("id", "box3")
  
    let h1=document.createElement("h2");
    h1.innerHTML= "Price:"+ ` $  ${elem.displayPrice}`;
    h1.style.color="#F30240";
   
    box3.append(h1);
  
  
    let p2 = document.createElement("p")
    p2.innerText = "  ✓Paid Shipping   ✓Cash On Delivery  "
    p2.style.fontSize = "25px"
    p2.style.color = "gray"
  
    let p3 = document.createElement("p")
    p3.innerText = "Delivery in 4 - 6 Working Days"
    p3.style.marginLeft = "5px"
    p3.style.fontSize = "25px"
    p3.style.color = "gray"
  
    let btn1 = document.createElement("button");
    btn1.innerText = "REMOVE ITEM";
    btn1.setAttribute("id","removeItem")
  
    btn1.addEventListener("click", () => {
      removeItem(elem, index);
    });
   
    let btn2 = document.createElement("button");
    btn2.innerText = "BUY NOW";
    btn2.setAttribute("id","buyNow");
    btn2.addEventListener("click",buyNow);

function buyNow(){
    window.location.href="checkout.html";
}
    
    box2.append(name, box3, p2, p3, btn1, btn2)
    document.querySelector("#cart_container").append(box1, box2)
  
  })
  function removeItem(elem, index) {
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
  }
  
// -------------Product Summary Table-------------------

let length = cartData.length
let total = cartData.reduce(function (sum, elem, index) {
  return sum + Number(elem.displayPrice)
}, 0)

let tr1 = document.createElement("tr")
let td1 = document.createElement("td")
td1.innerText = "Total MRP"
td1.style.fontSize = "15px"
let td2 = document.createElement("td")
td2.innerText = "$  " + total
td2.style.fontSize = "15px"

let tr2 = document.createElement("tr")
let td3 = document.createElement("td")
td3.innerText = "Discount on MRP"
td3.style.fontSize = "15px"
let td4 = document.createElement("td")
td4.innerText = "$ 1 "
td4.style.fontSize = "15px"

let tr3 = document.createElement("tr")
let td5 = document.createElement("td")
td5.innerText = "Coupon Discount"
td5.style.fontSize = "15px"
let td6 = document.createElement("td")
td6.innerText = "Apply Coupon"
td6.style.color = "red"
td6.style.fontSize = "15px"

let tr4 = document.createElement("tr")
let td7 = document.createElement("td")
td7.innerText = "Shipping Charges"
td7.style.fontSize = "15px"
let td8 = document.createElement("td")
td8.innerText = " $ 1.5 "
td8.style.fontSize = "15px"


let tr5 = document.createElement("tr")
let td9 = document.createElement("td")
td9.innerText = "Total Amount"
td9.style.fontSize = "15px"
td9.style.fontWeight = "bold"
let td10 = document.createElement("td")
td10.innerText = "$ " + (total + 1.5 - 1)
td10.style.fontSize = "15px"
td10.style.fontWeight = "bold"


let tr7 = document.createElement("tr")
let td11 = document.createElement("td")
td11.innerText = "Total Items"
td11.style.fontSize = "15px"

let td12 = document.createElement("td")
td12.innerText = length
td12.style.fontSize = "15px"



let tr6 = document.createElement("tr")
let btn3 = document.createElement("button")
btn3.innerText = "PLACE ORDER"
btn3.setAttribute("id","placeOrder");
btn3.addEventListener("click",placeOrder);

function placeOrder(){
    window.location.href="./payment.html";
}



tr1.append(td1, td2)
tr2.append(td3, td4)
tr3.append(td5, td6)
tr4.append(td7, td8)
tr5.append(td9, td10)
tr6.append(btn3)
tr7.append(td11, td12)
document.querySelector("tbody").append(tr7, tr1, tr2, tr3, tr4, tr5, tr6)



