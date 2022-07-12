import sandleData from "../allData/sandleData.js";


const container = document.querySelector(".container");

appendData(sandleData);

const wishedArr = [];
function appendData(sandleData) {
  // console.log("insideFun");
  container.innerHTML = null;
  sandleData.forEach((el) => {
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
    }
    div.append(img, div1, h2, h3);
    container.append(div);
  });
};
function showInfo(el) {
  window.location.href = "productDetails.html";
  localStorage.setItem("clickedItem", JSON.stringify(el));
};

/* --------sorting function------------- */


document.querySelector("#recommended").addEventListener("click", sortByRecommended);

function sortByRecommended() {
  sandleData.sort((a, b) => {
    return (Number(a.goodsSn) - Number(b.goodsSn));
  })
  // console.log(sandleData);
  appendData(sandleData);
};

document.querySelector("#hottest").addEventListener("click", sortByHottest);

function sortByHottest() {
  sandleData.sort(function (a, b) {
    return (Number(b.goodsSn) - Number(a.goodsSn));
  });
  appendData(sandleData);
};


document.querySelector("#newest").addEventListener("click",
  sortByNewest
);

function sortByNewest() {
  sandleData.sort((a, b) => {
    return (Number(a.goodsSn) - Number(b.goodsSn));
  });
  appendData(sandleData);
};


document.querySelector("#trending").addEventListener("click", sortByTrending);

function sortByTrending() {
  sandleData.sort( (a, b) => {
    return ((a.goodsTitle.length) - (b.goodsTitle.length));
  });
  appendData(sandleData);

};


document.querySelector("#sortByPrice").addEventListener("change", sortByPrice);

function sortByPrice() {
  let selected = document.querySelector("#sortByPrice").value;
  if (selected === "ascending") {
    sandleData.sort((a, b) => {
      console.log("insideFun");
      return (Number(a.displayPrice) - Number(b.displayPrice));
    });
    appendData(sandleData);

  } else if (selected === "descending") {
    sandleData.sort( (a, b) =>{
      return (Number(b.displayPrice) - Number(a.displayPrice));
    });
    appendData(sandleData);
  };
};