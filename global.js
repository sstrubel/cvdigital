// Custom JS
$(document).ready(function() {

	function scrollNav() {
	  $('.nav a').click(function(){  
		//Toggle Class
		// $(".active").removeClass("active");      
		// $(this).closest('li').addClass("active");
		// var theClass = $(this).attr("class");
		// $('.'+theClass).parent('li').addClass('active');
		//Animate
		$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 150
		}, 200);
		return false;
	  });
	  $('.scrollTop a').scrollTop();
	}

	scrollNav();

	$('body').scrollspy({ target: '#bs-example-navbar-collapse-1', offset: 200 });

});