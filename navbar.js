let slideImg=
[
    "https://uidesign.gbtcdn.com/GB/image/8823/1190%C3%97420-En.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
    "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
    "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true",
]

let i=0;
    let img=document.createElement("img");
    img.style.width="100%";
    setInterval(function()
    {
        if(i===slideImg.length)
        {
            i=0;
        }
        img.src=slideImg[i];
        document.querySelector("#slideShowDiv").append(img);
        i++;
    },3000);