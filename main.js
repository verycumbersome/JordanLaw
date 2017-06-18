/*global $*/
$(document).ready(function() {
    var page = $("html, body");
    var yOffset = '';
    var windowHeight;
    const menuSlideSpeed = 300;
     
    $("html,body").animate({scrollTop: 0}, 100);
    $(".header").fadeOut(0);
    
    $("#content h2").fadeOut(0);
    
    // $("#missionstatement").fadeOut(0);
    
    $(".navbar").find(".active").removeClass("active");
    
    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);
    
    $(".navbar a").on("click", function(){
        $(".navbar").find(".active").removeClass("active");
    });
    
    if (yOffset > $("#autoscroll").position().top){
        alert("fuck");
    }
    
    setInterval(function(){
        $("#scrolldownarrow").stop().effect("bounce", { times:3, easing:"easeInCubic" }, 'normal');
    }, 1500);

    $("#scrolldown").click(function(e) {
        
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
        $("#missionstatement").addClass('slideInUp');
        $("#missionstatement").addClass('scrolldown');
    }
    else{
        $(".navbar").removeClass('scrolldown');
        // $("#missionstatement").removeClass('scrolldown');
        
    }
    
});