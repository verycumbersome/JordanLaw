/*global $*/
$(document).ready(function() {
    $("html,body").animate({scrollTop: 0}, 100);
    
    const menuSlideSpeed = 300;
    
    $(".navbar").fadeOut(0);
    
    $("#content p").fadeOut(0);
    $("#content h2").fadeOut(0);
    
    $(".navbar").fadeIn(1500, function() {
        $("#content h2").fadeIn(1000);
        $("#content p").fadeIn(1000);
    });
    
    
    
    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);
    
    setInterval(function(){
        $("#scrolldownarrow").effect("bounce", { times:3 }, 'normal');
    }, 2000);
    
    var page = $("html, body");

    $("#scrolldown").click(function(e) {
        
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
        });
    
        page.animate({ scrollTop: $(this).position().top }, 'slow', function(){
           page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });
    
       return false; 
    });

    $(".dropdown.people").hover(function() {
        $(".dropdown-menu.people").stop(false, false).slideDown(menuSlideSpeed);
    }, function() {
        $(".dropdown-menu").stop().slideUp(menuSlideSpeed);
    });

    $(".practices").hover(function() {
        $(".practices").stop().slideDown(menuSlideSpeed);
    }, function() {
        $(".dropdown-menu").stop().slideUp(menuSlideSpeed);
    });

    function adjustStyle(width) {
      width = parseInt(width);
      if (width < 651) {
        // $("#size-stylesheet").attr("href", "css/mobile.css");

        $("#title").stop().animate({
            marginLeft: '0%',
            borderBottom: '0px solid #fff',
            textAlign: 'center'
        }, 300, 'swing');

        $("#subtitle").stop().animate({
            marginLeft: '0%',
            borderBottom: '0px solid #fff',
            textAlign: 'center'
        }, 300, 'swing');

        $("#logo").stop(true, false).animate({
            width: '100%'
        }, 300, 'swing');

      } else {
        //  $("#size-stylesheet").attr("href", "css/main.css");

         $("#title").stop().animate({
             marginLeft: '47%'
         }, 1750, 'swing', function() {
         });

         $("#subtitle").stop().animate({
             marginLeft: '-15%'
         }, 2250, 'swing', function() {
         });

         $("#logo").stop(true, false).animate({
             width: 'auto'
         }, 300, 'swing');

      }
    }

    $(function() {
      adjustStyle($(this).width());
      $(window).resize(function() {
        adjustStyle($(this).width());
      });
    });
});

$(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var h = window.innerHeight;
    var breakpoint = h/3;
    
    if (yOffset > breakpoint){
        $(".navbar").addClass('scrolldown');
        
    }else{
        $(".navbar").removeClass('scrolldown');
        
    }
    
});