var header = document.querySelector("#womenF");









var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16478/goods_thumb_220-v1/b90bdbd4b7e6.jpg",
     
      name: "New Nylon Braided Watch Band for Samsung Model Size 20MM/22MM Rainbow Mens and Womens Bracelet",
      dis : "25% Off",
      price: "$7.39",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16511/goods_thumb_220-v1/a3a97f56bd19.jpg",
     
      name: "Milan Small Pretty Waist Metal Watch Chain Suitable for Apple 1/2/3/4/5/6Generation Model Size 38/40/41/42/44/45 Men And women s Strap",
      dis : "25% Off",
      price: "$15.92",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16491/goods_thumb_220-v1/615c256fcc26.jpg",
     
      name: "Women s Stainless Steel Watch Bracelet with Diamonds Model Size 38/40/41/42/44/45MM Suitable for Apple Watch 1/2/3/4/5/6/7 Generation Watches Hot Sale ",
      dis : "20% Off",
      price: "$20.72",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16489/goods_thumb_220-v1/b8468529dec9.jpg",
      dis : "20% Off",
      name: "New Silicone Couples Watch With Model Size 38/40/41/42/44/45MM for Apple 1/2/3/4/5/6/7Generation",
      price: "$7.72",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16487/goods_thumb_220-v1/ca1f90a93104.jpg",
     
      name: "Splicing Color Pu Leather Couple Bracelet Model Size 38/40/42/44/45/41MM Suitable for Apple Watch1/2/3/4/5/6/7Generation Watches",
      dis : "20% Off",
      price: "$19.92",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16464/goods_thumb_220-v2/134ae8309154.jpg",
      dis : "3% Off",
      name: "The New Leather Premium Watch Strap is Suitable for Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM Fashion Watch Chain",
      price: "$3% Off",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16484/goods_thumb_220-v1/47ef928b1849.jpg",
      dis : "25% Off",
      name: "New Nylon Woven Rebate Watch Strap For Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM For Men And Women ",
      price: "$7.13",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16474/goods_thumb_220-v1/b59a8f23b4ae.jpg",
      dis : "42% Off",
      name: "New Camouflage Nylon Rebate Watch Strap for Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM Hot Sale",
      price: "$8.91",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16473/goods_thumb_220-v1/726230a43519.jpg",
      dis : "",
      name: "Apples New Camouflage Nylon Buckle is Suitable for Apple 1/2/3/4/5/6 Generation Models 38/40/42/41/44/45MM Couple Models",
      price: "$7.13",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16473/goods_thumb_220-v1/f5430d95b906.jpg",
      dis : "",
      name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
      price: "$23.20",
    },

    ];

allContent.map(function (elem) {
  var box = document.createElement("div");
  box.style.position = "relative";

  var img = document.createElement("img");
  img.src = elem.image_url;
  
  var dis = document.createElement("div");
  dis.innerText = elem.dis;
  dis.style.borderRadius = "50%";
  dis.style.color = "white";
  dis.style.backgroundColor = "red";
  dis.style.width = "33px"
  dis.style.position = "absolute";
  dis.style.margin= "-170px 0px 0px 170px";
  
  // var hr = document.createElement("div");
  // hr.setAttribute('class','icon-box');
  var heart = document.createElement("p");
  // var qr = document.createElement("img");
 
  heart.innerText = "🤍";
  

  
  var name = document.createElement("p");
  name.textContent = elem.name;
  
  

  var price = document.createElement("p");
  price.innerText = elem.price;
  price.style.color = "red";
  price.style.fontSize = "22px";
   
 
  box.append(img, dis, name, price,heart);


   
    document.querySelector("#content").append(box)
   
  });