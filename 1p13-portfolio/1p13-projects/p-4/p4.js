$(document).ready(function(){
    $("#overview").fadeIn(1500);  
    $("#figure1").delay(500).fadeIn(2000);
    $("#img1").delay(500).animate({width: "30vw"},2000);
    $("#skills").delay(1250).fadeIn(2000);
    $("#figure2").delay(2000).fadeIn(2000);
    $("#img2").delay(2000).animate({width: "30vw"},2000);
    $("#design").delay(2500).fadeIn(2000);
    $("#figure3").delay(3000).fadeIn(2000);
    $("#img3").delay(3000).animate({width: "30vw"},2000);
    $("#admin").delay(3500).fadeIn(2000);
    $("#figure4").delay(4000).fadeIn(2000);
    $("#img4").delay(4000).animate({width: "30vw"},2000);
    $("#learn").delay(4500).fadeIn(2000);
    $("#figure5").delay(5000).fadeIn(2000);
    $("#img5").delay(5000).animate({width: "30vw"},2000);
    $("#thoughts").delay(5500).fadeIn(2000);
});

$(document).scroll(function() {
    var sc = $(window).scrollTop();
    var f1p = $('#figure1').offset().top - sc;
    var f2p = $('#figure2').offset().top - sc;
    var f3p = $('#figure3').offset().top - sc;
    var f4p = $('#figure4').offset().top - sc;
    var f5p = $('#figure5').offset().top - sc;

    if (f4p <= 0) {
        $("#img1").stop().animate({width: "20vw"}, 1000);
        $("#img2").stop().animate({width: "20vw"}, 1000);
        $("#img3").stop().animate({width: "20vw"}, 1000);
        $("#img4").stop().animate({width: "20vw"}, 1000);
        $("#img5").stop().animate({width: "30vw"}, 1000);
    }
    else if (f3p <= 0) {
        $("#img1").stop().animate({width: "20vw"}, 1000);
        $("#img2").stop().animate({width: "20vw"}, 1000);
        $("#img3").stop().animate({width: "20vw"}, 1000);
        $("#img4").stop().animate({width: "30vw"}, 1000);
        $("#img5").stop().animate({width: "20vw"}, 1000);
    }
    else if (f2p <= 0) {
        $("#img1").stop().animate({width: "20vw"}, 1000);
        $("#img2").stop().animate({width: "20vw"}, 1000);
        $("#img3").stop().animate({width: "30vw"}, 1000);
        $("#img4").stop().animate({width: "20vw"}, 1000);
        $("#img5").stop().animate({width: "20vw"}, 1000);
    }
    else if (f1p <= 0) {
        $("#img1").stop().animate({width: "20vw"}, 1000);
        $("#img2").stop().animate({width: "30vw"}, 1000);
        $("#img3").stop().animate({width: "20vw"}, 1000);
        $("#img4").stop().animate({width: "20vw"}, 1000);
        $("#img5").stop().animate({width: "20vw"}, 1000);
    }
    else {
        $("#img1").stop().animate({width: "30vw"}, 1000);
        $("#img2").stop().animate({width: "20vw"}, 1000);
        $("#img3").stop().animate({width: "20vw"}, 1000);
        $("#img4").stop().animate({width: "20vw"}, 1000);
        $("#img5").stop().animate({width: "20vw"}, 1000);
    }
});