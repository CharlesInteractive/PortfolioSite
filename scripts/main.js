$(document).ready(function(){
    $('.mainNavIcon').click(function() {
        var $this = $(this),
            $menu = $('.mainNavOverlay');
        if (!$this.hasClass('collapsed')) {
            $menu.addClass('collapsed');
            $this.addClass('collapsed');
            $('.mainNavIcon').removeClass('open');
        } else {
            $menu.removeClass('collapsed');
            $this.removeClass('collapsed');
            $('.mainNavIcon').addClass('open');
        }
        return false;
    });
    $('.container').addClass('ready');
});