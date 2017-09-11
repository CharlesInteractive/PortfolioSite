$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		pause: 7000,
	  	mode: 'fade',
	  	pager: false,
	  	controls: false,
	  	captions: false,
	  	randomStart: true
	});
			// $('#fullpage').fullpage({
			// 	verticalCentered: false,

			// 	//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
			// 	css3:false
			// });
});