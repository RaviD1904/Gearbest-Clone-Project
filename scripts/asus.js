import main_navbar from "../components/main_navbar.js";
document.querySelector("#headDiv").innerHTML=main_navbar();


import asusData from "../allData/asusData.js";

import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML=footer();

const container = document.querySelector(".container");



appendData(asusData);

const wishedArr = JSON.parse(localStorage.getItem("wishedItem")) || [];

function appendData(asusData) {
  // console.log("insideFun");
  container.innerHTML = null;
  asusData.forEach((el) => {
    // console.log(el.goodsImage);
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
    let h3 = document.createElement("h3");
    // div2.innerHTML="&#xf004;";
    h3.setAttribute("id", "heart-img")
    h3.innerHTML = "&#xF08A";  //basecode=&#x and unicode=F08A;
    h3.onclick = function () {
      addToWishlist(el);
    }

    function addToWishlist(x) {
      wishedArr.push(x);
      h3.innerHTML = "&#xf004";
      h3.style.color = "#F30240"
      localStorage.setItem("wishedItem", JSON.stringify(wishedArr));
      alert("item added to your wishlist");
    }
    div.append(img, div1, h2, h3);

    container.append(div);

  })
}


function showInfo(el) {
  window.location.href = "productDetails.html";
  localStorage.setItem("clickedItem", JSON.stringify(el));
};

/* --------sorting function------------- */
document.querySelector("#recommended").addEventListener("click", sortByRecommended);

function sortByRecommended() {
  asusData.sort((a,b)=>{

    return (Number(a.goodsSn) - Number(b.goodsSn));
   
  })
// console.log(asusData);
  appendData(asusData);
  

};

 document.querySelector("#hottest").addEventListener("click", sortByHottest);

function sortByHottest() {
  // let btn=document.querySelector("#newest");
 
  // btn.style.backgroundcolor="#FFDA00"
  // console.log( btn.style.backgroundcolor);
 
  asusData.sort(function (a, b) {
 
    // if (Number(a.goodsSn) > Number(b.goodsSn)) { return -1; }
    // if (Number(a.goodsSn) > Number(b.goodsSn)) { return 1; }
    // return 0;
return (Number(b.goodsSn) - Number(a.goodsSn));
  });

  appendData(asusData);

};

 document.querySelector("#newest").addEventListener("click", 
  sortByNewest
);

function sortByNewest() {

  asusData.sort( (a, b) => {
    
    // if (Number(a.goodsSn) > Number(b.goodsSn)) { return -1; }
    // if (Number(a.goodsSn) < Number(b.goodsSn)) { return 1; }
    // return 0;
    return (Number(a.goodsSn) - Number(b.goodsSn));
  });
  appendData(asusData);
  // let btn=document.querySelector("#newest");
 
  // btn.style.backgroundcolor="#FFDA00"
  // console.log( btn.style.backgroundcolor);
};

document.querySelector("#trending").addEventListener("click", sortByTrending);

function sortByTrending() {
  asusData.sort(function (a, b) {
 
    // if (Number(a.displayPrice) > Number(b.displayPrice)) { return -1; }
    // if (Number(a.displayPrice) > Number(b.displayPrice)) { return 1; }
    // return 0;
    return ((a.goodsTitle.length) - (b.goodsTitle.length));
  });

  appendData(asusData);

};


 document.querySelector("#sortByPrice").addEventListener("change", sortByPrice);

function sortByPrice() {
  let selected=document.querySelector("#sortByPrice").value;
if(selected==="ascending"){
  asusData.sort( (a, b) =>{
    console.log("insideFun");
    // if (Number(a.displayPrice) < Number(b.displayPrice)) { return -1; }
    // if (Number(a.displayPrice) < Number(b.displayPrice)) { return 1; }
    // return 0;
    return (Number(a.displayPrice) - Number(b.displayPrice));
  })

  appendData(asusData);
  
}
else if(selected==="descending"){
  asusData.sort(function (a, b) {
  
    // if (Number(a.displayPrice) > Number(b.displayPrice)) { return -1; }
    // if (Number(a.displayPrice) > Number(b.displayPrice)) { return 1; }
    // return 0;
    return (Number(b.displayPrice) - Number(a.displayPrice)); //both will work same in case we are sorting only numbers.
  });

  appendData(asusData);
};
  

};