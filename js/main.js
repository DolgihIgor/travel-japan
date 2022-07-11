/* Самовызывающаяся функция для отображения header при скролле страницы */
(function () {
    // Находим элемент header на странице
    const header = document.querySelector('.header');
    // Функция, которая отслеживает положение скролла на странице
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        };
    };
}());

// Burger heandler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
}())