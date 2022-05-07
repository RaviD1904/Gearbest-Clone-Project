let clickedItem=JSON.parse(localStorage.getItem("clickedItem"));
const container=document.querySelector(".container");
function showInfo(){
    let left_container=document.querySelector(".left-container");
    let img=document.createElement("img");
    img.src=clickedItem.goodsImage;
    left_container.append(img);

    let right_container=document.querySelector(".right-container");
    let h2=document.createElement("h2");
    h2.innerText=clickedItem.goodsTitle;
    let h1=document.createElement("h1");
    h1.innerText=`Price:   $ ${clickedItem.displayPrice}`;
    h1.style.color="#F30240"
    
    right_container.append(h2,h1,);

container.append(left_container,right_container);
}
showInfo();