var menu = document.querySelector(".menu");
var open = document.querySelector(".open");
var close=document.querySelector(".close");
var body = document.querySelector("body");
var menus=document.querySelectorAll(".menu li")
open.addEventListener("click",()=>{
    console.log("open clicked");
    menu.classList.toggle("nav-active");
    body.classList.add("scroll-off");
    close.classList.toggle("close-active");

})



menus.forEach((node)=>{
    node.addEventListener("click",()=>{
        menu.classList.toggle("nav-active");
        body.classList.remove("scroll-off");
        close.classList.toggle("close-active");
    })
})


window.addEventListener("resize",(e)=>{
    if(screen.width>1024){
        if(menu.classList.indexOf("nav-active")!=-1)
            menu.classList.remove("nav-active");
        if(body.classList.indexOf("scroll-off")!=-1)
        body.classList.remove("scroll-off");
        if(close.classList.indexOf("close-active")!=-1)
         close.classList.remove("close-active");
    }
})
var email_x = document.querySelector("#email");
var name_x = document.querySelector("#name");
var address_x = document.querySelector("#address")
var myform = document.querySelector("#myform");
// myform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     var values = {
//         name:name_x.value.toString(),
//         email:email_x.value.toString(),
//         address:address_x.value.toString()

//     }
//     var options={
//         body:JSON.stringify(values),
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         method:"POST"
//     }
//     fetch("https://formspree.io/f/myyokoop",options).then((resp)=>{
        
//     })

   
// })