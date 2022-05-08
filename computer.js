

var computerContent = [

    { id:1,
        image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v1/126354806df6.jpg",
        dis:"35% Off",
        name: "Xiaomi PEN Mijia Super Durable Sign Pen 0.5mm MI Pen For Office Signing Pens Smooth Switzerland Refill Mikuni For School Pen",
        price: "$2.39",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16049/goods_img_big-v1/7399af1d6cfe.jpg",
      dis:"35% Off",
      name: "New 3.5 inch TFT LCD Display Touch Screen + ABS Case + Heat sink For Raspberry Pi 4B 3B+ 3B",
      price: "$22.09",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_img_big-v1/9811754ee0ad.jpg",
      dis:"59% Off",
      name: "Original Xiaomi Pen Writing Smooth Light Mijia Press the core Replacement Refill Blue Red Black 0.5mm BUSINESS Roller Ball PEN",
      price: "$6.89",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16424/goods_thumb_220-v1/bf09b2a72573.jpg",
      dis:"21% Off",
      name: "Original Xiaomi Mi Type-C to HDMI Multi-function Converter Adapter for MacBook Notebook Laptop",
      price: "$22.39",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16425/goods_img_big-v1/b2dcd4537dba.jpg",
      dis:"29% Off",
      name: "Xiaomi Mi Wireless Mouse Gaming 7200DPI RGB Backlight Game Optical Rechargeable 32-bit ARM USB 2.4GHz Computer Mouse",
      
      price: "$35.39",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16481/goods_img_big-v1/6e9e1d679bfb.jpg",
      dis:"371% Off",
      name: "YG230 Mini Projector PK YG300 YG310 Portable for 1080P Video Beamer Home Theater WiFi Multiscreen Media Player Child Gift",
      price: "$69.50",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16463/goods_img_big-v2/6ce9e41f4082.jpg",
      dis:"20% Off",
      name: "Fanless Industrial Computer IPC Mini PC Windows 10 or Linux Ubuntu Intel Core I7 8550U i5 8250U i3 8140U 7020U VGA HD-MI LAN 2 RS232 COM",
      price: "$625",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16493/goods_img_big-v3/aea884a62c4d.jpg",
      dis:"39% Off",
      name: "Global Version Wanbo T2 MAX Projector 1080P Mini LED Portable WIFI Full HD Projector 4K 1920 1080P Keystone Correction For Home ",
      price: "$189.03",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16484/goods_img_big-v1/6701798bd308.jpg",
      dis:"57% Off",
      name: "Q6S Mini Projector LED 4000 Lumens 1080P Supported Portable Home Theater Smart Phone Beamer for TV Stick/HD/USB/AV/PS4",
      price: "$126.40",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16463/goods_img_big-v1/43c42510e1a3.jpg",
      dis:"21% Off",
      name: "Partaker 11th Gen Fanless Mini PC Intel Core i7 1165G7 10710U Gaming PC Micro Desktop Computer NUC 4K HTPC 2xDDR4 M.2 PCIe SSD",
      price: "$425.39",
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
    document.querySelector("#computer_content").append(box)
   
  });
