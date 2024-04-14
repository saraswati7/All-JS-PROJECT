let icon=document.querySelector(".icon")
let ul=document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars";
       }
})
//navbar
let shops=document.getElementById("shops");
let reviews=document.getElementById("shops");
let blogs=document.getElementById("shops");
let contacts=document.getElementById("shops");
shops.addEventListener("click",()=>{
    shops.style.color="rgb(white)"
    reviews.style.color="rgb(white)"
    blogs.style.color="rgb(white)"
    contacts.style.color="rgb(white)"

})
reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4,219,219)"
    shops.style.color="rgb(white)"
    blogs.style.color="rgb(white)"
    contacts.style.color="rgb(white)"
})
blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4,219,219)"
    reviews.style.color="rgb(white)"
    shops.style.color="rgb(white)"
    contacts.style.color="rgb(white)"
})
contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4,219,219)"
    reviews.style.color="rgb(white)"
    blogs.style.color="rgb(white)"
    contacts.style.color="rgb(white)"
})
// Card js
let crd=document.querySelectorAll(".crd");
let itempage=document.querySelector(".itempage")
let container=document.querySelector(".container");
let itemImg=document.getElementById("itemImg");
let buyBtn=document.getElementById("buyBtn")
console.log(crd);
    crd.forEach(function(curvalue){
        curvalue.addEventListener("click",function(){
            itempage.style.display="flex";
            container.style.display="none";
            let imgSrc=curvalue.firstElementChild.src;
            itemImg.src=imgSrc;
            let buyText=document.querySelector(".buyText");
            buyBtn.addEventListener("click",function(){
            document.querySelector(".buypage").style.display="block"
            buyText.innerHTML=`
            <h3>Enter Details:</h3>
            <input type="text" placeholder="Enter your Name" id="name"><br>
            <input type="text" placeholder="Enter your Address" id="address"><br>
            <input type="text" placeholder="Enter your Mobile Number" id="num"><br>
            <h3>Payment Option:</h3>
            <select>
                <option value="Google-pay">Google-pay</option>
                <option value="Phone-pay">Phone-pay</option>
                <option value="Bharat-pay">Bharat-pay</option>
                <option value="Cash-on-Delivery">Cash-on-Delivery</option>
            </select><br>
            `
            
           let button= document.createElement("button");
           button.innerText="submit";
           
           buyText.appendChild(button);
            button.addEventListener("click",function(){
                 let name=document.getElementById("name");
                 if(name.value=="" && address.value=="" && num.value==""){
                    alert("Please Enter Detail")
                 }
                 else{
                    alert("Your Response Recorded");
                    }
                document.querySelector(".buypage").style.display="none";

            })
              
            let cross=document.querySelector(".cross");
            cross.addEventListener("click",function(){
                document.querySelector(".buypage").style.display="none";
            })

            })
           })
        })
    // connect
    function connect(){
        let names=document.getElementById("name");
        let number=document.getElementById("number");
        if(name.value=="" && number.value==""){
            alert("Fill Details")
        }
        else{
            alert("Thanks For Connecting");
        }

    }
    