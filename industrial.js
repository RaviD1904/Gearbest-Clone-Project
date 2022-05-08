

/*all products content start*/

  

var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16468/goods_thumb_220-v1/98f3dc9e7b7f.jpg",
     
      name: "ZBAITU 80W CNC Laser Engraver Cutter Engraving Cutting Machine for Metal Wood Acrylic Offline Print Max Cut 10mm",
      dis : "65% Off",
      price: "$409.99",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_img_big-v3/0a67fcdfec3b.jpg",
     
      name: "FLSUN SR Super Racer 3D Printer Fast 200mm/s FDM Delta Linear Guide Pre-Assembly with Auto-Leveling Resume Printing 1.75mm Printing Size 260x260x330mm",
      dis : "14% Off",
      price: "$429",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16420/goods_img_big-v9/fc2849c78e00.jpg",
     
      name: "KINGROON KP3S 3D Printer High Precision Printing Upgraded DIY Printer Kit Touch Screen Printing Size 180x180x180mm",
      dis : "15% Off",
      price: "$194",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16473/goods_img_big-v1/08130918731a.jpg",
      dis : "26% Off",
      name: "Aufero Laser 2 Laser Engraving Machine 32Bit Motherboard Optically Compressed Laser 10 000mm/min 24V/2A High Precision",
      price: "$259.00",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16468/goods_img_big-v1/92c6194c44df.jpg",
     
      name: "ZBAITU Laser Engraver 2 In 1 Doide 80W Laser Wood Acrylic Metal Engraving Cutting Machine 81X46cm Printing with Offline or FAC",
      dis : "65% Off",
      price: "$459.90 ",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16420/goods_img_big-v5/2da67549c212.jpg",
      dis : "17% Off",
      name: "ANYCUBIC Mega S/ X /Zero/Pro 3D Printer Full Metal Frame Plus Size Desktop 3d drucker High Precision FDM 3D Printer impresora 3d",
      price: "$201",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16473/goods_img_big-v1/1ee4d8d3f846.jpg",
      dis : "10% Off",
      name: "ORTUR YRR2.0-Aufero Laser Rotary Roller Z Axis Roller for Cylinder Engraving Cans Cups Bottles 360° Different Angles ",
      price: "$99",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16472/goods_img_big-v1/64e215293e16.jpg",
      dis : "12% Off",
      name: "ORTUR Laser Master 2 Pro S2 LU2-4 LF SF Laser Engraving Cutting Machine Cutter 400x430mm Large Engraving Area Fast Speed 10000mm/Min High Precision ",
      price: "$439",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_thumb_220-v1/d68f68d9b088.jpg",
      dis : "19% Off",
      name: "E21 Smart Sports Couple Watch Heart Rate Blood Pressure Detection Healthy Sleep Monitoring Photo Sedentary Reminder GPS Positioning Waterproof",
      price: "$66.99",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/desc/6883469851634102272/16452/goods_thumb_220-v1/86a716edf309.jpg",
      dis : "35% Off",
      name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
      price: "$2.39",
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
    document.querySelector("#industrial_content").append(box)
   
  });
  


  /*all products content end*/


  
