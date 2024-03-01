
/*Главный слайдер*/
const sliderMain = document.querySelector('.main-slider.swiper');
const sliderMainInit = () => {
    yourSliderMain = new Swiper(sliderMain, {
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
        },
        
        /*autoplay: {
           delay: 5000,
        }*/
    })
}

let viewPortWidth = document.documentElement.clientWidth;

/*Сдайдер Сертификаты включается только при ширине вьюпорта от 1024px*/
let certSlider = null;
let certSliderSwiper = document.querySelector('.certificates__container');
let certSliderWrapper = document.querySelector('.certificates__list');
let certSliderSlide = document.querySelectorAll('.certificates__item');

function certSliderInit () {
    if (!certSlider) {
        certSlider = new Swiper(certSliderSwiper, {
            slidesPerView: 3,
            initialSlide: 1,
        });
    }
}

function certSliderDestroy () {
    if (certSlider) {
        certSlider.destroy();
        certSlider = null;
    }
}

function certSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1024) {
        certSliderDestroy();
        certSliderSwiper.classList.remove('swiper');
        certSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (certSliderSlide.length > 0) {
            for (let i = 0; i < certSliderSlide.length; i++) {
                certSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        certSliderInit(); 
        certSliderSwiper.classList.add('swiper');
        certSliderWrapper.classList.add('swiper-wrapper');

        if (certSliderSlide.length > 0) {
            for (let i = 0; i < certSliderSlide.length; i++) {
                certSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}

/*Сдайдер Регионы в разделе Георграфия проектов включается только при ширине вьюпорта от 1200px*/
let regionsSlider = null;
let regionsSliderSwiper = document.querySelector('.regions__swiper');
let regionsSliderWrapper = document.querySelector('.regions__list');
let regionsSliderSlide = document.querySelectorAll('.regions__item');

function regionsSliderInit () {
    if (!regionsSlider) {
        regionsSlider = new Swiper(regionsSliderSwiper, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

function regionsSliderDestroy () {
    if (regionsSlider) {
        regionsSlider.destroy();
        regionsSlider = null;
    }
}

function regionsSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1200) {
        regionsSliderDestroy();
        regionsSliderSwiper.classList.remove('swiper');
        regionsSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (regionsSliderSlide.length > 0) {
            for (let i = 0; i < regionsSliderSlide.length; i++) {
                regionsSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        regionsSliderInit(); 
        regionsSliderSwiper.classList.add('swiper');
        regionsSliderWrapper.classList.add('swiper-wrapper');

        if (regionsSliderSlide.length > 0) {
            for (let i = 0; i < regionsSliderSlide.length; i++) {
                regionsSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}

/*Сдайдер Проекты региона в разделе Георграфия проектов включается только при ширине вьюпорта от 1024px*/
let projectsSlider = null;
let projectsSliderSwiper = document.querySelector('.projects__swiper');
let projectsSliderWrapper = document.querySelector('.projects__slider');
let projectsSliderSlide = document.querySelectorAll('.projects__slide');

function projectsSliderInit () {
    if (!projectsSlider) {
        projectsSlider = new Swiper(projectsSliderSwiper, {
            slidesPerView: 3,
            spaceBetween: 30,
            
            

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                // when window width is >= 320px
                1200: {
                    spaceBetween: 0,
                },
            }
        });
    }
}

function projectsSliderDestroy () {
    if (projectsSlider) {
        projectsSlider.destroy();
        projectsSlider = null;
    }
}

function projectsSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1024) {
        projectsSliderDestroy();
        projectsSliderSwiper.classList.remove('swiper');
        projectsSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (projectsSliderSlide.length > 0) {
            for (let i = 0; i < projectsSliderSlide.length; i++) {
                projectsSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        projectsSliderInit(); 
        projectsSliderSwiper.classList.add('swiper');
        projectsSliderWrapper.classList.add('swiper-wrapper');

        if (projectsSliderSlide.length > 0) {
            for (let i = 0; i < projectsSliderSlide.length; i++) {
                projectsSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}
let productionProjectsSlide = document.querySelector('.projects__slide.production');
let consultProjectsSlide = document.querySelector('.projects__slide.consult');
let projectProjectsSlide = document.querySelectorAll('.projects__slide.project');

console.log(projectProjectsSlide.length);

if (viewPortWidth < 1024 || projectProjectsSlide.length >= 3) {
    productionProjectsSlide.style.display = "none";
    consultProjectsSlide.style.display = "none";
} else if (projectProjectsSlide.length = 2) {
    productionProjectsSlide.style.display = "none";
    consultProjectsSlide.style.display = "block";
} else if (projectProjectsSlide.length = 1) {
    productionProjectsSlide.style.display = "block";
    consultProjectsSlide.style.display = "block";
}


window.addEventListener('resize', certSliderResize, regionsSliderResize, projectsSliderResize);


sliderMainInit();
projectsSliderResize();
regionsSliderResize();
certSliderResize();








