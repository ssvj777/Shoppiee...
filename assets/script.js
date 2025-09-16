const scrollBtn = document.querySelector(".scrollBtn");

// Show/Hide button on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Side Navbar display
var sidenav= document.querySelector(".side-navbar")
let showToggle = document.querySelector(".showNavbar");
let showCloseBtn = document.querySelector(".closeNavbar");

document.querySelector(".togglebtn").addEventListener("click", function () {
  sidenav.style.left = "0"
  showToggle.style.display = "none";
  showCloseBtn.style.display = "flex";
});

document.querySelector(".xMark").addEventListener("click", function () {
  sidenav.style.left = "-60%"
  showToggle.style.display = "flex";
  showCloseBtn.style.display = "none";
});

//Search Bar script
var container = document.querySelector(".product-section")
var products = document.querySelectorAll(".products-box")

document.getElementById("search").addEventListener("keyup",function(event){
    var enterText = event.target.value.toUpperCase()
    
    for(product = 0; product < products.length; product ++){
        if (products[product].querySelector("p").textContent.toUpperCase().indexOf(enterText) < 0){
            products[product].style.display = "none"
        }
        else {
            products[product].style.display = "block"
        }
    }
})


