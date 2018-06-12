jQuery(document).ready(function ($) {
	
	$('ul li a').click(function(){
		$('li a').removeClass("active");
		$('li a').css("color","#000000");	
		$(this).addClass("active");	
		$(this).css("color","#ffffff");		
	});

	$('img.thumb_image').click(function(){
		var image=$(this).attr('src');
		$('img.main_image').attr('src',image);
		console.log(image);
	});
	// Custom JS
	
});
