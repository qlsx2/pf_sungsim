$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    })

    const mainProductSlide = new Swiper(".main_proudct_slide", {
        spaceBetween: 20,
        slidesPerView: '4',
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });
});





