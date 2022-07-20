    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const clo = document.querySelector('.header__nav-close');
    const navClose = document.querySelectorAll('.nav__link');
    const bg = document.querySelector('.menu-background');
    const body = document.querySelector('body');
    const lockPadding = document.querySelector('.lock-padding');
    const popup = document.querySelector('.popup');
    const popupLink = document.getElementById('popup-link');
    const buttonLogin = document.querySelector('.button_login');

    const slides = document.querySelectorAll('.slide');

    const haveAcc = document.querySelectorAll('.haveacc')
    const popupContent = document.querySelector('.popup__content')
    const registerContent = document.querySelector('.register_content')
    const signIn = document.querySelector('.signin');




    signIn.addEventListener('click', function() {
    let valueLogin = document.getElementsByTagName("input")[0].value
    let valuePass = document.getElementsByTagName("input")[1].value
    alert('Ваш логин: ' + valueLogin + ', ' + 'ваш пароль: ' + valuePass);
        });

    function openMenu() {
        nav.classList.toggle('nav--visible');
        bg.classList.toggle('active');
    }

    function closeMenu() {
        nav.classList.remove('nav--visible');
        bg.classList.remove('active');
    }

    function switchPopup() {
        nav.classList.remove('nav--visible');
    }

    burger?.addEventListener('click', openMenu);

    clo?.addEventListener('click', openMenu);

    navClose[0]?.addEventListener('click', closeMenu);
    navClose[1]?.addEventListener('click', closeMenu);
    navClose[2]?.addEventListener('click', closeMenu);
    navClose[3]?.addEventListener('click', closeMenu);
    navClose[5]?.addEventListener('click', closeMenu);

    bg?.addEventListener('click', closeMenu);

    buttonLogin?.addEventListener('click', popupOpen);


    function popupOpen() {
        popup.classList.add('active');
        bg.classList.add('active');
    }
    function popupClose() {
        popup.classList.remove('active');
        bg.classList.remove('active');
    }
    popupLink?.addEventListener('click', popupOpen);
    popupLink?.addEventListener('click', switchPopup);

    bg?.addEventListener('click', popupClose);



    function regLogin() {
        popupContent.classList.toggle('inactive')
        registerContent.classList.toggle('active')
    }

        haveAcc[0].addEventListener('click', regLogin);
        haveAcc[1].addEventListener('click', regLogin);


    // SLIDER BEGIN

    let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderNext = document.querySelector('.slider-next')
const sliderPrev = document.querySelector('.slider-prev')

const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const d1 = document.querySelector('.d1')
const d2 = document.querySelector('.d2')
const d3 = document.querySelector('.d3')


s1.addEventListener('click', function() {
    offset = 0
    sliderLine.style.left = -offset + 'px';
    d1.classList.add('active')
    d2.classList.remove('active')
    d3.classList.remove('active')
})

s2.addEventListener('click', function() {
    offset = 860
    sliderLine.style.left = -offset + 'px';
    d1.classList.remove('active')
    d2.classList.add('active')
    d3.classList.remove('active')
})

s3.addEventListener('click', function() {
    offset = 1720
    sliderLine.style.left = -offset + 'px';
    d1.classList.remove('active')
    d2.classList.remove('active')
    d3.classList.add('active')
})

d1.addEventListener('click', function() {
    offset = 0
    sliderLine.style.left = -offset + 'px';
    d1.classList.add('active')
    d2.classList.remove('active')
    d3.classList.remove('active')
})

d2.addEventListener('click', function() {
    offset = 860
    sliderLine.style.left = -offset + 'px';
    d1.classList.remove('active')
    d2.classList.add('active')
    d3.classList.remove('active')
})

d3.addEventListener('click', function() {
    offset = 1720
    sliderLine.style.left = -offset + 'px';
    d1.classList.remove('active')
    d2.classList.remove('active')
    d3.classList.add('active')
})

// SLIDER END

// MEDIA START

const sliderLineMobile = document.querySelector('.slider-line-mobile');



    sliderNext.addEventListener('click', function() {
        offset = offset + 360;
        if (offset > 720) {
            offset = 720;
        }
        sliderLineMobile.style.left = -offset + 'px';

    })
    
    sliderPrev.addEventListener('click', function() {
        offset = offset - 360;
        if (offset < 0 ) {
            offset = 0;
        }
        sliderLineMobile.style.left = -offset + 'px';

    })

