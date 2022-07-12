

/*all products content start*/
function allFunction(){

 
console.log('log')

  

var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/7d9a6e744268.jpg",
     
      name: "Global Xiaomi Mi TV Box S 4K HDR Android TV 8.1 Ultra HD 2G 8G WIFI Google Cast Netflix IPTV Set top Box 4 Media Player",
      dis : "17% Off",
      price: "Rs"+23172,
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_thumb_220-v4/a0da751fd8f8.jpg",
     
      name: "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones Wireless Headphones with Mic Handsfree Earbuds Redmi Airdots 2",
      dis : "25% Off",
      price: "Rs"+660,
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_thumb_220-v1/e1c76b337a79.jpg",
     
      name: "Original Xiaomi Mi Band 6 / 6 NFC Smart Wristband 1.56 inch AMOLED Screen Blood Oxygen Fitness Traker Bluetooth Waterproof Smart Bracelet",
      dis : "19% Off",
      price: "Rs"+3055,
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v4/ad2a20a94177.jpg",
      dis : "20% Off",
      name: "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable",
      price: "Rs"+605,
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/a2fbd39cb9c5.jpg",
     
      name: "2.4Ghz 6 Channel 124 RC Excavator toy RC Engineering Car Alloy and plastic Excavator RTR For kids Christmas gift",
      dis : "24% Off",
      price: "$31.39",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16464/goods_thumb_220-v2/134ae8309154.jpg",
      dis : "17% Off",
      name: "original Xiaomi Mi Robot Vacuum Cleaner  Main Brushes Replacement Parts",
      price: "$14.98",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v1/330e9a95381b.jpg",
      dis : "10% Off",
      name: "FIIDO D3 Pro Folding Electric Moped Bike 14 Inch City Bicycle Commuter Bike Max 25km/h Three Riding Modes 7.5Ah Lithium Battery Aluminium Alloy Body",
      price: "$625",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15892/goods_thumb_220-v1/a8a30832f5e9.jpg",
      dis : "12% Off",
      name: "Din Car Radio 7 inch HD Autoradio Multimedia Player 2DIN Touch Screen Auto audio Car Stereo MP5",
      price: "$53.03",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883469851634102272/16497/goods_thumb_220-v1/8b6485baad75.jpg",
      dis : "19% Off",
      name: "E21 Smart Sports Couple Watch Heart Rate Blood Pressure Detection Healthy Sleep Monitoring Photo Sedentary Reminder GPS Positioning Waterproof",
      price: "$42.40",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
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
    dis.style.width = "30px"
    dis.style.position = "absolute";
    dis.style.margin= "-200px 0px 0px 220px";
    
    var hr = document.createElement("div");
    hr.setAttribute('class','icon-box');
    var heart = document.createElement("p");
    // var qr = document.createElement("img");
   
    heart.innerText = "🤍";

    
    var name = document.createElement("p");
    name.textContent = elem.name;
    

    var price = document.createElement("p");
    price.innerText = elem.price;

     
  
    box.append(img, dis, name, price, hr, heart);
    document.querySelector("#content").append(box)
   
  });
  
}

  /*all products content end*/


  /*Computers, Tablets & Office content start*/
 
