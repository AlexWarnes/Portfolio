'use strict';

const STARTUP = () => {
    toggleMenu();
}

const toggleMenu = () => {
    $('.burger-box').on('click', (e) => {
        e.preventDefault();
        $('.burger, .menu').toggleClass('open');
    });
};

$(STARTUP);