









var allContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16486/goods_thumb_220-v1/9cddbe59a65e.jpg",
     
      name: "ENGWE Bike C20 20inch Adult Electric Bike 36V10A City Bike 250W Bafang Motor 25KM/H fold electric Bicycle light ebike",
      dis : "37% Off",
      price: "$799",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16473/goods_thumb_220-v3/5198595d2496.jpg",
     
      name: "SAMEBIKE JG20 Electric Bike 10 ah 350W Folding Electric Bicycle Moped ebike High Speed E-bike 20 Inch Motor Bicycle",
      dis : "25% Off",
      price: "$859",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16457/goods_thumb_220-v1/5e7e14461886.jpg",
     
      name: "EU/US Stock ENGWE EP-2PRO 20inch Fat Tire Electric bike 48V12.8AH electric bicycle 45km/h 750W Powerful Motor Mountain bike Snow ebike",
      dis : "50% Off",
      price: "$1060",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v3/ff82bcbc4ead.jpg",
      dis : "20% Off",
      name: "Samebike 20LVXD30 350W Foldable Electric Bike City Bike 35km/h 70km",
      price: "$799",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/58dffe29c8ee.jpg",
     
      name: "Mini Outdoor Firewood Stove Camping Cooking Equipment Folding Stove Wood Steel Travel Charcoal Furnace for Barbeque",
      dis : "15% Off",
      price: "$20.79",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_thumb_220-v1/d9e6c7ef810e.jpg",
      dis : "47% Off",
      name: "Samebike MY-SM26 Electric Bike 26 Inch Tires 350W Motor Max Speed 30km/h Up To 80km Range Max Load 150kg Dual Disk Brakes",
      price: "$899",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6896502277952172032/16460/goods_thumb_220-v1/524849cb314c.jpg",
      dis : "50% Off",
      name: "US/EU Stock ENGWE Bike C20 20inch Adult Electric Bike 36V10A City Bike 250W Bafang Motor 25KM/H fold electric Bicycle light ebike",
      price: "$800",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/6652cc15c036.jpg",
      dis : "15% Off",
      name: "Electric Scooter height adjustable folding Scooter supports up to 75kg speed 15 KM/H. AUTONOMIA510KG. Includes doorbell ",
      price: "$146",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16466/goods_thumb_220-v3/540cadd4a131.jpg",
      dis : "10% Off",
      name: "World Premiere Xiaomi Mi Electric Scooter 3 Smart EScooter 30km Distance 7650mAh Battery MIJIA Adulte Bicycle Fold Skateboard",
      price: "$522",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/bf64ac68812e.jpg",
      dis : "15% Off",
      name: "HILAND 26 Inch Mountain Bike 21 Speed Aluminum Bicycle Bike Double Disc Brake MTB Suspension Fork Bicycle with Shimano TZ50",
      price: "$216",
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
    document.querySelector("#outdoor_content").append(box)
   
  });