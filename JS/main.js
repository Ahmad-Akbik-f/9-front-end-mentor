let burgerIcon = document.querySelector(".burrger");
let navbar = document.querySelector(".land header ul")
let links = document.querySelectorAll(".land header ul li")
burgerIcon.onclick = (el)=>{
    el.stopPropagation();
    navbar.classList.toggle("open")
}
document.onclick = (el)=>{
    if(navbar.classList.contains("open")){
        if(el.target != navbar && el.target != links){
            navbar.classList.remove("open")
        }
    }
}