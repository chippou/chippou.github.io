$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(document).ready(function () {
    $('.slick-slider').slick({
        arrows: false,
        autoplay: false,
        dots: false,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '123px',
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '90px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '45px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.side-menu-toggle').on('click', function () {
        $('#side-menu').addClass('active animated fadeInRight');
        $('html, body').addClass('fobid-scroll');
    });

    $('#close-btn').on('click', function () {
        $('#side-menu').removeClass('fadeInRight');
        $('#side-menu').addClass('fadeOutRight');
        setTimeout(function () {
            $('#side-menu').removeClass('active animated fadeOutRight');
            $('html, body').removeClass('fobid-scroll');
        }, 500);
    });

    $('.navigation-link').on('click', function () {
        $('#close-btn').click();
    });

    $('#logo-container').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('#navigation-link-container li a').on('click', function () {
        $('#navigation-link-container li').removeClass("active");
        $(this).parent().addClass('active');
    })
});

function onScroll(event) {
    const headerSection = $('#header-section').outerHeight();
    const introductionSection = $('#introduction-section').outerHeight();
    const featureSection = $('#features-section').outerHeight();
    const gallerySection = $('#slider-section').outerHeight();
    const achievementSection = $('#achievement-section').outerHeight();
    const footerSection = $('#footer-section').outerHeight();
    $('.home-link, .introduce-link, .feature-link, .contact-link, .gallery-link').removeClass('active');
    var st = $(document).scrollTop();
    if (st + 150 < headerSection) {
        $('.home-link').addClass('active');
    }
    if (st + 150 > headerSection && st < headerSection + introductionSection) {
        $('.introduce-link').addClass('active');
    }
    if (st > headerSection + introductionSection
        && st < headerSection + introductionSection + featureSection + achievementSection) {
        $('.feature-link').addClass('active');
    }
    if (st > headerSection + introductionSection + featureSection + achievementSection
        && st < headerSection + introductionSection + featureSection + achievementSection + gallerySection + footerSection) {
        $('.gallery-link').addClass('active');
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.gallery-link').removeClass('active');
        $('.contact-link').addClass('active');
    }
}