document.addEventListener('DOMContentLoaded', function () {
    const target = document.querySelector('.burger-icon');
    const headerNav = document.querySelector(".header-nav");

    let isClosed = true;

    target.addEventListener('click', function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed) {
            target.classList.remove('open-burger');
            target.classList.add('closed-burger');
            headerNav.classList.add('is-active');
            isClosed = false;
        } else {
            target.classList.remove('closed-burger');
            target.classList.add('open-burger');
            headerNav.classList.remove('is-active');
            isClosed = true;
        }
    }

    // MAIN SLIDER

    const heroSlider = document.querySelector('.hero-swiper');
    if (heroSlider) {
        const slider1 = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            speed: 700,
            spaceBetween: 40,
            slidesPerView: 1,

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }

    // Swiper-team
    const teamSlider = () => {
        const itemSlider = function () {
            const item = document.querySelector('.team-item');
            let swiper;
            // console.log('Подключился')
            if (item) {

                swiper = new Swiper(item, {
                    loop: true,
                    autoplay: {
                        delay: 10000
                    },
                    speed: 700,
                    direction: 'horizontal',
                    spaceBetween: 15,
                    slidesPerView: 1,
                    equalHeight: true,

                    // If we need pagination
                    navigation: {
                        nextEl: ".arrow__next--team",
                        prevEl: ".arrow__prev--team",
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 15
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        }
                    }
                });
            }
        };

        itemSlider();
    }

    // Swiper-team
    const smileSlider = () => {
        const itemSlider = function () {
            const item = document.querySelector('.smile-item');
            let swiper;
            // console.log('Подключился')
            if (item) {

                swiper = new Swiper(item, {
                    loop: true,
                    autoplay: {
                        delay: 10000
                    },
                    speed: 700,
                    direction: 'horizontal',
                    spaceBetween: 15,
                    slidesPerView: 1,
                    equalHeight: true,

                    // If we need pagination
                    navigation: {
                        nextEl: ".arrow__next--smile",
                        prevEl: ".arrow__prev--smile",
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        695: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }
                });
            }
        };

        itemSlider();
    }

    teamSlider();
    smileSlider();


    // DOM
});
