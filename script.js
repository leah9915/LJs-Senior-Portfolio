$("#home").click(function() {
	$(".section1").show();
    $(".aboutme").show();
    $(".section2").hide();
    $(".section3").hide();
});

$("#projects").click(function() {
    $(".section2").show();
    $(".projects").show();
    $(".section1").hide();
    $(".section3").hide();
});

$("#labs").click(function() {
    $(".section3").show();
    $(".labs").show();
    $(".section1").hide();
    $(".section2").hide();
});
