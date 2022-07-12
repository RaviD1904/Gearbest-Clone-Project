let wishedData=JSON.parse(localStorage.getItem("wishedItem")) ;
import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML=footer();

console.log(wishedData);
const container = document.querySelector(".container");

appendData(wishedData);

let cartArr=JSON.parse(localStorage.getItem("cart")) || [];
function appendData(wishedData) {
    // console.log("insideFun");
   
    wishedData.forEach((el,index) => {
      console.log(el.goodsImage);
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.goodsImage;
      img.onclick = () => {
        showInfo(el);
      }
      let p = document.createElement("p");
      p.innerText = el.goodsTitle;
      let div1 = document.createElement("div");
      div1.append(p);
      div1.style.height = "100px"
      div1.style.overflow = "hidden";
      let h2 = document.createElement("h2");
      h2.innerText = `$ ${el.displayPrice}`;
      let div2=document.createElement("div")
      div2.setAttribute("id","icon-div");
      let h3 = document.createElement("h3");
     
      h3.setAttribute("id", "remove-icon")
      
      h3.innerHTML = "&#xf1f8";  //basecode=&#x and unicode=f1f8;
      let span1=document.createElement("span");
      span1.setAttribute("class","tooltiptext");
      span1.innerText="remove from wishlist";
      h3.append(span1);
      h3.onclick = function () {
        removeFromWhislist(el,index);
      }
  
      function removeFromWhislist(el,index) {
        wishedData.splice(index,1);
         localStorage.setItem("wishedItem", JSON.stringify(wishedData));
        window.location.reload();
      }
      let h4 = document.createElement("h3");
   
      h4.setAttribute("id", "cart-icon")
      
      h4.innerHTML = "&#xf217";  //basecode=&#x and unicode=f1f8;
// h4.innerHTML="&#xf336"
let span2=document.createElement("span");
      span2.setAttribute("class","tooltiptext");
      span2.innerText="add to cart";
   
      h4.append(span2);
      h4.onclick = function () {
        addToCart(el);
      }
  
      function addToCart(x) {
        cartArr.push(x);
        alert("item added To Cart");
        h4.innerHTML="&#xf058"
        h4.style.color="red";
        let span3=document.createElement("span");
        span3.setAttribute("class","tooltiptext");
        span3.innerText="item already added in the cart";
        h4.append(span3);
        localStorage.setItem("cart", JSON.stringify(cartArr));
      }
      div2.append(h4,h3);
      div.append(img, div1, h2, div2);
      container.append(div);
    });
  };
  function showInfo(el) {
    window.location.href = "productDetails.html";
    localStorage.setItem("clickedItem", JSON.stringify(el));
  };