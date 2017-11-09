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

	// Main Menu

    $('#main-menu').smartmenus({
       
        subIndicators: false,
        markCurrentItem: true,
        markCurrentTree: true,
        showFunction: function($ul, complete) { 
            $ul.fadeIn(235, complete);
            var submenuHeight = $ul.outerHeight() + 25;
            $('.navOverlay').height(submenuHeight);
            // add class to nav overlay when it is exposed
            $('.navOverlay').addClass('overlayShown');
        },
        hideFunction: function($ul, complete) { 
            $ul.fadeOut(250, complete); 

            // remove class to nav overlay when it is exposed
            $('.navOverlay').removeClass('overlayShown');
        }
    }); 

    // $('#main-menu-button').click(function() {
    //     var $this = $(this),
    //         $menu = $('#main-menu');
    //     if (!$this.hasClass('collapsed')) {
    //         $menu.addClass('collapsed');
    //         $this.addClass('collapsed');
    //     } else {
    //         $menu.removeClass('collapsed');
    //         $this.removeClass('collapsed');
    //     }
    //     return false;
    // }).click();

    // $('#main-menu-button').click(function(){
    //     $(this).toggleClass('collasped');
    // });


    $('#main-menu-button').click(function() {
        var $this = $(this),
            $menu = $('#main-menu');
        if (!$this.hasClass('collapsed')) {
            $menu.addClass('collapsed');
            $this.addClass('collapsed');
            $('#main-menu-button').removeClass('open');
            $menu.removeClass('open');
        } else {
            $menu.removeClass('collapsed');
            $this.removeClass('collapsed');
            $('#main-menu-button').addClass('open');
            $menu.addClass('open');
        }
        return false;
        /* Set the width of the side navigation to 250px */

    }).click();
    // Main Menu

    //testing new menu
    $('#hamberger').click(function() {
        var $this = $(this),
            $menu = $('#menu');
        if (!$this.hasClass('collapsed')) {
            $menu.addClass('collapsed');
            $this.addClass('collapsed');
            $('#hamberger').removeClass('open');
            $menu.removeClass('open');
        } else {
            $menu.removeClass('collapsed');
            $this.removeClass('collapsed');
            $('#hamberger').addClass('open');
            $menu.addClass('open');
        }
        return false;
        /* Set the width of the side navigation to 250px */

    }).click();
});