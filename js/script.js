/* paralax / rellax */

var rellax = new Rellax('.rellax');

/* animation on scroll */

AOS.init();

/* show / hide menu animation */

let fadeNavBar = window.pageYOffset;

window.onscroll = function() {
    let showNavBar = window.pageYOffset;
    if(fadeNavBar > showNavBar){
        document.querySelector(".container").style.opacity = "1";
        document.querySelector(".container").style.transition = "all 0.3s ease-in-out";
    }else{
        document.querySelector(".container").style.opacity = "0";
    }
    fadeNavBar = showNavBar;
}

/* burger menu */

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});