$(".about").click(function() {
	$("#projects-nav").removeClass("selected-tab");
	$("#contact-nav").removeClass("selected-tab");
	$("#about-nav").addClass("selected-tab");
});

$(".projects").click(function() {
	$("#contact-nav").removeClass("selected-tab");
	$("#about-nav").removeClass("selected-tab");
	$("#projects-nav").addClass("selected-tab");
});

$(".contact").click(function() {
	$("#projects-nav").removeClass("selected-tab");
	$("#about-nav").removeClass("selected-tab");
	$("#contact-nav").addClass("selected-tab");
});