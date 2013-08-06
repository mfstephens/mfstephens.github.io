$(".about").click(function() {
	$("#projects-nav").removeClass("selected-tab");
	$("#contact-nav").removeClass("selected-tab");
	$("#about-nav").addClass("selected-tab");
	$(".content").html("<img src='Michigan2.png' width='300px' height='200px' style='float: right;'> <p> Hi there. I'm Matt Stephens. I'm a student at the <a href='http://cs.lsa.umich.edu/' class='link'>University of Michigan</a> in my third year studying computer science. I like programming, music, and good beer. </p> <p> I have experience with JavaScript (and all its friends including Backbone, Angular, jQuery, and Node), HTML+CSS, and C++. If you're interested, you can head over and check out my <input type='button' class='projects link' value='projects'></input> to see some stuff I've worked on. </p> <p> Though I am currently employed for the summer as a software engineering intern at <a href='http://www.techsmith.com' class='link'>TechSmith Corporation</a>, I'm always looking for fun projects to work on. So, wanna make something cool? <input type='button' class='contact link' value='Hit me up'></input>. </p>");
});

$(".projects").click(function() {
	$("#contact-nav").removeClass("selected-tab");
	$("#about-nav").removeClass("selected-tab");
	$("#projects-nav").addClass("selected-tab");
	$(".content").html('<div class="project-preview first"></div> <div class="project-preview"></div> <div class="project-preview last"></div> <div class="project-preview first">');
});

$(".contact").click(function() {
	$("#projects-nav").removeClass("selected-tab");
	$("#about-nav").removeClass("selected-tab");
	$("#contact-nav").addClass("selected-tab");
	$(".content").html("<p> Want to talk about beer, side-projects, or maybe even hire me? I'm always looking for stuff to do. </p> <p> <span class='symbol'>roundedemail</span> <span class='symbol'>&#xe437;</span> <span class='symbol'>roundedlinkedin</span> <span class='symbol'>roundedgoogleplus</span> </p>");
});

$(document).ready(function() {
     $(".contact-button").hover(function() {
         $(".background-highlight").css("background-color", "#333");
     },
     function() {
     	$(".background-highlight").css("background-color", "transparent");
     });
});