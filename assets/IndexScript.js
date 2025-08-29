// Side Navbar display
var sidenav= document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left = "0"
}

function closeNavbar(){
    sidenav.style.left = "-60%"
}

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