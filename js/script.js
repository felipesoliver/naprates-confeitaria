// BURGER MENU

function menuBtnInit() {
    const menuBtn = document.querySelector('.menu-btn');
    const pageList = document.querySelector('.pageList');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            pageList.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            pageList.classList.remove('active');
            menuOpen = false;
        }
    });
}
menuBtnInit();

// ANIMATION ON SCROLL

AOS.init();

// SHOW / HIDE MENU ANIMATION

function navBarInit() {
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
}
navBarInit();

// PARALAX / RELLAX

function rellaxInit() {
    var rellax = new Rellax('.rellax');
}
rellaxInit();