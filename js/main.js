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