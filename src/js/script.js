/* Ширина вьюпорта */
let windowWidth = document.documentElement.clientWidth;

if (windowWidth < 1200) {
    /*Открытие/закрытие меню в header*/
    let menuButton = document.querySelector(".burger-button");

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            let menu = document.querySelector('.main-nav');  
            menu.classList.toggle("main-nav--closed");
            menu.classList.toggle("main-nav--opened");
        });
    }


    /*Действия при клике на пункт меню*/
    const menuLinks = document.querySelectorAll('.main-nav .site-nav a')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menu.classList.contains('main-nav--opened')) {
                menu.classList.toggle("main-nav--closed");
                menu.classList.toggle("main-nav--opened");
            }
        }
    }
}





