
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    //$('.top-content').backstretch("assets/img/backgrounds/dd.jpg");
	//$('.services-container').backstretch("assets/img/backgrounds/Style1.jpg");
	$('.bag-style-c4').backstretch("assets/img/backgrounds/Style4.jpg");
	$('.bag-style-c3').backstretch("assets/img/backgrounds/Style3.jpg");
	$('.bag-style-c2').backstretch("assets/img/backgrounds/Style2.gif");
	$('.bag-feature-c1').backstretch("assets/img/backgrounds/Feature1.jpg");
	$('.bag-feature-c11').backstretch("assets/img/backgrounds/Feature1-1.jpg");
	$('.bag-feature-c2').backstretch("assets/img/backgrounds/Feature2.jpg");
	$('.bag-feature-c3').backstretch("assets/img/backgrounds/Feature3.jpg");
	$('.bag-concept-c1').backstretch("assets/img/backgrounds/concept1.jpg");
	$('.bag-concept-c2').backstretch("assets/img/backgrounds/concept.jpg");
    
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

