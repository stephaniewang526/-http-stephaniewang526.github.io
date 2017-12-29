$(document).ready(function(){
    $("img.a").hover(
    function() {
    $(this).stop().animate({"opacity": "0"}, "fast");
    },
    function() {
    $(this).stop().animate({"opacity": "1"}, "fast");
    });
});