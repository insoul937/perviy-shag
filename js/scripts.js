var $ = jQuery;
$(document).ready(function(){
    $('body').jKit();
    $( ".tb .tb-t" )
        .hover(
            function() {
              $(this).parent().find('.tb-abs').fadeIn();

            },
            function() {
                $(this).parent().find('.tb-abs').fadeOut();

        });
});







