$("#home").click(function() {
	$(".aboutme").show();
});

$("#projects").click(function() {
    $(".projects").show();
    $(".aboutme").hide();
    $(".labs").hide();
});

$("#labs").click(function() {
    $(".labs").show();
    $(".aboutme").hide();
    $(".projects").hide();
});