$(document).ready(function() {
    $(".hidden").slideDown();
    
    $("#rotate").click(function() {
        $("body").css({"-webkit-transform":"rotate(360deg)","transition":"2s"});
        setTimeout(function() {
            location.reload();
        },2000);
    });
    
    $("#about").hover(function() {
        $(this).css("color","red"); 
    },function() {
        $(this).css("color","black");
    });
    
    $("#demos").hover(function() {
        $(this).css("color","green");
    },function() {
        $(this).css("color","black");
    });
    
    $("#css").hover(function() {
        $(this).css("color","blue");
    },function() {
        $(this).css("color","black");
    });
    
    $("#rotate").hover(function() {
        $(this).css("color","purple");
    },function() {
        $(this).css("color","black");
    });

    var hcanvas = $("#hcanvas")[0];
    var hctx = hcanvas.getContext("2d");
    var grd = hctx.createLinearGradient(0, 0, hcanvas.width, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");
    hctx.fillStyle = grd;
    hctx.fillRect(0, 0, hcanvas.width, hcanvas.height);
    
});

