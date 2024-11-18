$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    const mainProductSlide = new Swiper(".main_proudct_slide", {
        spaceBetween: 20,
        slidesPerView: '2',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: true,
        speed: 200,
        breakpoints: {
            768: {
                slidesPerView: 2,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: '4',
                centeredSlides: false,
            },
        },
    });
});

$(function () {

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
    })

    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });

    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');

        $('.hamburger').removeClass('is-active')
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });

});


$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 500) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});


