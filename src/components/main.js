$(document).ready(function () {
	// all script write here
	$('.slide_keyword').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow:'<div class="slide_button-next"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow: '<div class="slide_button-prev"><i class="mdi mdi-chevron-left"></i></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2
				}
			},
		]
	});

	$('.slide_book').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		nextArrow:'<div class="book-btnnext"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow:'<div class="book-btnpre"><i class="mdi mdi-chevron-left"></i></div>'
	});
	$('.banner_doitac').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow:false,
		prevArrow:false
	});
	$('.slide_header').slick({
		lazyLoad: 'ondemand',
		// dots: true,
		nextArrow:'<div class="slide_button-next"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow:'<div class="slide_button-prev"><i class="mdi mdi-chevron-left"></i></div>'
	});

	$(window).scroll(function () {
		// console.log($(this).scrollTop());
		if ($(this).scrollTop() > 0) {
			$('header').addClass('on-scroll');
		} else {
			$('header').removeClass('on-scroll');
		}
	})

	if ($(window).outerWidth() > 991) {
		$('.header-navigation--nav .d-menu').addClass("d-none");
		$(window).scroll(function () {
			if ($(this).scrollTop() < 600) {
				$('.header-navigation--nav .d-menu').addClass('d-none')
			} else $('.header-navigation--nav .d-menu').removeClass("d-none").css("display", "none")
		})
	}
});