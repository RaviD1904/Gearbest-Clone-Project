/*---------------------homepage main-carasoel statrts here----------------------  */

import navMain from "../components/nav-main.js";
document.querySelector("#nav-main").innerHTML=navMain();


import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML=footer();


let slideImg = [
  "https://uidesign.gbtcdn.com/GB/image/6592/en-1190x420.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/8823/1190%C3%97420-En.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
  "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
  "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true",
];

let i = 0;
let img = document.createElement("img");
img.style.width = "100%";
img.style.height="100%";
setInterval(function () {
  if (i === slideImg.length) {
    i = 0;
  }
  img.src = slideImg[i];
  document.querySelector("#slideShowDiv").append(img);
  i++;
}, 2000);


/*---------------------homepage main-carasoel Ends ----------------------  */



/*---------------------homepage Collection starts ----------------------  */

let collection = [
  {
    goodsSn: "105077334730966498",
    goodsUrl:
      "https://m.gearbest.com/other-laptop-accessories/pp_3007170518998737.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img-v1/c5104a28f407.jpg",
    wareCode: "2000001",
    goodsTitle:
      "RUNFENGTE New 4 in 1 Type-C Docking Station HDMI USB3.0 USB2.0 PD HUB Multifunctional Hub 4 in 1 Docking Station Converter",
    displayPrice: "31.59",
  },
  {
    goodsSn: "104998717280060798",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3007914561392141.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16031/goods_img-v4/5de9bbee1875.jpg",
    wareCode: "2000001",
    goodsTitle:
      "OnePlus 8T 8 T 8GB 128GB Snapdragon 865 5G Smartphone 120Hz AMOLED Fluid Screen 48MP Quad Cams 4500mAh 65W Warp",
    displayPrice: "675.99",
  },
  {
    goodsSn: "105077334719014023",
    goodsUrl:
      "https://m.gearbest.com/sleeping-aids/pp_3007700842129203.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16387/goods_img-v1/3f53ffa009d3.jpg",
    wareCode: "2000001",
    goodsTitle:
      "3D Sleeping Mask Block Out Light Soft Padded Sleep Mask For Eyes Slaapmasker Eye Shade Blindfold Sleeping Aid Face Mask Eyepatch",
    displayPrice: "5.13",
  },
  {
    goodsSn: "104921852205256877",
    goodsUrl:
      "https://m.gearbest.com/necklaces---pendants/pp_3002487273793243.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15917/goods_img-v1/129b571c98bc.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Butterfly Statement Necklaces Pendants Woman Chokers Collar Water Wave Chain Bib 24K Yellow Gold Filled Chunky Jewelry",
    displayPrice: "13.88",
  },
  {
    goodsSn: "104921852180836929",
    goodsUrl:
      "https://m.gearbest.com/electric-scooters/pp_3006037338151816.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16025/goods_img-v5/c6726e7c787f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "2020 Original Mijia Pro 2 Smart Electric Scooter Foldable Hoverboard Skateboard Kick Scooter with APP 45KM Mileage",
    displayPrice: "575.99",
  },
];

collection.map(function (el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("h4");
  let h = document.createElement("h2");

  img.src = el.goodsImage;
  p.innerText = el.goodsTitle;
  h.innerText = `$${el.displayPrice}`;

  div.append(img, p, h);

  document.getElementById("deal").append(div);
});



/*--------------------- Collection Ends  ----------------------  */


/*--------------------- SuperDeals part starts  ----------------------  */

