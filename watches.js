var header = document.querySelector("#womenF");









var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883469851634102272/16497/goods_thumb_220-v1/f26c86d465ce.jpg",
     
      name: "E21 Smart Sports Couple Watch Heart Rate Blood Pressure Detection Healthy Sleep Monitoring Photo Sedentary Reminder GPS Positioning Waterproof",
      dis : "19% Off",
      price: 3331,
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_img_big-v2/06c4d19c270c.jpg",
     
      name: "NIBOSI Couple Watches For Lovers Top Brand Luxury Quartz Clock Waterproof Wristwatch Fashion Casual Ladies Watch Couple Love",
      dis : "20% Off",
      price: 1251,
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/b59198412a56.jpg",
     
      name: "Punk Vintage Black Brown Belt Strap Men Genuine Leather Pointer Watch Bracelet &amp Bangles For Women Male Jewelry Freely Shipping",
      dis : "15% Off",
      price: 1925,
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16418/goods_thumb_220-v1/9a61d0f2289e.jpg",
      dis : "20% Off",
      name: "New Silicone Couples Watch With Model Size 38/40/41/42/44/45MM for Apple 1/2/3/4/5/6/7Generation",
      price: 623,
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16499/goods_thumb_220-v1/5e95e04dfa4d.jpg",
     
      name: "Splicing Color Pu Leather Couple Bracelet Model Size 38/40/42/44/45/41MM Suitable for Apple Watch1/2/3/4/5/6/7Generation Watches",
      dis : "",
      price: 1565,
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v2/8ba00ec02336.jpg",
      dis : "20% Off",
      name: "The New Leather Premium Watch Strap is Suitable for Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM Fashion Watch Chain",
      price: 1823,
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v2/3f882df2df6b.jpg",
      dis : "20% Off",
      name: "New Nylon Woven Rebate Watch Strap For Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM For Men And Women ",
      price: 583,
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v2/d23e804f0cdb.jpg",
      dis : "15% Off",
      name: "New Camouflage Nylon Rebate Watch Strap for Apple 1/2/3/4/5/6 Generation Model Size 38/40/41/42/44/45MM Hot Sale",
      price: 583,
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/b94581deb6be.jpg",
      dis : "",
      name: "Apples New Camouflage Nylon Buckle is Suitable for Apple 1/2/3/4/5/6 Generation Models 38/40/42/41/44/45MM Couple Models",
      price: 700,
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/521d423aad53.jpg",
      dis : "",
      name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
      price: 700,
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
  name.style.fontSize = "10px"
  

  var price = document.createElement("p");
  price.innerText = elem.price;
  price.style.color = "red";
  price.style.fontSize = "22px";
   
 
  box.append(img, dis, name, price,heart);
    document.querySelector("#content").append(box)
   
  });