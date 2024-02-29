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

    // technologies SLIDER

    const technologiesSlider = document.querySelector('.technologies-swiper');
    if (technologiesSlider) {
        const slider1 = new Swiper('.technologies-swiper', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            speed: 700,
            spaceBetween: 40,
            slidesPerView: 3,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                769: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            },

            navigation: {
                nextEl: '.arrow__next--technologies',
                prevEl: '.arrow__prev--technologies',
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
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 30
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


    // Popup

    const initPopup = () => {
        const popupLinks = document.querySelectorAll('.popup-link');
        // console.log(popupLinks)
        const body = document.querySelector('body');
        const lockPadding = document.querySelectorAll(".lock-padding");
        let unlock = true;


        const timeout = 800;

        if (popupLinks.length > 0) {
            for (let index = 0; index < popupLinks.length; index++) {

                const popupLink = popupLinks[index];
                // console.log(popupLink)
                popupLink.addEventListener("click", function (e) {
                    const popupName = popupLink.getAttribute('href').replace('#', '');
                    const currentPopup = document.getElementById(popupName);
                    // console.log(currentPopup)
                    popupOpen(currentPopup);
                    e.preventDefault();

                });
            }
        }
        const popupCloseIcon = document.querySelectorAll('.close-popup');
        if (popupCloseIcon.length > 0) {
            for (let index = 0; index < popupCloseIcon.length; index++) {
                const el = popupCloseIcon[index];
                el.addEventListener('click', function (e) {
                    popupClose(el.closest('.popup'));
                    e.preventDefault();
                });
            }
        }

        function popupOpen(curentPopup) {
            if (curentPopup && unlock) {
                const popupActive = document.querySelector('.popup.open');
                if (popupActive) {
                    popupClose(popupActive, false);
                } else {
                    bodyLock();
                }
                curentPopup.classList.add('open');
                curentPopup.addEventListener("click", function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'));
                    }
                });
            }
        }

        function popupClose(popupActive, doUnlock = true) {
            if (unlock) {
                popupActive.classList.remove('open');
                if (doUnlock) {
                    bodyUnLock();
                }
            }
        }

        function bodyLock() {
            const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = lockPaddingValue;
                }
            }

            body.style.paddingRight = lockPaddingValue;
            body.classList.add('lock');

            unlock = false;
            setTimeout(function () {
                unlock = true;
            }, timeout);
        }

        function bodyUnLock() {
            setTimeout(function () {
                if (lockPadding.length > 0) {
                    for (let index = 0; index < lockPadding.length; index++) {
                        const el = lockPadding[index];
                        el.style.paddingRight = '0px';
                    }
                }
                body.style.paddingRight = '0px';
                body.classList.remove('lock');
            }, timeout);

            unlock = false;
            setTimeout(function () {
                unlock = true;
            }, timeout);
        }

        document.addEventListener('keydown', function (e) {
            if (e.which === 27) {
                const popupActive = document.querySelector('.popup.open');
                popupClose(popupActive);
            }
        });

        (function () {
            // проверяем поддержку
            if (!Element.prototype.closest) {
                // реализуем
                Element.prototype.closest = function (css) {
                    var node = this;
                    while (node) {
                        if (node.matches(css)) return node;
                        else node = node.parentElement;
                    }
                    return null;
                };
            }
        })();
        (function () {
            // проверяем поддержку
            if (!Element.prototype.matches) {
                // определяем свойство
                Element.prototype.matches = Element.prototype.matchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector;
            }
        })();
    };

    initPopup();

    // DOM
});
