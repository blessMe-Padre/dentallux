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
            spaceBetween: 40,
            slidesPerView: 1,

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
        });
    }
});
