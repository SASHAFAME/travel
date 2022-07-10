
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const bodyWrapper = document.querySelector('.body-wrapper')
    const clo = document.querySelector('.header__nav-close');

    const navBG = document.querySelector('.nav-bg')

    const navItem = document.querySelector('.nav-items')


    function navMenu() {
        nav.classList.toggle('nav--visible');
        bodyWrapper.classList.toggle('nav-bg');
    }

    navBG?.addEventListener('click', () => {
        navMenu();
    });


    burger?.addEventListener('click', () => {
        navMenu();
    });

    clo?.addEventListener('click', () => {
        navMenu();
    });

    navItem?.addEventListener('click', () => {
        navMenu();
    })