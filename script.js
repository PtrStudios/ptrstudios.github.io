$(document).ready(function() {
    $("#rotate").click(function() {
        $("body").css("-webkit-transform","rotate(360deg)");
            setTimeout(function() {
                location.reload()
            }, 3000);
    });
});