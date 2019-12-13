$(document).ready(function () {
	// all script write here
	$('.slide_keyword').slick({
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 2
	});
	$('.slide_book').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		nextArrow:'<div class="book-btnnext"><i class="fas fa-caret-right"></i></div>',
		prevArrow:'<div class="book-btnpre"><i class="fas fa-caret-left"></i></div>'
	});
	$('.banner_doitac').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow:false,
		prevArrow:false
	});
});