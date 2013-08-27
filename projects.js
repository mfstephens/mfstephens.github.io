var displayControlsById = function(id) {
	$("#" + id + "-code").css("display", "inline-block");
	$("#" + id + "-preview").css("display", "inline-block");
};

var hideControlsById = function(id) {
	$("#" + id + "-code").css("display", "none");
	$("#" + id + "-preview").css("display", "none");
}

$("#space-pioneers").mouseout(function() {
	hideControlsById($(this).attr('id'));
});

$("#space-pioneers").mouseover(function() {
	displayControlsById($(this).attr('id'));
});

$("#calculator").mouseout(function() {
	hideControlsById($(this).attr('id'));
});

$("#calculator").mouseover(function() {
	displayControlsById($(this).attr('id'));
});

$("#superhaiku").mouseout(function() {
	hideControlsById($(this).attr('id'));
});

$("#superhaiku").mouseover(function() {
	displayControlsById($(this).attr('id'));
});

$("#melonJS-platformer").mouseout(function() {
	hideControlsById($(this).attr('id'));
});

$("#melonJS-platformer").mouseover(function() {
	displayControlsById($(this).attr('id'));
});

