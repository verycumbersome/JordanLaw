$(document).ready(function() {
    var page = $("html, body");

    $("html,body").animate({scrollTop: 0}, 100);

    setInterval(function(){
        $(".scrolldownarrow").stop().effect("bounce", { times:3, distance:20, easing:"easeInCubic" }, 'normal');
    }, 1500);

    $(".scrollbox").click(function(e) {

        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
        });

        page.stop().animate({scrollTop: $("footer").position().top}, 1500, function(){
           page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });

       return false;
    });
});

$(window).scroll(function(event){

    yOffset = window.pageYOffset;
    windowHeight = window.innerHeight;
    var breakpoint = windowHeight/3;

    if (yOffset > breakpoint){
        $(".navbar").addClass('scrolldown');
        $(".navbar").addClass('navbar-inverse');
        $(".navbar").removeClass('navbar-light');
        // $("#missionstatement").addClass('slideInUp');
        // $("#missionstatement").addClass('scrolldown');
    }
    else{
        $(".navbar").removeClass('scrolldown');
        $(".navbar").removeClass('navbar-inverse');
        $(".navbar").addClass('navbar-light');
        // $("#missionstatement").removeClass('scrolldown');

    }

});
