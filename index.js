
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const clo = document.querySelector('.header__nav-close');
    const navItem = document.querySelector('nav__close')
    const bg = document.querySelector('.menu-background');
    const body = document.querySelector('body');
    const lockPadding = document.querySelector('.lock-padding');
    const popup = document.querySelector('.popup');
    const popupLink = document.querySelector('#popupLink')
    const buttonLogin = document.querySelector('.button_login');


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

    navItem?.addEventListener('click', closeMenu);

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
    