let deals1 = [
  {
    goodsSn: "104921852176841310",
    goodsUrl:
      "https://m.gearbest.com/yoga-accessories/pp_3002297784796315.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15899/goods_img-v1/8f4a952d6f99.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Outtobe 6 PCS Resistance Loop Exercise Bands Resistance Bands Elastic Pull Rope Latex Yoga Exercise Expander Fit Simplify",
    displayPrice: "20.33",
  },
  {
    goodsSn: "105077334707997465",
    goodsUrl:
      "https://m.gearbest.com/bluetooth-headphones/pp_3004237179884090.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Original Xiaomi Redmi Airdots 2 TWS Fone Bluetooth Earphones Wireless Headphones with Mic Handsfree Earbuds Redmi Airdots 2",
    displayPrice: "8.99",
  },
  {
    goodsSn: "105077334703710022",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3002624797405486.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img-v1/d17735e8a051.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Global Ulefone Power Armor 14 Pro NFC Rugged Phone 6GB 128GB Android 12 Waterproof Smartphone Wireless Charging 10000mAh",
    displayPrice: "285.99",
  },
  {
    goodsSn: "105077334685538033",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3005064229679709.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16420/goods_img-v1/f4faace420c4.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Global Version Haylou RT LS05S Smart Watch IP68 Waterproof Smartwatch 12 Sport Mode Heart Rate Monitor Fitness Tracker Android IOS Blood Oxygen",
    displayPrice: "36.55",
  },
  {
    goodsSn: "105077334718434752",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3006180189632222.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_img-v1/fd3be1b71a60.jpg",
    wareCode: "2000001",
    goodsTitle:
      "DM100 4G LTE Smart Watch Men Android 7.1 3GB 32GB 5MP Camera 2.86in Screen Bluetooth Smartwatch Phone GPS 1GB 16GB 480x640 IPS",
    displayPrice: "179.99",
  },
];

deals1.map(function (el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("h4");
  let h = document.createElement("h2");

  img.src = el.goodsImage;
  p.innerText = el.goodsTitle;
  h.innerText = `$${el.displayPrice}`;

  div.append(img, p, h);

  document.getElementById("deal1").append(div);
});

/*---------------------superDeals part Ends ----------------------  */



/*---------------------homepage Recommended section starts ----------------------  */

