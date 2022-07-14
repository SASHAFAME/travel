
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const clo = document.querySelector('.header__nav-close');
    const navItem = document.querySelector('.nav-items')
    const bg = document.querySelector('.menu-background');


    function openMenu() {
        nav.classList.toggle('nav--visible');
        bg.classList.toggle('active');
    }

    function closeMenu() {
        nav.classList.remove('nav--visible');
        bg.classList.remove('active');
    }

    burger?.addEventListener('click', () => {
        openMenu();
    });

    clo?.addEventListener('click', () => {
        openMenu();
    });

    navItem?.addEventListener('click', () => {
        closeMenu();
    })

    bg?.addEventListener('click', () => {
        closeMenu();
    })