let hamburger = document.getElementsByClassName("hamburger")[0];
let search_item_div = document.getElementsByClassName("search_item_div")[0];
let second_part = document.getElementsByClassName("second_part")[0];
let nav_bar = document.getElementsByClassName("nav_bar")[0];
let company = document.getElementsByClassName("company")[0];

hamburger.addEventListener("click",()=>{
    nav_bar.classList.toggle("h-resp");
    search_item_div.classList.toggle("v-resp");
    second_part.classList.toggle("v-resp");
    company.classList.toggle("company-center-resp");
})
