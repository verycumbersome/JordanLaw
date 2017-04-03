$(document).ready(function() {
    $("#main").fadeOut(0);
    $("#aboutusdropdown").slideUp(0);
    // $("#title").fadeIn(2000);
    $("#aboutuswrapper").hover(function() {
        $("#aboutusdropdown").slideDown(2000);
    }, function() {
        $("#aboutusdropdown").slideUp(2000);
    })
});