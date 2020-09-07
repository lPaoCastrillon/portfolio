/*!
 * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    // $('#portfolio').magnificPopup({
    //   delegate: 'a',
    //   type: 'image',
    //   tLoading: 'Loading image #%curr%...',
    //   mainClass: 'mfp-img-mobile',
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0, 1]
    //   },
    //   image: {
    //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //   }
    // });

    $(window).on('load', function() {
        // $('#overlayer').fadeOut(3500, function() {
        // $(this).remove();
        //  });
        $("#overlayer").delay(2000).fadeOut("slow");
        // $(".line-1").delay(6000).fadeIn("show");
    });


    // (function makeDiv() {
    //     var divsize = ((Math.random() * 1) + 1).toFixed();
    //     // console.log("fef", divsize);
    //     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    //     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    //     $newdiv = $('<div/>').css({
    //         'width': divsize + 'px',
    //         'height': divsize + 'px',
    //         'background': '#ffffff',
    //         'box-shadow': '0 0 2px 1px blue',
    //         'z-index': '-1',
    //         'opacity': '.3',
    //         'position': 'absolute',
    //         'left': posx + 'px',
    //         'top': posy + 'px',
    //         'animation': 'moveStar 30s infinite'

    //     }).appendTo('body').fadeIn(100).delay(300, function() {
    //         // $(this).remove();
    //         makeDiv();
    //     });


    // })();


})(jQuery); // End of use strict