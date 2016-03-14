$(document).ready(function(){
	$("body").delay(1000).animate({opacity: 1}, 100);

	$(".btn-about").click(function(){
		$(".aboutpage").css("display", "flex");
		$(".btn-about").css("display", "none");
	})
	$(".btn-close").click(function(){
		$(".aboutpage").css("display", "none");
		$(".btn-about").css("display", "block");
	})
})