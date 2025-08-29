// Side Navbar display
var sidenav= document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left = "0"
}

function closeNavbar(){
    sidenav.style.left = "-60%"
}

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


