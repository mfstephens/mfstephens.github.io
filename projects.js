$(".content-controls").hover(function() {
	$(".source-code-link").css("display", "inline-block");
	$(".preview-link").css("display", "inline-block");
	$(".info-link").css("display", "inline-block");
});

$(".source-code-link").hover(function() {
	$(".source-code-link").css("display", "inline-block");
	$(".source-code-link").css("background-image", "url('img/code-emblem-hover.svg')");
});

$(".preview-link").hover(function() {
	$(".preview-link").css("display", "inline-block");
	$(".preview-link").css("background-image", "url('img/preview-emblem-hover.svg')");
});

$(".info-link").hover(function() {
	$(".info-link").css("display", "inline-block");
	$(".info-link").css("background-image", "url('img/info-emblem-hover.svg')");
});

$(".preview-link").mouseout(function() {
	$(".preview-link").css("background-image", "url('img/preview-emblem.svg')");
});

$(".info-link").mouseout(function() {
	$(".info-link").css("background-image", "url('img/info-emblem.svg')");
});

$(".source-code-link").mouseout(function() {
	$(".source-code-link").css("background-image", "url('img/code-emblem.svg')");
})

$(".content-controls").mouseout(function() {
	if(!$(".content-controls").is(":hover")) {
		$(".source-code-link").css("display", "none");
		$(".preview-link").css("display", "none");
		$(".info-link").css("display", "none");
	}
});