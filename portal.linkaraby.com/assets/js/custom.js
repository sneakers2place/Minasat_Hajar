/* Global jQuery */

/* Contents
// ------------------------------------------------>
     1. wow animation
     2. Menu Mobile
     3. Cart
     4. Search
     5. Owl Slider
     6. Light Box
     7. Fixed Header
     8. Sticky Sidebar
*/

(function ($) {
    "use strict";



    /* ------------------  2. Menu Mobile ------------------ */
    var $menu_show = $('.mobile-toggle'),
        $menu = $('header .main-menu'),
        $list = $("ul.nav-menu li a"),
        $menu_list = $('header li.has-dropdown'),
        $menu_ul = $('ul.sub-menu'),
        $cart_model = $('.cart-model'),
        $cart_link = $('#cart-link'),
        $search_bar = $('#search_bar'),
        $search_close = $('.close-search'),
        $search_bot = $('#search-header'),
        $fixed_header = $('#fixed-header'),
        $fixed_header_dark = $('#fixed-header-dark'),
        $sticky_content = $('.sticky-content'),
        $sticky_sidebar = $('.sticky-sidebar');

    $menu_show.on("click", function (e) {
        $menu.slideToggle();
    });
    $list.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });

    $('#donation-open').on("click", function (e) {
        $('#donation-out').slideToggle();
    });


    /* ------------------  3. Cart ------------------ */
    $cart_link.on("click", function (e) {
        $cart_model.slideToggle("fast");
    });

    $(window).on("click", function (e) {
        $cart_model.hide("fast");
    });
    $cart_link.on("click", function (e) {
        event.stopPropagation();
    });





    /* ------------------  4. Search ------------------ */
    $search_bot.on("click", function (e) {
        $search_bar.slideToggle("fast");
    });
    $search_close.on("click", function (e) {
        $search_bar.hide("fast");
    });




    /* ------------------  5.Owl Slider ------------------ */
    var owl = $(".partners-slider");
    var owl2 = $(".work-slider");
    var owl3 = $(".partners-slider");

    owl.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        rtl: true,
        loop: true,
        dots: true,
        margin: 10,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 6
            },
            1000: {
                items: 8
            }
        }
    });

    owl2.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        rtl: true,
        loop: false,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    owl3.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        rtl: true,
        loop: false,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });




    /* ------------------  6. Light Box ------------------ */
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });




    /* ------------------  7. Fixed Header ------------------ */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 50) {
            $fixed_header.addClass('fixed-header');
            $fixed_header_dark.addClass('fixed-header-dark');
        } else {
            $fixed_header.removeClass('fixed-header');
            $fixed_header_dark.removeClass('fixed-header-dark');
        }
    });




    /* ------------------  8. Sticky Sidebar ------------------ */
    $sticky_content.theiaStickySidebar({
        additionalMarginTop: 30
    });
    $sticky_sidebar.theiaStickySidebar({
        additionalMarginTop: 30
    });
    // Demo video 1
    $(".youtube-link").grtyoutube({
        autoPlay: true,
        theme: "dark"
    });

    // Demo video 2
    $(".youtube-link-dark").grtyoutube({
        autoPlay: false,
        theme: "light"
    });



}(jQuery));
