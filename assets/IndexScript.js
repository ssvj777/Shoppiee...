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

//CoverPage Content Display

  // Animation script for display
  const animationScript = ["Level up your style | With our stunning Collections."];

  // Typing animation script start
  new Typed("#coverPageContent", {  // use id selector
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    showCursor: false
  });

    // Animation script for name
    const animationScriptName = ["Shoppiee..."];

  // Typing animation script start
    new Typed(".brand", {  // use id selector
        strings: animationScriptName,
        typeSpeed: 222,
        backSpeed: 111,
        loop: true,
        showCursor: false
    });