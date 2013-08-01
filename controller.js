$(".about").click(function() {
	$("#projects-nav").removeClass("selected-tab");
	$("#contact-nav").removeClass("selected-tab");
	$("#about-nav").addClass("selected-tab");
	$(".content").html("<img src='Michigan2.png' width='300px' height='200px' style='float: right;''> <p> Hi there. I'm Matt Stephens. I'm a student at the University of Michigan in my third year studying computer science. I like programming, music, and fine dining (especially good beer). </p> <p> I have experience with JavaScript (and all its friends including Backbone, Angular, JQuery, Node, & QUnit), HTML+CSS, and C++. Check out some of my projects to see what I've done with these technologies. </p> <p> Though I am currently employed as a Software Engineering Intern at TechSmith Corporation until August 2013, I'm always looking for fun projects to work on and cool companies to work for. Interested in seeing me struggle to write code? Hit me up. </p>");
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
	$(".content").html('<p> Want to talk about beer, fun side-projects, or maybe even hire me? Shoot me an email: </p> <p> <strong>email</strong>: <a class="link" href="mfstep@umich.edu">mfstep@umich.edu</a> </p> <p> <strong>Personal email</strong>: <a class="link href="mfstephens9@gmail.com">mfstephens9@gmail.com</a> </p> <p> Interested in learning more about me? Check me out on... </p>')
});