function consumerFunction(){

  var header = document.querySelector("#computer");



var computerContent = [

    { id:1,
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
     
        name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
        price: 2.39,
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_thumb_220-v4/a0da751fd8f8.jpg",
     
      name: "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones Wireless Headphones with Mic Handsfree Earbuds Redmi Airdots 2",
      price: "$8.39",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_thumb_220-v1/e1c76b337a79.jpg",
     
      name: "Original Xiaomi Mi Band 6 / 6 NFC Smart Wristband 1.56 inch AMOLED Screen Blood Oxygen Fitness Traker Bluetooth Waterproof Smart Bracelet",
      price: "$38.89",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v4/ad2a20a94177.jpg",
     
      name: "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable",
      price: "$7.69",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/a2fbd39cb9c5.jpg",
     
      name: "2.4Ghz 6 Channel 124 RC Excavator toy RC Engineering Car Alloy and plastic Excavator RTR For kids Christmas gift",
      
      price: "$31.39",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878388619120406528/16464/goods_thumb_220-v2/134ae8309154.jpg",
     
      name: "original Xiaomi Mi Robot Vacuum Cleaner  Main Brushes Replacement Parts",
      price: "$14.98",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_thumb_220-v1/330e9a95381b.jpg",
     
      name: "FIIDO D3 Pro Folding Electric Moped Bike 14 Inch City Bicycle Commuter Bike Max 25km/h Three Riding Modes 7.5Ah Lithium Battery Aluminium Alloy Body",
      price: "$625",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15892/goods_thumb_220-v1/a8a30832f5e9.jpg",
     
      name: "Din Car Radio 7 inch HD Autoradio Multimedia Player 2DIN Touch Screen Auto audio Car Stereo MP5",
      price: "$53.03",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883469851634102272/16497/goods_thumb_220-v1/8b6485baad75.jpg",
     
      name: "E21 Smart Sports Couple Watch Heart Rate Blood Pressure Detection Healthy Sleep Monitoring Photo Sedentary Reminder GPS Positioning Waterproof",
      price: "$42.40",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
     
      name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
      price: "$2.39",
    },

    ];

computerContent.map(function (elem) {
    var box = document.createElement("div");
  
    var img = document.createElement("img");
    img.src = elem.image_url;
    
    
    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

     
  
     


    box.append(img, name, price);
    document.querySelector("#content").append(box)
   
  });

}
  

  /*Computers, Tablets & Office content ends*/



/*Cellphones content start here*/






var header = document.querySelector("#header");

//var sticky = header.offsetTop;







var cellContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v5/d80e56d8f6d2.jpg",
     
      name: "Global Xiaomi Mi TV Box S 4K HDR Android TV 8.1 Ultra HD 2G 8G WIFI Google Cast Netflix IPTV Set top Box 4 Media Player",
      price: "$66.99",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_thumb_220-v1/d238ad6a3d2a.jpg",
     
      name: "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones Wireless Headphones with Mic Handsfree Earbuds Redmi Airdots 2",
      price: "$8.39",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16454/goods_thumb_220-v1/42405dc55cb8.jpg",
     
      name: "Original Xiaomi Mi Band 6 / 6 NFC Smart Wristband 1.56 inch AMOLED Screen Blood Oxygen Fitness Traker Bluetooth Waterproof Smart Bracelet",
      price: "$38.89",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v4/ad2a20a94177.jpg",
     
      name: "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable",
      price: "$7.69",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16407/goods_thumb_220-v1/40a93039dfd9.jpg",
     
      name: "2.4Ghz 6 Channel 124 RC Excavator toy RC Engineering Car Alloy and plastic Excavator RTR For kids Christmas gift",
      
      price: "$31.39",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_thumb_220-v1/b77ce6885375.jpg",
     
      name: "original Xiaomi Mi Robot Vacuum Cleaner  Main Brushes Replacement Parts",
      price: "$14.98",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_thumb_220-v1/6325c49eae73.jpg",
     
      name: "FIIDO D3 Pro Folding Electric Moped Bike 14 Inch City Bicycle Commuter Bike Max 25km/h Three Riding Modes 7.5Ah Lithium Battery Aluminium Alloy Body",
      price: "$625",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_thumb_220-v1/d17735e8a051.jpg",
     
      name: "Din Car Radio 7 inch HD Autoradio Multimedia Player 2DIN Touch Screen Auto audio Car Stereo MP5",
      price: "$53.03",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15925/goods_thumb_220-v1/f33cae4e5a9f.jpg",
     
      name: "E21 Smart Sports Couple Watch Heart Rate Blood Pressure Detection Healthy Sleep Monitoring Photo Sedentary Reminder GPS Positioning Waterproof",
      price: "$42.40",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16074/goods_thumb_220-v1/0e600a1f82a7.jpg",
     
      name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
      price: "$2.39",
    },

    ];

cellContent.map(function (elem) {
    var box = document.createElement("div");
  
    var img = document.createElement("img");
    img.src = elem.image_url;
    
    
    var name = document.createElement("p");
    name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerText = elem.price;

     
  
     

   
      


    box.append(img, name, price);
    document.querySelector("#cellP_content").append(box)
   
  });
  

/*Cellphones content ends*/




  /*Default Open*/
  
  document.getElementById("all").click();