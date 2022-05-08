




// var consumer = document.querySelector("#consumer");

//var sticky = consumer.offsetTop;







var consumerContent = [

    { id:1,
        image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_thumb_220-v4/a0da751fd8f8.jpg",
        dis: "17% Off",
        name: "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones Wireless Headphones with Mic Handsfree Earbuds Redmi Airdots 2",
        price: "$8.39",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16416/goods_thumb_220-v1/9dbf47dbe530.jpg",
      dis: "58% Off",
      name: "A9 Mini Camera WiFi Camera 1080P HD Night Version Voice Recorder Wireless Mini Camcorders Video Surveillance IP Camera",
      price: "$16.80",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16414/goods_thumb_220-v1/b1589d2d9db3.jpg",
      dis: "40% Off",
      name: "Original Xiaomi Redmi Buds 3 TWS Wireless Bluetooth 5.2 Earphone Dual Mic Noise Cancellation Earbuds QCC 3040 Chip Headphones ",
      price: "$35.88",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16121/goods_thumb_220-v9/ca5568a2f175.jpg",
      dis: "15% Off",
      name: "Xiaomi Mi Piston 3 Type C Earphone USB-C in Ear Earbuds for Mi 9 Pro 5G 8 SE Lite 6 6X A2 5 5S Plus 4S MIX 2s 3 MAX 2 3 Note 2 3",
      price: "$13.43",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v5/2f380d04f8f3.jpg",
      dis: "30% Off",
      name: "Original Xiaomi Mi Airdots Air 2 SE TWS Bluetooth Earphone Wireless Headphone Dual SBC/AAC Tap Stereo Control Dual MIC ",
      
      price: "$24.9",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/store/6882689559126274048/16489/goods_thumb_220-v7/4e06e8fb9369.jpg",
      dis: "40% Off",
      name: "BT-S2 motorcycle snowmobile helmet bluetooth headset with 1000m communication system for full helmet ",
      price: "$32.45",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_thumb_220-v3/c756d2c80fe9.jpg",
      dis: "47% Off",
      name: "Xiaomi Redmi AirDots 2 Wireless Earphone Bluetooth 5.0 Headset Mi Ture Wireless Headphones Earbuds In-Ear Earphones ",
      price: "$10.59",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16486/goods_thumb_220-v1/965097e8a620.jpg",
      dis: "34% Off",
      name: "Aqara Smart Temperature Humidity Sensor Zigbee Wireless Connection Thermometer Hygrometer Apple Homekit Mi Home APP Control Xiaomi Ecosystem Product",
      price: "$17.96",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16498/goods_thumb_220-v13/c0d56aec4c65.jpg",
      dis: "62% Off",
      name: "Original Xiaomi Redmi Buds 3 Lite Youth Edition Earphone TWS Wireless Bluetooth 5.2 IP54 Headphone Gaming Headset Touch Control Earbuds With Mic ",
      price: "$15.08",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_thumb_220-v1/7d8d73e20fc4.jpg",
      dis: "54% Off",
      name: "Xiaomi Redmi Buds 3 Youth Edition Earphone Tws Wireless Bluetooth 5.2 Gaming Headset Touch Control Earbuds 3 Lite With Mic",
      price: "$17.99",
    },

    ];

consumerContent.map(function (elem) {
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
  
  var hr = document.createElement("div");
  hr.setAttribute('class','icon-box');
  var heart = document.createElement("p");
  // var qr = document.createElement("img");
 
  heart.innerText = "🤍";

  
  var name = document.createElement("p");
  name.textContent = elem.name;
  

  var price = document.createElement("p");
  price.innerText = elem.price;
  price.style.color = "red";
  price.style.fontSize = "22px";
   

  box.append(img, dis, name, price, hr, heart);
  
    document.querySelector("#consumer_content").append(box)
   
  });
  