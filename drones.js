

/*all products content start*/

  

var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16475/goods_thumb_220-v3/d03178fcc79e.jpg",
     
      name: "2 in 1 Electric RC Car Transformation Robots Children Boys Toys Outdoor Remote Control Sports Deformation Car Robots Model Toy",
      dis : "17% Off",
      price: "$66.99",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/70cb660f36f4.jpg",
     
      name: "V15 300mAh USB Flash 64G Digital Voice Activated Recorders Super Thin Mini Body 50H Continuous Dictaphone Audio Recording Device",
      dis : "25% Off",
      price: "$8.39",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16468/goods_thumb_220-v1/9a3561ccd3b3.jpg",
     
      name: "2022 NEW RG101 MAX GPS Drone 6K Professional Dual HD Camera FPV 3Km Aerial Photography Brushless Motor Foldable Quadcopter Toys ",
      dis : "19% Off",
      price: "$38.99",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15984/goods_thumb_220-v14/46c18da5beca.jpg",
      dis : "20% Off",
      name: "4WD RC Car Updated Version 2.4G Radio Control RC Car Toys Remote Control Car Trucks Off-Road Trucks boys Toys for Children",
      price: "$7.69",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16424/goods_thumb_220-v1/186cd6966d5f.jpg",
     
      name: "Xiaomi Mi Intelligent Remote Control Car SUZUKI JIMNY 4 Generation Electric Race Car 4 Wheels Drive Rock Crawler App Controller ",
      dis : "24% Off",
      price: "$14.98",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16147/goods_thumb_220-v5/3ae21326834b.jpg",
      dis : "17% Off",
      name: "Original XIAOMI Bluetooth Magic Cube Smart Gateway Linkage 3x3x3 Square Magnetic Cube Science Education Toy Gift",
      price: "$29.94",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16061/goods_thumb_220-v3/6ab0c98eea8e.jpg",
      dis : "10% Off",
      name: "LCD Writing Tablet Blackboard With Pen 20 inch Digital Drawing Electronic Handwriting Pad Message Graphics Boards",
      price: "$53.03",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16468/goods_thumb_220-v1/7c20571506f3.jpg",
      dis : "12% Off",
      name: "E525 PRO RC Drone with Obstacle Avoidance 4k WIFI Height Hold RC Mini Dron Fpv Dual Camera Follow Me Quadcopter Drones Toys",
      price: "$92.50",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16415/goods_thumb_220-v1/3f5389eefd53.jpg",
      dis : "19% Off",
      name: "Crystal Treasure Digging Science Education Toys for Kids Dig Out Precious Gems and Collection Great Gifts for Boys and Girls Educational",
      price: "$66.99",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
      dis : "35% Off",
      name: "K99 MAX Drone 4K Professional Camera Automatic obstacle avoidance on three sides Optical Flow High Hold RC Quadcopter Dron 4.8",
      price: "$52.39",
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
    document.querySelector("#drones_content").append(box)
   
  });
  


  /*all products content end*/


  
