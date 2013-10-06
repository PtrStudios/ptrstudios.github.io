$(document).ready(function() {
    
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
    function random() {
        c1 = Math.floor(Math.random() * 255);
        c2 = Math.floor(Math.random() * 255);
        c3 = Math.floor(Math.random() * 255);
        c4 = Math.floor(Math.random() * 255);
        c5 = Math.floor(Math.random() * 255);
        c6 = Math.floor(Math.random() * 255);
    }
    random();
    var grd = hctx.createLinearGradient(0, 0, hcanvas.width, 0);
    grd.addColorStop(0, "rgb(" + c1 + "," + c2 + "," + c3 + ")");
    grd.addColorStop(1, "rgb(" + c4 + "," + c5 + "," + c6 + ")");
    hctx.fillStyle = grd;
    hctx.fillRect(0, 0, hcanvas.width, hcanvas.height);
    setInterval(function () {
        random();
        grd.addColorStop(0, "rgb(" + c1 + "," + c2 + "," + c3 + ")");
        grd.addColorStop(1, "rgb(" + c4 + "," + c5 + "," + c6 + ")");
        hctx.fillStyle = grd;
        hctx.fillRect(0, 0, hcanvas.width, hcanvas.height);
    },1000);
});

