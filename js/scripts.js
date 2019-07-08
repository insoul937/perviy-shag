var $ = jQuery;
$(document).ready(function(){
    $('.theme-carousel').owlCarousel({
        items: 1,
        smartSpeed: 800,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: false,
        loop: true,
        responsiveRefreshRate: 1,
    });
    $( ".tb .tb-t" )
        .hover(
            function() {
              $(this).parent().find('.tb-abs').fadeIn();

            },
            function() {
                $(this).parent().find('.tb-abs').fadeOut();

        });
});







