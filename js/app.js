jQuery(document).ready(function ($) {
	/** Drop down menu making link active (check nav walker) **/

	$('.navbar-nav.dropdown').hover(function () {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	}, function () {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
	});
	$('.navbar-nav .dropdown > a').click(function () {
		location.href = this.href;
	});
	// Bootstrap menu magic
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$(".dropdown-toggle").attr('data-toggle', 'dropdown');
		} else {
			$(".dropdown-toggle").removeAttr('data-toggle dropdown');
		}
	});
	/* Mmenu  */
	$("#menu").mmenu({
		extensions: ["shadow-panels", "fx-panels-slide-100", "border-none", "theme-black", "fullscreen"],
		offCanvas: {
			//  position    : "right"
		},
		navbars: {
			content: ["prev", "close"],
			height: 2
		},
		setSelected: true,
	}, {});

	/* vario page */
	$('.vario_background').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		infinate: false,
		speed: 500,
		fade: true,
		cssEase: 'linear'

	});

	$(function () {

		$.fn.centerMe = function () {
			$(this).css({
				'left': ($(window).width() - $(this).width()) / 2,
			});
		};
		$('.thinLine').centerMe();
	});
	/* new style doors */
	$('.cat-circles').slick({
		slidesToShow: 10,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	/* single product */
	$('.config-rep').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		infinate: false,
	
	});

	$('.handles-img').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		infinate: false,
	
	});
	
});