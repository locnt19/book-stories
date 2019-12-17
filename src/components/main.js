$(document).ready(function () {
	// all script write here
	$('.slide_keyword').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: '<div class="slide_button-next"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow: '<div class="slide_button-prev"><i class="mdi mdi-chevron-left"></i></div>',
		responsive: [{
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

	$('.slide_detail_book-main').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slide_detail_book-thumb'
	});

	$('.slide_detail_book-thumb').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		variableWidth: true,
		asNavFor: '.slide_detail_book-main',
		nextArrow: '<div class="slide_button-next"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow: '<div class="slide_button-prev"><i class="mdi mdi-chevron-left"></i></div>',
		responsive: [{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.slide_book').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 2,
		nextArrow: '<div class="book-btnnext"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow: '<div class="book-btnpre"><i class="mdi mdi-chevron-left"></i></div>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.banner_doitac').slick({
		infinite: true,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		arrows: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.slide_header').slick({
		lazyLoad: 'ondemand',
		// dots: true,
		nextArrow: '<div class="slide_button-next"><i class="mdi mdi-chevron-right"></i></div>',
		prevArrow: '<div class="slide_button-prev"><i class="mdi mdi-chevron-left"></i></div>'
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
		if ($('main').children('.banner_header_wrapper').length) {
			$('.header-navigation--nav .d-menu').addClass("d-none");
		} else $('.header-navigation--nav .d-menu').removeClass("d-none");
		$(window).scroll(function () {
			// $('main').children('.banner_header_wrapper').length > 0 ? console.log('true') : console.log('false')
			// console.log($('main').children('.banner_header_wrapper'))
			if ($('main').children('.banner_header_wrapper').length) {
				if ($(this).scrollTop() < 600) {
					$('.header-navigation--nav .d-menu').addClass('d-none')
				} else $('.header-navigation--nav .d-menu').removeClass("d-none").css("display", "none")
			}
		})
	}
});