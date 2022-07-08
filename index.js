
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const navBg = document.querySelector('body')
    const clo = document.querySelector('.header__nav-close');


    burger?.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
        
    });

    clo?.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
    });
