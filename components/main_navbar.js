function main_navbar(){
    return `  <div id="logoDiv">
    <img id="logoImg" src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" alt="">
</div>
<div id="navSearch">
    <div id="topDropdown">
        <div id="saveWithApp">
            <img id="phoneIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAAzMzNhYWFDQ0O2trb7+/skJCTR0dFUVFRbW1uenp4hISHJycl7e3s7Ozvy8vKBgYGJiYmXl5epqam8vLwWFhbY2NhPT091dXUQEBDCwsLh4eFtbW3v7+89PT3m5uYtLS22fc18AAADFElEQVR4nO3Y23LaMBhFYbkECBDO5wApef+XrO2c03ZiJXv7b+haF4wvrLG+sUeySenrjReDTaHv9mrSvRNM76v1lgbcS8NtNLBr9VVNYoETO7AoprNA4LAFYFkccd4OsPgRBTy0BCyKRZCwNWBRHEOAoxaFpxChY5f/a70A4LbZ1OajgUJ4CBA2e5epXrsUj3PEWnNqMrFVferNw2HvpbTOFA4DhD+bTGxcn1o/p+9eon/kCacBwkZTXNan1mvSqfeVexix6Te7CdWnwT5T872ExX7Z6HH+xkJRCBEiRIjwWwt3HXPRwrH/Qv1QYb+FC61ChVctXKiL0BVCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0BZCWQhtIZSF0NZ/Irxp4ULrUGEx9l9oFyssdh1zt0WwsKUQImxLuFufZ3fbxeUKrx+H9gaXKdzMylHHQ808XaTwnNL1pjoYlaPvL1A4T2n8eLh/Obwk4Tml5+PyTah/ccLN4wtmXSel+b8vvMqb4jSl5ev5jvKGt/ER87593hTfoKbZwn2AMHOKRbmSPh9Psp/SUYDwmCks98Hp0/E5e6XZBgjTTd4cy9Xl7uFLqOi+vp+NauNL+/dWeZOstojevNzyB9X9uM8buwoRpo8n9rb6SZv1qt9O5tAYYDrkEp/uxHH68blvauG/kj+X/Rl0sxxvr1fD3GHzKGBK2XP9VJ04YPa2/6kC72BV1w5cxwLLtfEz/0k0bxntqxsvdpm7f6P6w4ViDf0FNL8v3B94H2kAAAAASUVORK5CYII=" alt="">
            <p class="pTag">Save $3 with App</p>
            <div class="arrowDiv">
                <img class="downArrow" src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="">
            </div>
        </div>
        <div id="saveHover">
            <h4 id="download">Download App!</h4>
            <p class="pTag" >Save $3 with App and new users only!</p>
            <div id="downloadTheApp">
                <div id="scanCode">
                    <img id="scan" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="">
                </div>
                <div id="app">
                    <img id="appImg" src="data:image/png;base64,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" alt="">
                </div>
            </div> 
        </div>
        <div id="support">
            <a href="/dummy.html">
                <p class="pTag">
                Support Center
                </p>
            </a>
            
        </div>
        <div id="shipTo">
            <p class="pTag">Ship to</p>
            <img id="usaFlag" src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/usa-512.png" alt="">
            <p class="pTag" id="usa">  / USA</p>
            <div class="arrowDiv">
                <img class="downArrow" src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="">
            </div>
        </div>
        <div id="lang">
            <p class="pTag">Language</p>
            <div class="arrowDiv">
                <img class="downArrow" src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="">
            </div>
        </div>
        <div id="countryDropDown">
            <div id="country">
                <p class="pTag">
                    Country Website
                </p>
                <div class="arrowDiv">
                    <img class="downArrow" src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="">
                </div>
            </div>
            <div id="counWeb">
                <ul>
                    <li>
                        Global(English)
                    </li>
                    <li>
                        France
                    </li>
                    <li>
                        Espana
                    </li>
                    <li>
                        Portugal
                    </li>
                    <li>
                        Italia
                    </li>
                    <li>Deutschland</li>
                    <li>Brazil</li>
                    <li>Turkeye</li>
                    <li>Polska</li>
                    <li>Tokyo</li>
                </ul>
            </div>
        </div>                
    </div>
    <div  id="navSignin">
       <div id="searchBar">
           <div id="sBarLeft">
               <span id="all">All</span>
               <img id="sDownArrow" src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="">
           </div>
           <div id="sBarMid">
               <input id="sinput" type="text" placeholder="IPhone">
           </div>
           <div id="sBarRight">
               <button id="sButton">
                <img id="searchGlass" src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" alt="">
               </button>
           </div>
       </div>
       <div id="navHead">
           <div id="signInDiv">
            <img id="signInImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAtFBMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAADg4OAAAAACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAADf398AAAAAAAAAAADR0dEAAABISEipqakmJiYAAAAoKCgAAAAAAAAAAAA1NTXMzMwAAAAAAADf399WVlYAAAAAAACsrKzf398AAAAAAAAAAAAAAADg4ODR0dHe3t4ReYomAAAAOHRSTlMAQPzFDvXsrm47E/C+tKl/9+dnGQXx8NuvioN5VVBKRTQQBvrz7d3Z18u4t7SjlYBfX11NMDAfCv0TF7MAAADjSURBVCjPpZDXcsJADEXX29wbEHoCIT30fg3//1941svA2h5eOE+aOdJIuuRJ9iyB/O/zqhlQKFKrbByAuZy7DNQ1DReIiipCyktD7W3Xz7o74r3AMZSN0M9y/HcSwjYUwzRTvJIemKFC/BRqWZmKIU7FVL6rYahDgo+z2hWhXfq6AXx9nmYrBqwrP+s0qEPKeHFKc/H7VhGLBJq/oWEsCaDTi+O+LYCgeTNjATrXqR4HFB3valrfkONboysR3B0+IneMgOsxgeoywo50JbAx1RBSr0INLaWadaq4f2LVMCGPuACORSZPQ0RWdgAAAABJRU5ErkJggg==" alt="">
            <p id="signInP"><a href="./login.html"> Sign In</a></p> 
           </div>
           <div id="signInHover">
               <p>Welcome to Gearbest</p>
               <div id="sIn">
                   <h4 id="sInH"><a href="./login.html">SignIn</a> </h4>
               </div>
               <div id="connectVia">
                   <p id="connectP">Or connect via</p>
                   <img id="gLogo" src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="">
               </div>
               <div id="line"></div>
               <p id="reg">Register on Gearbest: Earn 10 points</p>
               <div id="regDiv">
                   <h4 id="regH"><a href="./signup.html">Register</a> </h4>
               </div>
           </div>
           <div id="fav">
               <img id="favHeartImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAA81BMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGxsYTExMAAAAAAADg4OAAAADf39/g4OAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh4eEAAADi4uIAAADt7e3d3d1iYmLf39+RkZEAAADg4OAAAAArKyvf398QEBCoqKglJSXg4OAXFxfg4OAKCgohISHf39/f398dHR3f398AAADHx8cAAAAAAABSUlIvLy8AAAAAAAD////g4OAAAACSkpLV1dW0tLSHh4dycnJUVFRDQ0NMKKmhAAAASHRSTlMA+vTB+ZAoIAwF/NummWpAM/z89vHw5OHc0Me7mIuHc3BmU0tHPjwiFA37+/r47Ovr5drTz8C0s62to6GIgoB3ZF1WThsZEwOBbnz7AAAA+klEQVQoz73Q1W7DQBRF0WPm2GFsOCkzM7c+5f//msa3ELvtW6Wsh5krbc2MNJg5y9BUakNgqFHVDGta+kUK36coDr7KwGXTRNQmWeo6d1cN6iHEgsquDJdUIhkMbtgytOnjQ6f3OdTZkd3j+L5VjbdGGB2Uq8eLAHpsJMUh7b04cSJrbdJMluQp8iJOawEWVTmlcCeT1oGQdSQ0LscZ8wg4JylHN59NJpVbSY7Ht3Qpo5kcEqbCl1Q6C1ixJciVfPguNYNrqf89nLaVI6oRUvbJZylLu1RCZJy6fH2M4/w29T5+uC6w8LSqszLGLzebnAhs/OXc03P4r3d0M0A98TPbIwAAAABJRU5ErkJggg==" alt="">
               <p id="favP"><a href="./wishlist.html">Favourite</a> </p>
           </div>
           <div id="cart">
              
               <img id="cartImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAn1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqJAAUEQD/2QAAAABJPgAAAAAAAAAAAAD/2gD/2gAAAAAAAAD/2gAAAAAAAAAAAAD/2QAAAAAAAAD/2wAAAAAAAAD/2QAAAAD/4wAAAAD/2gD51ADQsQCiigB0YwBGOwCQauaIAAAALnRSTlMA09hV4UL48rFIE/zazLuVfXZJIR39++3r5+fk29TJqKakm46JgG9lW1pNNjISfz/FPQAAALRJREFUKM+dz1cKwzAQRdHn7vRip/feX+r+1xaDLDx2Igi5XyMODCP8mcWkvpkYwVDIg4mabBhkxs9qinx+qZxe0ka+Mn01zNkq0JmWvmJwFU0Ah6GiIzuSekCLa0UReRM0BRrcQRXwLmgB1OmlVOND0AaoMk5pyaegPVCpIG3Ll6ATYtqaPHYFXZJ3mH2+2Aq6ekF8D79UGrklPTu27Qgakq6ex6QlyBVk56kdBNnCqlpo7g1Gxypv685O3AAAAABJRU5ErkJggg==" alt="">
               <p id="cartP"><a href="./cart.html"> Cart</a></p>
               
           </div>
           <div id="cartHover">
            <p>Your shopping cart is Empty.
                Go shopping!
            </p>
        </div>
           
       </div>
    </div>
</div>
</div>
<div id="navCat">
<div class="catDiv" id="cat">
    <p  id="cateP">Category</p>
</div>

<div id="coup" class="catDiv">
<p class="catP"><a href="./coupon.html">COUPON</a>  </p>
</div>
<div id="superD" class="catDiv">
    <P class="catP"><a href="./superDeals.html">SUPER DEALS</a> </P>
</div>
<div id="AppOnly" class="catDiv">
    <p class="catP"><a href="./apponly.html">APP ONLY</a> </p>
</div>
<div id="newA" class="catDiv">
    <p class="catP"><a href="./newArrival.html">NEW ARRIVAL</a> </p>
</div>
</div>
<div id="slideShow">
<div id="slideShowDiv" class="div"></div>
<div id="catInfo" class="div">
    <p id="CEp">Consumer Electronics</p>
    <div class="catHover" id="CE">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">Smart Electronics</p>
                    <p class="pList"><a href="./smartWatches.html">Smart Watch</a> </p>
                    <p class="pList"><a href="#"></a> Smart Watch Phone</p>
                    <p class="pList">Smart wristband</p>
                    <p class="pList"><a href="./smartWatches.html">Smart Watch Accessiories</a> </p>
                    <p class="pList"><a href="./sportsWatches.html">Sport Watch</a> </p>
                    <p class="pList">Smart Health Watch</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Headphones & Earphones</p>
                    <p class="pList">Bluethooth Headphones</p>
                    <p class="pList">Earbud Headphones</p>
                    <p class="pList">Gaming Headphones</p>
                    <p class="pList">On-ear & Over-Ear Headphones</p>
                    <p class="pList">Sports & Fitness Headphones</p>
                    <p class="pList">Headphones Accessories</p>
                </div>
                <div class="lDiv">
                    <p class="pHead"><a href="3">Hot Brands</a> </p>
                    <p class="pList">Kospet</p>
                    <p class="pList"><a href="./leveno.html">Lenovo</a> </p>
                    <p class="pList">CORN</p>
                    <p class="pList">KZ</p>
                    <p class="pList">Ticwatch</p>
                    <p class="pList">Gocomma</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Security & Protection</p>
                    <p class="pList">Access Control</p>
                    <p class="pList">Alarm System</p>
                    <p class="pList">Door Intercom</p>
                    <p class="pList">IP Cameras</p>
                    <p class="pList">Smart Doorbells</p>
                    <p class="pList">Surveillance Camera System</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Xiaomi Ecosystem Products</p>
                    <p class="pList">Xiaomi</p>
                    <p class="pList">Amazfit</p>
                    <p class="pList">Aqara</p>
                    <p class="pList">Haylou</p>
                    <p class="pList">QCY</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Other Consumer Electronics</p>
                    <p class="pList">Smart Home</p>
                    <p class="pList">Action Cameras & DV Accessiories</p>
                    <p class="pList">Gimbal</p>
                    <p class="pList">Video game</p>
                    <p class="pList">Speakers</p>
                    <p class="pList">Microphone</p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/9534/KOSPET+M1+230X420+EN.jpg" alt="">

        </div> -->
</div>
    <p id="ISp">Industrial & Scientific</p>
    <div class="catHover" id="IS">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="CPAp">Cell Phone & Accessiories</p>
    <div class="catHover" id="CPA">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList"><a href="./asus.html">ASUS</a></p>
                    <p class="pList"><a href="./xiomi.html">Xiomi</a></p>
                    <p class="pList"><a href="./oneplus.html">OnePlus</a></p>
                    <p class="pList"><a href="./leveno.html"></a>Lenevo</p>
                    <p class="pList"><a href="./6gbRam.html">OPPO</a></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="Ap">Appliances</p>
    <div class="catHover" id="A">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="OFSp">Outdoors, Fitness & Sports</p>
    <div class="catHover" id="OFS">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="CTOp">Computers, Tablets & Office</p>
    <div class="catHover" id="CTO">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="HPCp">Health & Personal Care</p>
    <div class="catHover" id="HPC">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="HITp">Home Improvement & Tools</p>
    <div class="catHover" id="HIT">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="DTHp">Drones, Toys & Hobbies</p>
    <div class="catHover" id="DTH">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="HGp">Home & Garden</p>
    <div class="catHover" id="HG">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="MCEp">Motor & Car Electronics</p>
    <div class="catHover" id="MCE">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="MFp">Men's Fashion</p>
    <div class="catHover" id="MF">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="WJp">Watches & Jewelry</p>
    <div class="catHover" id="WJ">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
    <p id="GPp">Gearbest Promotion</p>
    <div class="catHover" id="GP">
        <div class="catHoverLeft">
            <div class="left1">
                <div class="lDiv">
                    <p class="pHead">3D Printer & Suppies</p>
                    <p class="pList">3D Printer Filament</p>
                    <p class="pList">3D Scanner</p>
                    <p class="pList">3D Printer Parts</p>
                    <p class="pList">3D Printing Pen</p>
                    <p class="pList">3D PrinterModule Board</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv"><p class="pHead">Laser Engraver & CNC</p>
                    
                    <p class="pList">Laser Engraving Machine</p>
                    <p class="pList">Laser Accessories</p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Testers & Detectors</p>
                    <p class="pList">Microscopes & Endoscope</p>
                    <p class="pList">Electronic Distance Meter</p>
                    <p class="pList">Multimeters & Fitting</p>
                    <p class="pList">Soldering Supplies</p>
                    <p class="pList">Ultrasonic Cleaner</p>
                    <p class="pList">Measuring ruler</p>
                </div>
            </div>
            <div class="left2">
                <div class="lDiv">
                    <p class="pHead">Power Tools</p>
                    <p class="pList">Measurement & Analysis</p>
                    <p class="pList">Arduino & SCM Supplies</p>
                    <p class="pList">Electric Screwdriver</p>
                    <p class="pList">Power Drill</p>
                    <p class="pList">Glue Gun</p>
                    <p class="pList"></p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Professional Tools</p>
                    <p class="pList">Laser Rangefinder</p>
                    <p class="pList">Electrical Equipments & Supplies</p>
                    <p class="pList">Drill</p>
                    <p class="pList">Magnifiers</p>
                    <p class="pList">Telescope</p>
                    <p class="pList">Cutting Tools</p>
                </div>
                <div class="lDiv">
                    <p class="pHead">Hot Brands</p>
                    <p class="pList">Creality
                    </p>
                    <p class="pList">Artillery</p>
                    <p class="pList">Ortur</p>
                    <p class="pList">Anycubic</p>
                    <p class="pList">QIDI</p>
                    <p class="pList"></p>
                </div>
            </div>
        </div>
        <!-- <div class="catHoverRight">
            <img class="imgHover" src="https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true" alt="">
        </div> -->
</div>
</div>

</div>
    
    `
};
 
// function main_navbarJs(){
//     retutn `let slideImg=
//     [
//         "https://uidesign.gbtcdn.com/GB/image/8823/1190%C3%97420-En.jpg?imbypass=true",
//         "https://uidesign.gbtcdn.com/GB/image/8823/1190X4200.jpg?imbypass=true",
//         "https://uidesign.gbtcdn.com/GB/image/9746/1190X420.jpg",
//         "https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg?imbypass=true",
//     ]
    
//     let i=0;
//         let img=document.createElement("img");
//         img.style.width="100%";
//         setInterval(function()
//         {
//             if(i===slideImg.length)
//             {
//                 i=0;
//             }
//             img.src=slideImg[i];
//             document.querySelector("#slideShowDiv").append(img);
//             i++;
//         },3000);
//     `
// }
export default main_navbar;