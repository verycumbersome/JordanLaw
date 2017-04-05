const menuSlideSpeed = 200;

$(document).ready(function() {
    $("body").fadeOut(0)
    $("body").fadeIn(1000)
    
    // $("#content").fadeOut(0);
    // $("#title").slideUp(0);

    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);


    $("#aboutuswrapper").hover(function() {
        $("#aboutusdropdown").stop().slideDown(menuSlideSpeed);
    }, function() {
        $("#aboutusdropdown").stop().slideUp(menuSlideSpeed);
    });

    $("#practiceswrapper").hover(function() {
        $("#practicesdropdown").stop().slideDown(menuSlideSpeed);
    }, function() {
        $("#practicesdropdown").stop().slideUp(menuSlideSpeed);
    });

    $("#blogwrapper").hover(function() {
        $("#blogdropdown").stop().slideDown(menuSlideSpeed);
    }, function() {
        $("#blogdropdown").stop().slideUp(menuSlideSpeed);
    });

    $("#contactwrapper").hover(function() {
        $("#contactdropdown").stop().slideDown(menuSlideSpeed);
    }, function() {
        $("#contactdropdown").stop().slideUp(menuSlideSpeed);
    });
});