let data = [
  {
    goodsSn: 105077334735123120,
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3002686149968132.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/6233d35f6f8a.jpg",
    wareCode: 2000001,
    goodsTitle:
      "Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell Phone Unlocked 2022 5G Mobile Phones Cheap Android Xaiomi Telephone Xiomi",
    displayPrice: 92.5,
  },
  {
    goodsSn: 105077334686266900,
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3003725276776745.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v1/d238ad6a3d2a.jpg",
    wareCode: 2000001,
    goodsTitle:
      "2022 New Original 5G Smartphone 7.3 Inch MIX4 16GB+1TB 7300mAh 72MP Camera Unlock Mobile Phones Celular Cellphone Qualcomm 888+",
    displayPrice: 114.3,
  },
  {
    goodsSn: 104998717302773120,
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3001792073849251.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6900783172733300736/16512/goods_img-v1/3d50d4b71774.jpg",
    wareCode: 2000001,
    goodsTitle:
      "Global Version Xiaomi Redmi Note 10 Pro Smartphone 108MP Camera Snapdragon 732G 120Hz AMOLED Display 33W Fast Charging NFC",
    displayPrice: 264.99,
  },
  {
    goodsSn: 105077334712824580,
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3007048306822573.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16472/goods_img-v1/3a6f1ce7b307.jpg",
    wareCode: 2000001,
    goodsTitle:
      "M11 Ultra Smartphone 16GB+1TB 24+48MP Global Version Android Mobile Phone HD Camera Celular 5G Network Unlocked Cellphones",
    displayPrice: 114,
  },
  {
    goodsSn: 105077334737754900,
    goodsUrl:
      "https://m.gearbest.com/cables/pp_3009490168690877.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_img-v4/ad2a20a94177.jpg",
    wareCode: 2000001,
    goodsTitle:
      "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable",
    displayPrice: 7.99,
  },
  {
    goodsSn: "105077334705744628",
    goodsUrl:
      "https://m.gearbest.com/earrings/pp_3008821234329791.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6901600725130997760/16483/goods_img-v1/6a50886ac2f4.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Women Jewelry Copper Plated Real Gold Inlaid Zirconium Opal Earrings Retro Classic Versatile Simplicity Earrings Gold  for Daily Ceremony",
    displayPrice: "2.84",
  },
  {
    goodsSn: "456952401",
    goodsUrl:
      "https://m.gearbest.com/earrings/pp_009210784034.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190820/3210551/32105510074/goods_img-v1/182824-4710.jpg",
    wareCode: "1433363",
    goodsTitle: "Zircon Earring Ring Green Diamond Romantic Wind Earring Clip",
    displayPrice: "6.46",
  },
  {
    goodsSn: "457151401",
    goodsUrl:
      "https://m.gearbest.com/earrings/pp_009550956938.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190822/3210551/32105510102/goods_img-v1/163627-9169.jpg",
    wareCode: "1433363",
    goodsTitle:
      "K Gold Zircon Earring Wire Stripe Diamond-Studded Romantic Wind Earring",
    displayPrice: "6.36",
    agvRate: "5",
  },
  {
    goodsSn: "457064901",
    goodsUrl:
      "https://m.gearbest.com/earrings/pp_009925576151.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190821/3210551/32105510088/goods_img-v1/170332-1929.jpg",
    wareCode: "1433363",
    goodsTitle:
      "Fashionable K Gold Fashionable Diamond-Set Earring Buckle Platinum Plated",
    displayPrice: "5.49",
  },
  {
    goodsSn: "456999301",
    goodsUrl:
      "https://m.gearbest.com/earrings/pp_009524095525.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190820/3210551/32105510085/goods_img-v1/183303-7488.jpg",
    wareCode: "1433363",
    goodsTitle: "Double Banana Earrings Fashion Leaf Silver Earrings",
    displayPrice: "4.86",
  },
  {
    goodsSn: "105077334730966498",
    goodsUrl:
      "https://m.gearbest.com/other-laptop-accessories/pp_3007170518998737.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img-v1/c5104a28f407.jpg",
    wareCode: "2000001",
    goodsTitle:
      "RUNFENGTE New 4 in 1 Type-C Docking Station HDMI USB3.0 USB2.0 PD HUB Multifunctional Hub 4 in 1 Docking Station Converter",
    displayPrice: "31.59",
  },
  {
    goodsSn: "105077334708257698",
    goodsUrl:
      "https://m.gearbest.com/ultrabooks/pp_3006476121010610.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6897837697235349504/16460/goods_img-v1/881d605dc2a2.jpg",
    wareCode: "2000001",
    goodsTitle:
      "KUU A8S Pro15.6-inch FHD IPS Screen 8GB RAM Laptop Intel Celeron J4125 CPU 256GB SSD  Windows 10",
    displayPrice: "346.68",
  },
  {
    goodsSn: "105077334704010601",
    goodsUrl:
      "https://m.gearbest.com/usb-accessories/pp_3001578260406772.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16498/goods_img-v2/4e2188dbc07b.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Mini 3 Port USB 3.0 Splitter Hub High Speed Data Transfer Adapter for PC Laptop MacBook Pro Accessories",
    displayPrice: "6.68",
  },
  {
    goodsSn: "105077334682659704",
    goodsUrl:
      "https://m.gearbest.com/hdd---ssd/pp_3007372284717728.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16389/goods_img-v1/6b86c06f75c4.jpg",
    wareCode: "2000001",
    goodsTitle:
      "WALRAM 2.5 Sata3 Ssd 120gb 128gb 240gb 120 gb 512GB 1TB Hdd Internal Hard Disk Solid State Drive for Desktop Laptop Computer",
    displayPrice: "27.89",
  },
  {
    goodsSn: "104921852151114530",
    goodsUrl:
      "https://m.gearbest.com/power-banks/pp_3005664924380859.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15925/goods_img-v1/f33cae4e5a9f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Baseus 65W Power Bank 30000mAh PD Quick Charging FCP SCP Powerbank Portable External Charger For Smartphone Laptop Tablet",
    displayPrice: "55.24",
  },
  {
    goodsSn: "105077334722532502",
    goodsUrl:
      "https://m.gearbest.com/bluetooth-headphones/pp_3002843029777505.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16416/goods_img-v1/bb989b7c3383.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Original Lenovo HT38 TWS Earphone Wireless Bluetooth 5.0 Headphones Waterproof Sport Headsets Noise Reduction Earbuds with Mic",
    displayPrice: "17.9",
  },
  {
    goodsSn: "105077334729984109",
    goodsUrl:
      "https://m.gearbest.com/bluetooth-headphones/pp_3006517130364570.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_img-v1/ee626799cf36.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Lenovo LP7 TWS Bluetooth Headphones Smart Noide Reduction HIFI Sound Quality Earphone IPX5 Waterproof Long Battery Life with MIC",
    displayPrice: "59.99",
  },
  {
    goodsSn: "104998717308917912",
    goodsUrl:
      "https://m.gearbest.com/speakers/pp_3008392775113857.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16416/goods_img-v1/79e22a8ad84b.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Lenovo L022 BT Speaker with Mirror Portable Wireless Speaker Audio Player with 10W HD Sound and Bass Speakers for Home",
    displayPrice: "30.99",
  },
  {
    goodsSn: "105077334734477205",
    goodsUrl:
      "https://m.gearbest.com/speakers/pp_3001520786492215.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img-v1/a09642af37f9.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Lenovo K3 Pro Wireless Bluetooth Speaker BT 5.0 Metal Stereo Music Player Portable Speaker TWS Series Dynamic Full Frequenc",
    displayPrice: "11.06",
  },
  {
    goodsSn: "105077334733031156",
    goodsUrl:
      "https://m.gearbest.com/usb-accessories/pp_3004071297309830.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16493/goods_img-v2/d05cb079f5a7.jpg",
    wareCode: "2000001",
    goodsTitle:
      "USB C HUB 3.0 3.1 Type C 4 Port Multi Splitter Adapter OTG for Xiaomi Lenovo Macbook Pro Air PC Computer Laptop Accessories",
    displayPrice: "7.99",
  },
  {
    goodsSn: "105077334693764638",
    goodsUrl:
      "https://m.gearbest.com/led-multi-function-flashlights/pp_3004467005146787.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16409/goods_img-v1/5b7959d3089f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Flashlight Strong Light Rechargeable Zoom Giant Bright Xenon Special Forces Home Outdoor Portable Led Luminous Flashlight",
    displayPrice: "6.58",
  },
  {
    goodsSn: "105077334737754903",
    goodsUrl:
      "https://m.gearbest.com/cables/pp_3009490168690877.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16463/goods_img-v4/ad2a20a94177.jpg",
    wareCode: "2000001",
    goodsTitle:
      "ASLING Luminous Series One-Cable Three Purpose USB TO MTL Flowing Light Magnetic Charging Cable",
    displayPrice: "7.99",
  },
  {
    goodsSn: "105077334673794334",
    goodsUrl:
      "https://m.gearbest.com/other-garden-supplies/pp_3002238206183797.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16401/goods_img-v1/aec06a75ab4a.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Photocatalyst Mosquito Fly Killer Lamp New Home Bedroom USB Mosquito Repellent LED Light Mute Mosquito Trap Lamp",
    displayPrice: "19.99",
  },
  {
    goodsSn: "105077334722256201",
    goodsUrl:
      "https://m.gearbest.com/globe-bulbs/pp_3006085584552988.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16420/goods_img-v1/feb032eccd26.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Xiaomi Mijia E27 Smart LED Bulb Bluetooth MESH Version 5W 2700k-6500K Adjustable Brightness Voice Intelligent Control Lamp",
    displayPrice: "8.99",
  },
  {
    goodsSn: "104998717281658557",
    goodsUrl:
      "https://m.gearbest.com/electric-screwdriver/pp_3005248478637654.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16457/goods_img-v3/4d69d717ab50.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Xiaomi WOWSTICK 1F+ Electric Precision Screwdriver Kit Rechargeable Cordless Power Screw Driver with LED Light for Repairing Work",
    displayPrice: "36.99",
  },
  {
    goodsSn: "105077334683550737",
    goodsUrl:
      "https://m.gearbest.com/massage---relaxation/pp_3008565723721125.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_img-v2/677443d1848e.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Massage Gun Deep Tissue Percussion Mini LCD 32 Speeds Muscle Massager Pain Relief Body Relax Fitness",
    displayPrice: "109.99",
  },
  {
    goodsSn: "105077334733495740",
    goodsUrl:
      "https://m.gearbest.com/massage---relaxation/pp_3001977160010028.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_img-v1/311bfd34aecb.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Electric Neck Massager Pulse Back 6 Modes Power Control Far Infrared Pain Relief Tool Health Care Relaxation",
    displayPrice: "59.99",
  },
  {
    goodsSn: "105077334720949174",
    goodsUrl:
      "https://m.gearbest.com/massage---relaxation/pp_3007855650678657.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16387/goods_img-v2/616031106bcd.jpg",
    wareCode: "2000001",
    goodsTitle:
      "High frequency Massage Gun Muscle Relax Body Relaxation Electric Massager with Portable Bag Therapy Gun",
    displayPrice: "61.36",
  },
  {
    goodsSn: "105077334729452773",
    goodsUrl:
      "https://m.gearbest.com/massage---relaxation/pp_3004799168648907.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/f67c07d453c0.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Electric Neck Massager & Pulse Back 6 Modes Power Control Far Infrared Heating Pain Relief Tool Health Care Relaxation  Machine",
    displayPrice: "14.59",
  },
  {
    goodsSn: "105077334681366323",
    goodsUrl:
      "https://m.gearbest.com/massage---relaxation/pp_3002911996293284.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16481/goods_img-v1/fb6bbc896342.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Mini LCD Massage Gun 32 Speed Touch Screen Deep Tissue Percussion Muscle Mini Massager Fascial Gun For Pain Relief Body Massage",
    displayPrice: "25.95",
  },
  {
    goodsSn: "239113501",
    goodsUrl:
      "https://m.gearbest.com/men-s-jewelry/pp_1222596.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/22/goods_img-v1/20171122090633_28624.jpg",
    wareCode: "1433363",
    goodsTitle: "Titanium Steel Double Herringbone Bracelet",
    displayPrice: "12.64",
    agvRate: "4.56",
  },
  {
    goodsSn: "457153501",
    goodsUrl:
      "https://m.gearbest.com/necklaces---pendants/pp_009176800497.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190822/3210551/32105510106/goods_img-v1/170434-5639.jpg",
    wareCode: "1433363",
    goodsTitle: "925 Sterling Silver Triple Pearl Necklace",
    displayPrice: "15.06",
  },
  {
    goodsSn: "276651701",
    goodsUrl:
      "https://m.gearbest.com/necklaces-pendants/pp_009127848412.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180730/T010979/T0109790634/goods_img-v1/091229-2991.jpg",
    wareCode: "1433363",
    goodsTitle: "Peach Heart Drilling Pendant Water Chain Crystal Necklace",
    displayPrice: "4.77",
    agvRate: "4.6",
  },
  {
    goodsSn: "454788001",
    goodsUrl:
      "https://m.gearbest.com/necklaces---pendants/pp_009926613504.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190724/3210551/32105510008/goods_img-v1/203744-2379.jpg",
    wareCode: "1433363",
    goodsTitle: "Fashion Jewelry Simple Ball Pendant Fashion Snake Necklace",
    displayPrice: "7.13",
  },
  {
    goodsSn: "457153001",
    goodsUrl:
      "https://m.gearbest.com/necklaces---pendants/pp_009375079900.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190822/T013181/T0131810641/goods_img-v1/164723-9417.jpg",
    wareCode: "1433363",
    goodsTitle: "Stainless Steel Beaded Cross Pendant Necklace",
    displayPrice: "12.49",
  },
  {
    goodsSn: "105077334688927011",
    goodsUrl:
      "https://m.gearbest.com/android-tablets/pp_3005861431767251.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6905960412823613440/16481/goods_img-v2/42464fe8c725.jpg",
    wareCode: "2000001",
    goodsTitle:
      "New arrival Teclast M40Pro android 11.0 original 6GB RAM+128GB ROM 10.1 inch high performance 4G full Netcom learning/office tablet",
    displayPrice: "184.78",
  },
  {
    goodsSn: "105077334722964897",
    goodsUrl:
      "https://m.gearbest.com/android-tablets/pp_3008191065918162.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16406/goods_img-v2/c54120f58bbb.jpg",
    wareCode: "2000001",
    goodsTitle:
      "New Arrival 4G LTE Tablets 10.1 Inch Android 9.0 Octa Core Google Play Dual 4G SIM Cards GPS Bluetooth WiFi Tablet Pc",
    displayPrice: "238.64",
  },
  {
    goodsSn: "105077334701236312",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3001069310372430.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16417/goods_img-v1/b8788e35f34f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Original X70 Pro Cell phone 2021 New Arrival Smart Phone 12Gb Ram 512Gb Rom 5G Dual SIM Unlocked Cell phone",
    displayPrice: "115.28",
  },
  {
    goodsSn: "105077334700127812",
    goodsUrl:
      "https://m.gearbest.com/car-ornament/pp_3002812561142239.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16415/goods_img-v1/f74069b55892.jpg",
    wareCode: "2000001",
    goodsTitle:
      "New Arrival 1pc Large Car Bracket Universal Car Dashboard Mount Holder 180 x 130 x 25mm For Cell Phone i-Phone",
    displayPrice: "26.99",
  },
  {
    goodsSn: "105077334738341028",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3001408342636376.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16407/goods_img-v3/d03b3ee45e8a.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Original X70 Pro Cell phone 2021 New Arrival Smart Phone 12Gb Ram 512Gb Rom 5G Dual SIM Unlocked",
    displayPrice: "107.99",
  },

  {
    goodsSn: "104998717326396718",
    goodsUrl:
      "https://m.gearbest.com/chargers---power-adapters/pp_3008958762375543.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16034/goods_img-v1/2f3a3cb0919d.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Baseus QI Wireless Charger Receiver For iPhone 7 6 5 Samsung a5 7 Wireless Charging Receiver For Xiaomi 5 6 Redmi 4x oneplus lg",
    displayPrice: "13.13",
  },
  {
    goodsSn: "105077334683896387",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3008397531656977.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16409/goods_img-v1/df4217b2c0b1.jpg",
    wareCode: "2000001",
    goodsTitle:
      "OnePlus 8T 12GB 256GB Global Version Smartphone Snapdragon 865 5G 6.55inch 120Hz AMOLED Display 48MP Quad Rear Camera 4500mAh",
    displayPrice: "512.99",
  },
  {
    goodsSn: "104998717300617880",
    goodsUrl:
      "https://m.gearbest.com/bluetooth-headphones/pp_3005024679037472.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16069/goods_img-v5/cf025359aeb1.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Global Version OnePlus Buds Z Wireless Earphone TWS Bluetooth 5.0 IP55 Water-Resistant Fast Charge For OnePlus 8T Nord 8 Pro N10",
    displayPrice: "60.99",
  },
  {
    goodsSn: "104998717306826417",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3006317950948871.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16050/goods_img-v7/7184ad035356.jpg",
    wareCode: "2000001",
    goodsTitle:
      "World Premiere Global Version OnePlus Nord N10 5G 6GB 128GB Snapdragon 690 Smartphone 90Hz Display 64MP Quad Cams Warp 30T NFC",
    displayPrice: "329.99",
  },
  {
    goodsSn: "104998717288330490",
    goodsUrl:
      "https://m.gearbest.com/cell-phones/pp_3004776582508017.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16051/goods_img-v3/f0dbcebc31fc.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Original Oneplus 8 Pro 5G Mobile Phone 6.78 inch 2K 120Hz Snapdragon 865 Octa Core 8G 128G Android 10 30W Charger NFC Smartphone",
    displayPrice: "755.99",
  },
  {
    goodsSn: "105077334709533043",
    goodsUrl:
      "https://m.gearbest.com/sandals/pp_3006870951135143.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16389/goods_img-v1/8522bdcf5601.jpg",
    wareCode: "2000001",
    goodsTitle:
      "MIXIDELAI Genuine Leather Men Shoes Summer New Large Size Men Sandals Men Sandals Fashion Sandals Slippers Big Size 38-47",
    displayPrice: "42.6",
  },
  {
    goodsSn: "437630207",
    goodsUrl:
      "https://m.gearbest.com/men-s-sandals/pp_009323727063.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/28/goods_img-v2/20190228092424_43795.jpg",
    wareCode: "1433363",
    goodsTitle:
      "Men Beach Casual Sandals Breathable Lightweight Super Comfortable",
    displayPrice: "32.66",
    agvRate: "4.81",
  },
  {
    goodsSn: "259878317",
    goodsUrl:
      "https://m.gearbest.com/men-s-sandals/pp_009209073570.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2019/01/11/goods_img-v3/20190111180120_63372.jpg",
    wareCode: "1433363",
    goodsTitle:
      "Summer Men's Fashion Outdoor Leather Cow Breathable Hiking Shoes",
    displayPrice: "55.14",
    agvRate: "5",
  },
  {
    goodsSn: "264791006",
    goodsUrl:
      "https://m.gearbest.com/men-s-sandals/pp_1829568.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180423/T023966/T0239660050/goods-img/1524524590637508749.jpg",
    wareCode: "1433363",
    goodsTitle: "Men Summer Color Hollow Skid Beach Shoes",
    displayPrice: "16.21",
  },
  {
    goodsSn: "444512004",
    goodsUrl:
      "https://m.gearbest.com/men-s-sandals/pp_009381229028.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190409/T033390/T0333900193/goods_img-v1/233540-6410.jpg",
    wareCode: "1433363",
    goodsTitle: "New First Layer Leather Beach Leather Men'S Sandals",
    displayPrice: "35.69",
  },
  {
    goodsSn: "105077334736116754",
    goodsUrl:
      "https://m.gearbest.com/roller-skating/pp_3004891706476770.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/store/6868553449588584448/16392/goods_img-v1/5937b9530d81.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Whole kit skateboard Death Wish chocolate spitfire skateboard wheels VENTURE 139 trucks grizzly grip tapes",
    displayPrice: "110",
  },
  {
    goodsSn: "105077334726933591",
    goodsUrl:
      "https://m.gearbest.com/roller-skating/pp_3009448894768052.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16415/goods_img-v2/af30fb05ee8b.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Peter Outdoor Sports Cycling Glasses Men Women Road Bike Sunglasses Mountain Bicycle Gafas Ciclismo Sports Sunglasses Eyewear",
    displayPrice: "29.99",
  },
  {
    goodsSn: "104921852180836929",
    goodsUrl:
      "https://m.gearbest.com/electric-scooters/pp_3006037338151816.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16025/goods_img-v5/c6726e7c787f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "2020 Original Mijia Pro 2 Smart Electric Scooter Foldable Hoverboard Skateboard Kick Scooter with APP 45KM Mileage",
    displayPrice: "575.99",
  },
  {
    goodsSn: "104921852151250312",
    goodsUrl:
      "https://m.gearbest.com/electric-scooters/pp_3007555311929906.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15929/goods_img-v1/43e036c1692f.jpg",
    wareCode: "2000001",
    goodsTitle:
      "11 Inch 60V5400W Electric Scooter High Speed Off-Road Dual Drive Folding Electric Vehicle",
    displayPrice: "1699.99",
  },
  {
    goodsSn: "104971501842781263",
    goodsUrl:
      "https://m.gearbest.com/electric-scooters/pp_3008205197168943.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15952/goods_img-v2/19745f1c5af8.jpg",
    wareCode: "2000001",
    goodsTitle:
      "48V 500W Electric Scooter 100KM Distance 26ah Battery Patinete Electrico Adulto Foldable Kick e Scooter Electric Skateboard Bike",
    displayPrice: "630.98",
  },
  {
    goodsSn: "316185920",
    goodsUrl: "https://m.gearbest.com/shirts/pp_009186390848.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181016/T021828/T0218281173/goods_img-v1/231654-9945.jpg",
    wareCode: "1433363",
    goodsTitle: "Men's  Casual Striped Fashion Long Sleeve Shirt",
    displayPrice: "25.22",
    agvRate: "5",
  },
  {
    goodsSn: "341269502",
    goodsUrl: "https://m.gearbest.com/shirts/pp_009163100969.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181030/T002577/T0025770233/goods_img-v1/095656-5296.jpg",
    wareCode: "1433363",
    goodsTitle: "Men's Plaid Lapel Long Sleeve Shirt",
    displayPrice: "26.16",
  },
  {
    goodsSn: "341167004",
    goodsUrl: "https://m.gearbest.com/shirts/pp_009850718347.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181030/T002577/T0025770244/goods_img-v1/144618-3393.jpg",
    wareCode: "1433363",
    goodsTitle: "Men's Lapel Slim Fit Plaid Long Sleeve Shirt",
    displayPrice: "27.8",
  },
  {
    goodsSn: "240546505",
    goodsUrl:
      "https://m.gearbest.com/men-s-jackets-coats/pp_1276740.html?wid=1433363",
    goodsImage:
      "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171125/T010723/T0107230194/goods-img/1511579687064738149.jpg",
    wareCode: "1433363",
    goodsTitle: "Outdoor Breathable Waterproof Coat for Men",
    displayPrice: "50.25",
    agvRate: "4.67",
  },
  {
    goodsSn: "105077334706488948",
    goodsUrl:
      "https://m.gearbest.com/coats - jackets/pp_3009243615474464.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16399/goods_img-v1/1fcf5e41d3c0.jpg",
    wareCode: "2000001",
    goodsTitle:
      "2021 Teens New Winter Men Down Jacket Stylish Male Down Coat Thick Warm Man Clothing Brand Men Apparel Warm Parka",
    displayPrice: "123.54",
  },
  {
    goodsSn: "105077334718434752",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3006180189632222.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_img-v1/fd3be1b71a60.jpg",
    wareCode: "2000001",
    goodsTitle:
      "DM100 4G LTE Smart Watch Men Android 7.1 3GB 32GB 5MP Camera 2.86in Screen Bluetooth Smartwatch Phone GPS 1GB 16GB 480x640 IPS",
    displayPrice: "179.99",
  },
  {
    goodsSn: "105077334707952809",
    goodsUrl:
      "https://m.gearbest.com/thermometers/pp_3001304788057845.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img-v1/e540b94c9c89.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Xiaomi Mijia Bluetooth Temperature Humidity Monitoring Pro Electronic Digital Clock Watch Thermometer hygrometer Moisture Meter Work with Mi Home",
    displayPrice: "22.99",
  },
  {
    goodsSn: "105077334685538033",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3005064229679709.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16420/goods_img-v1/f4faace420c4.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Global Version Haylou RT LS05S Smart Watch IP68 Waterproof Smartwatch 12 Sport Mode Heart Rate Monitor Fitness Tracker Android IOS Blood Oxygen",
    displayPrice: "36.55",
  },
  {
    goodsSn: "105077334673491461",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3006819845906746.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16457/goods_img-v1/b94d452d25e7.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Smart Watch Men Full Touch Screen Sport Fitness Watch IP67 Waterproof Bluetooth For Android ios smartwatch Men+box",
    displayPrice: "28.9",
  },
  {
    goodsSn: "105077334682792470",
    goodsUrl:
      "https://m.gearbest.com/smart-watches/pp_3006470032047938.html?wid=2000001",
    goodsImage:
      "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16417/goods_img-v3/21ff9307e5ee.jpg",
    wareCode: "2000001",
    goodsTitle:
      "Smart Watch Men 400Mah Big Battery Music Play Fitness Tracker Bluetooth Call Sport Smartwatch 2021 Health Monitoring",
    displayPrice: "37.99",
  },
];

data.map(function (el) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("h4");
  let h = document.createElement("h2");

  img.src = el.goodsImage;
  p.innerText = el.goodsTitle;
  h.innerText = `$${el.displayPrice}`;

  div.append(img, p, h);

  document.getElementById("data").append(div);
});

/*---------------------homepage Recommended section Ends ----------------------  */