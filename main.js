$(document).ready(function() {
    const menuSlideSpeed = 500;

    $("#logo").fadeOut(0);
    $("#logo").fadeIn(1000);
    $("#menu").fadeOut(0);
    $("#menu").fadeIn(1000);
    $("#content h2").fadeOut(0);
    $("#content h2").fadeIn(2000);

    $("#content p").fadeOut(0);
    $("#content p2").fadeOut(0);
    $("#content p3").fadeOut(0);

    $("#title").animate({
        marginLeft: '40%'
    }, 1500, 'swing');

    $("#subtitle").animate({
        marginLeft: '-20%'
    }, 2000, 'swing', function() {
        $("#content p").fadeIn(2000);
    });

    // $("#title").css(
    //     'text-align', 'center');

    // $("#content").fadeOut(0);
    // $("#title").slideUp(0);

    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);


    $("#aboutuswrapper").hover(function() {
        $("#aboutusdropdown").stop(false, false).slideDown(menuSlideSpeed);
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
