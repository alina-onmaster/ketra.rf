var header = $('.main-header');
var mainNav = $('.main-nav');
scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
    
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
        mainNav.removeClass('main-nav--opened');
        mainNav.addClass('main-nav--closed');
	} else {
		header.removeClass('out');
        mainNav.removeClass('main-nav--opened');
        mainNav.addClass('main-nav--closed');
	}
	scrollPrev = scrolled;
});