$("#about").click(function() {
	$("#projects").removeClass("selected-tab");
	$("#contact").removeClass("selected-tab");
	$("#about").addClass("selected-tab");
	$(".content").html(' Lorem ipsum dolor sit amet, id vero nulla vituperata pro. Ea eos velit expetendis. Ad vel utinam minimum nostrum. Vim te eros commodo docendi, per ea libris noster accommodare. Est viris omittantur cu, facete adversarium ei usu. At mel nihil delenit eligendi, id mei putant iracundia. Hinc appareat interpretaris sea eu, vel ne solum debitis, vero timeam sea et. At his elitr epicuri, sed altera intellegat constituam id, no quem rebum tacimates eum. Est nusquam mentitum quaerendum ne, at velit numquam interpretaris vix. Vis te eruditi forensibus, illum menandri no nec. Dicam singulis id vim, timeam constituto est ad, pro in libris quodsi platonem. Esse conclusionemque usu cu. Dolorum inimicus neglegentur vis ut, te antiopam adversarium per, usu ei dicta persequeris. <div class="umich-logo"></div>');
});

$("#projects").click(function() {
	$("#contact").removeClass("selected-tab");
	$("#about").removeClass("selected-tab");
	$("#projects").addClass("selected-tab");
	$(".content").html('<div class="project-preview first"></div> <div class="project-preview"></div> <div class="project-preview last"></div> <div class="project-preview first">');
});

$("#contact").click(function() {
	$("#projects").removeClass("selected-tab");
	$("#about").removeClass("selected-tab");
	$("#contact").addClass("selected-tab");
	$(".content").html("Lorem ipsum dolor sit amet, id vero nulla vituperata pro. Ea eos velit expetendis. Ad vel utinam minimum nostrum. Vim te eros commodo docendi, per ea libris noster accommodare. Est viris omittantur cu, facete adversarium ei usu. At mel nihil delenit eligendi, id mei putant iracundia. Hinc appareat interpretaris sea eu, vel ne solum debitis, vero timeam sea et. At his elitr epicuri, sed altera intellegat constituam id, no quem rebum tacimates eum. Est nusquam mentitum quaerendum ne, at velit numquam interpretaris vix. Vis te eruditi forensibus, illum menandri no nec. Dicam singulis id vim, timeam constituto est ad, pro in libris quodsi platonem. Esse conclusionemque usu cu. Dolorum inimicus neglegentur vis ut, te antiopam adversarium per, usu ei dicta persequeris.");
});