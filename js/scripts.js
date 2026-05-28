const hamburger = document.querySelector(".hamburger")
const header_menu = document.querySelector(".header_menu")

hamburger.onclick = nav_toggle
document.querySelectorAll('.header_menu a').forEach(function(a){
    a.onclick = nav_toggle
})

function nav_toggle(){
 hamburger.classList.toggle("header_hamburger")   
 header_menu.classList.toggle("menu_header")   
 document.body.classList.toggle("bodyblock")   
}