$(document).ready(function () {
	// all script write here
	$('.slide_keyword').slick({
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 2
	});
	$('.slide_book').slick({
		infinite: true,
		slidesToShow: 5
	});
});