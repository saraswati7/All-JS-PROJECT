let btns=document.querySelectorAll(".btn");
let submit=document.getElementById("submit");
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
btns.forEach(function(buttons){
    buttons.addEventListener("click",function(){
        console.log(buttons.attributes.id.value);
        if(buttons.attributes.id.value=="ui"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="none";
            document.getElementById("android").style.display="none";

        }
        if(buttons.attributes.id.value=="web"){
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("webDesign").style.display="block";
            document.getElementById("android").style.display="none";

        }
        if(buttons.attributes.id.value=="mobile"){
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("webDesign").style.display="none";
            document.getElementById("android").style.display="block";

        }
        if(buttons.attributes.id.value=="all"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="block";
            document.getElementById("android").style.display="block";

        }
        
    })
})
function downloadBtn(){
    alert("CV Downloaded")
}
submit.addEventListener("click", function(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let msg=document.getElementById("msg");

    if(name.value==""|| email.value== ""|| msg.value==""){
        alert("please fill Details")
    }
    else{
        alert("Thanks for connecting")
    }
 })