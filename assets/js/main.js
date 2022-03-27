

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose =  document.getElementById('nav-close');
    

    /*=========== MENU SHOW ==============*/
    if (navToggle)
    {
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        })
    }


    /*==================== MENU HIDDEN ===================*/
    if (navClose)
    {
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        })
    }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    const navMenu = document.getElementById('nav-menu');
    //cuando pulsemos en cada nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader ()
{
    const header = document.getElementById('header');
    //Cuando el scroll es mayor que 50 de la altura de la pantalla, añade la clase scroll-header
    this.scrollY >= 50 ? header.classList.add('scroll-header'):header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
//_________________________________________________________//

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView : 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
    768: {
        slidesPerView: 3,
        },

    1024: {
        spaceBetween: 48,
        },

    },
});


/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
