$(window).on('load',function(){
    $(".loader").delay(500).fadeOut('slow');
    $("body").css("overflow", "auto");
    $(".nav-toggle").removeClass("jiji");
    $(".title").removeClass("jiji");
    $(".nav-toggle").click(function(){
        $(".nav-toggle").fadeOut();
    });
    $(".overlay-close").click(function(){
        $(".nav-toggle").fadeIn()
    });
    $(".nav li a").click(function(){
        if($("#overlay").hasClass("open")){
            $("#overlay").removeClass("open");
            $(".nav-toggle").fadeIn();
        }
    });	
})

window.onload = function(){setTimeout(function(){$(window).scrollTop(0)},10);}