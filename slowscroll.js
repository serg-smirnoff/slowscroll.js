$(document).ready(function() {

	$('a[href^="#"]').bind('click.scroll_slow',function (e) {

	e.preventDefault();

	var target = this.hash,
	$target = $(target);

	$('html, body').stop().animate({
			'scrollTop': $target.offset().top
			}, 700, 'swing', function () {
			window.location.hash = target;
		});
	});

});