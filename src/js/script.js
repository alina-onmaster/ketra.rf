let menuButton = document.querySelector(".burger-button");

if (menuButton) {
    menuButton.addEventListener('click', () => {
        let menu = document.querySelector('.main-nav');  
        menu.classList.toggle("main-nav--closed");
        menu.classList.toggle("main-nav--opened");
    });
}



