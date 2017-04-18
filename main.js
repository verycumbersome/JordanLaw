/*global $*/
$(document).ready(function() {
    $("html,body").animate({scrollTop: 0}, 100);
    
    const menuSlideSpeed = 500;
    
    $("#header").fadeOut(0);
    
    $("#header").fadeIn(2000);
    
    $("#content p").fadeOut(0);
    $("#content h2").fadeOut(0);
    
    $("#logo").fadeIn(1000);
    $("#menu").fadeIn(1000, function() {
        $("#content h2").fadeIn(1000);
        $("#content p").fadeIn(1000);
    });
    // $("#content p").fadeIn(1750);

    // $("#title").animate({
    //     marginLeft: '47%'
    // }, 1750, 'swing', function() {
    // });

    // $("#subtitle").animate({
    //     marginLeft: '-15%'
    // }, 2250, 'swing', function() {
    //     $("#content h2").fadeIn(1000);
    //     $("#content p").fadeIn(1000);
    // });

    // $("#title").css(
    //     'text-align', 'center');

    // $("#content").fadeOut(0);
    // $("#title").slideUp(0);

    $("#aboutusdropdown").slideUp(0);
    $("#practicesdropdown").slideUp(0);
    $("#blogdropdown").slideUp(0);
    $("#contactdropdown").slideUp(0);
    
    $("#scrolldown").click(function() {
        $('html,body').stop(true, false).animate({
            scrollTop: $("footer").offset().top},
            2000);
    });

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
    
    // var scrollDiv = document.getElementById('yourDivId');  
    // scrollDiv.scrollTop = scrollDiv.scrollHeight;


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

        // $("#logo").stop().animate({
        //     width: '300px'
        // }, 300, 'swing');

      } else {
        //  $("#size-stylesheet").attr("href", "css/main.css");

         $("#title").stop().animate({
             marginLeft: '47%'
         }, 1750, 'swing', function() {
             // $("#content h2").fadeIn(1000);
             // $("#content p").fadeIn(1000);
         });

         $("#subtitle").stop().animate({
             marginLeft: '-15%'
         }, 2250, 'swing', function() {
         });

        //  $("#logo").stop().animate({
        //      width: '300px'
        //  }, 300, 'swing');

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
    var breakpoint = 50;
    
    if (yOffset > breakpoint){
        $("#menu").addClass('active');
        $(".menuitem").addClass('active');
        $(".dropdown").addClass('active');
        $(".dropdownwrapper").addClass('active');
        
    }else{
        $("#menu").removeClass('active');
        $(".menuitem").removeClass('active');
        $(".dropdown").removeClass('active');
        $(".dropdownwrapper").removeClass('active');
        
    }
    
});

