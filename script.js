$(document).ready(function() {
    
    $("#rotate").click(function() {
        $("body").css({"-webkit-transform":"rotate(360deg)","transition":"3s","transform":"rotate(360deg)","-ms-transform":"rotate(360deg)","-webkit-transition":"");
            setTimeout(function() {
                location.reload()
            }, 3000);
    });
    
});
