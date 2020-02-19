/*=====================================
|            Preloader                |
 =====================================*/
 $(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});



//        Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        
//        get section id like #about,#team etc
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top + 10
        }, 1250, "easeInOutExpo");
    });
});




