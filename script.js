$(document).ready(function() {
    $(".hidden").show("bounce",{times: 2},2000);
    
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
    
});

