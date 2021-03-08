
// SPLIDER

const splideBox1 = document.querySelector('.splide1');
new Splide( splideBox1, {
    type      : 'loop',
    speed     : 800,
    easing    : 'cubic-bezier(.42,.65,.27,.99)',
    keyboard  : false,
    pagination: false,
    drag      : false,
    gap       : '3em',
}).mount();

const splideBox2 = document.querySelectorAll('.splide2');
splideBox2.forEach((e) => {
    new Splide(e,{
        type: 'fade',
        rewind: true,
        speed: 1000,
        easing: 'cubic-bezier(.42,.65,.27,.99)',
        arrows: false,
        autoplay: true,
        interval: 4200,
        pauseOnFocus: false,
    }).mount();
});

