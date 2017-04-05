$(document).ready(function() {
    // $("#main").fadeOut(0);
    // $("#title").slideUp(0);
    
    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);
    

    $("#aboutuswrapper").hover(function() {
        $("#aboutusdropdown").stop().slideDown('slow');
    }, function() {
        $("#aboutusdropdown").stop().slideUp('slow');
    });
    
    $("#practiceswrapper").hover(function() {
        $("#practicesdropdown").stop().slideDown('slow');
    }, function() {
        $("#practicesdropdown").stop().slideUp('slow');
    });
    
    $("#blogwrapper").hover(function() {
        $("#blogdropdown").stop().slideDown('slow');
    }, function() {
        $("#blogdropdown").stop().slideUp('slow');
    });
    
    $("#contactwrapper").hover(function() {
        $("#contactdropdown").stop().slideDown('slow');
    }, function() {
        $("#contactdropdown").stop().slideUp('slow');
    });
});