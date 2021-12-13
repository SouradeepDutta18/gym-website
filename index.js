var menu = document.querySelector(".menu");
var open = document.querySelector(".open");
var close=document.querySelector(".close");
var body = document.querySelector(".body");
open.addEventListener("click",()=>{
    console.log("open clicked");
    menu.classList.toggle("nav-active");
    body.classList.toggle("scroll-off");
    close.classList.toggle("close-active");

})
close.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");
    body.classList.toggle("scroll-off");
    close.classList.toggle("close-active");
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