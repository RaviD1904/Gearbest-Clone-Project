




var header = document.querySelector("#header");

//var sticky = header.offsetTop;







var cellContent = [

    { id:1,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v5/6233d35f6f8a.jpg",
      dis: "55% Off",
      name: "Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell Phone Unlocked 2022 5G Mobile Phones Cheap Android Xaiomi Telephone Xiomi  ",
      price: "$92.99",
      
      
    },
    { id:2,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_thumb_220-v1/d238ad6a3d2a.jpg",
      dis: "50% Off",
      name: "2022 New Original 5G Smartphone 7.3 Inch MIX4 16GB+1TB 7300mAh 72MP Camera Unlock Mobile Phones Celular Cellphone Qualcomm 888+ ",
      price: "$114.39",
    },
    {id:3,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_thumb_220-v4/ad2a20a94177.jpg",
      dis: "20% Off",
      name: "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable ",
      price: "$7.89",
    },
    {id:4,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_thumb_220-v1/3a6f1ce7b307.jpg",
      dis: "60% Off",
      name: "M11 Ultra Smartphone 16GB+1TB 24+48MP Global Version Android Mobile Phone HD Camera Celular 5G Network Unlocked Cellphones",
      price: "$113.69",
    },
    {id:5,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16456/goods_thumb_220-v1/5ef9d5b1a9a0.jpg",
      dis: "28% Off",
      name: "Ulefone Power Armor 13 Global Version 13200mAh Battery 8GB 256GB 6.81 inch Helio G95 IP68 IP69K Waterproof 4G Rugged Smartphone",
      
      price: "$325.39",
    },
    {id:6,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_thumb_220-v1/d17735e8a051.jpg",
      dis: "50% Off",
      name: "Global Ulefone Power Armor 14 Pro NFC Rugged Phone 6GB 128GB Android 12 Waterproof Smartphone Wireless Charging 10000mAh",
      price: "$285.98",
    },
    {id:7,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_thumb_220-v1/b77ce6885375.jpg",
      dis: "55% Off",
      name: "New M4PRO 6.7 Inch Global Version 256GB/512GB 6800mAh 16MP+32MP Smartphone Fingerprint Face ID Deca Core Mobile Phones MTK6889y",
      price: "$120",
    },
    {id:8,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15925/goods_thumb_220-v1/f33cae4e5a9f.jpg",
      dis: "15% Off",
      name: "Baseus 65W Power Bank 30000mAh PD Quick Charging FCP SCP Powerbank Portable External Charger For Smartphone Laptop Tablet",
      price: "$54.03",
    },
    {id:9,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16149/goods_thumb_220-v4/1f307d043a14.jpg",
      dis: "15% Off",
      name: "Global Version Xiaomi Redmi Note 10 Pro Smartphone 108MP Camera Snapdragon 732G 120Hz AMOLED Display",
      price: "$298.40",
    },
    {id:10,
      image_url: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_thumb_220-v1/095e569da460.jpg",
      dis: "60% Off",
      name: "Global Version I12 Pro Max 12GB 512GB Smartphone 5G 6.7 Inch Celular 5800mAh Android Cellphone Unlock 4G Mobile Phones",
      price: "$97.39",
    },

    ];

cellContent.map(function (elem) {
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
  
    document.querySelector("#cellP_content").append(box)
   
  });
  