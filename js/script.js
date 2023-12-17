$(document).ready(function () {



	if ($(window).scrollTop() >= 300) {
		$(".anchore").addClass("active");
	} else {
		$(".anchore").removeClass("active");
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			$('.anchore').addClass("active");
		} else if ($(window).scrollTop() < 300) {
			$('.anchore').removeClass("active");
		}
	});


	$('.home-slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.home-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.home-slider-wrap .slider-navigation .slick-next'),
	});

	$('.equipment-servives-slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.equipment-servives-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.equipment-servives-slider-wrap .slider-navigation .slick-next'),
	});

	$('.works-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.works-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.works-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
				}
			    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			    },
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 1,
				}
			    }
			  ]
	});

	$('.partners-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.partners-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.partners-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			    },
			{
				breakpoint: 521,
				settings: {
					slidesToShow: 1,
				}
			    }
			  ]
	});

	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: $('.reviews-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.reviews-slider-wrap .slider-navigation .slick-next'),
	});

	if (!$('.pools-slider').hasClass('slick-initialized')) {
		$('.pools-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			fade: true,
			arrows: false,
			asNavFor: '.pools-slider-thumbnails',
		});
	}

	if (!$('.pools-slider-thumbnails').hasClass('slick-initialized')) {
		$('.pools-slider-thumbnails').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			infinite: true,
			focusOnSelect: true,
			asNavFor: '.pools-slider',
			nextArrow: $('.pools-slider-thumbnails-wrap .arrow-next'),
			prevArrow: $('.pools-slider-thumbnails-wrap .arrow-prev'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					}
						},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 3,
					}
						},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2,
					}
						},
					  ]

		});
	}

	var switchSliders = function () {
		if (!$("#slider-switch input").is(":checked")) {
			$(".pools-slider2-wrap").show();
			$(".pools-slider-wrap").hide();

			if (!$('.pools-slider2').hasClass('slick-initialized')) {
				$('.pools-slider2').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					fade: true,
					arrows: false,
					asNavFor: '.pools-slider-thumbnails2',
				});
			}

			if (!$('.pools-slider-thumbnails2').hasClass('slick-initialized')) {
				$('.pools-slider-thumbnails2').slick({
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					focusOnSelect: true,
					asNavFor: '.pools-slider2',
					nextArrow: $('.pools-slider-thumbnails-wrap2 .arrow-next'),
					prevArrow: $('.pools-slider-thumbnails-wrap2 .arrow-prev'),
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 4,
							}
						},
						{
							breakpoint: 481,
							settings: {
								slidesToShow: 3,
							}
						},
						{
							breakpoint: 400,
							settings: {
								slidesToShow: 2,
							}
						},
					  ]

				});
			}
		} else {
			$(".pools-slider-wrap").show();
			$(".pools-slider2-wrap").hide();

			if (!$('.pools-slider').hasClass('slick-initialized')) {
				$('.pools-slider').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					fade: true,
					arrows: false,
					asNavFor: '.pools-slider-thumbnails',
				});
			}

			if (!$('.pools-slider-thumbnails').hasClass('slick-initialized')) {
				$('.pools-slider-thumbnails').slick({
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					focusOnSelect: true,
					asNavFor: '.pools-slider',
					nextArrow: $('.pools-slider-thumbnails-wrap .arrow-next'),
					prevArrow: $('.pools-slider-thumbnails-wrap .arrow-prev'),
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 4,
							}
						},
						{
							breakpoint: 481,
							settings: {
								slidesToShow: 3,
							}
						},
						{
							breakpoint: 400,
							settings: {
								slidesToShow: 2,
							}
						},
					  ]

				});
			}
		}
	};

	switchSliders();

	$("#slider-switch input").on("change", function () {
		switchSliders();
	});


	if (!$('.portfolio-slider').hasClass('slick-initialized')) {
		$('.portfolio-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			fade: true,
			arrows: false,
			asNavFor: '.portfolio-slider-thumbnails',
		});
	}

	if (!$('.portfolio-slider-thumbnails').hasClass('slick-initialized')) {
		$('.portfolio-slider-thumbnails').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			focusOnSelect: true,
			asNavFor: '.portfolio-slider',
			nextArrow: $('.portfolio-slider-thumbnails-wrap .arrow-next'),
			prevArrow: $('.portfolio-slider-thumbnails-wrap .arrow-prev'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					}
			    },
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 2,
					}
			    },
			  ]

		});
	}

	if (!$('.portfolio-slider2').hasClass('slick-initialized')) {
		$('.portfolio-slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			fade: true,
			arrows: false,
			asNavFor: '.portfolio-slider-thumbnails2',
		});
	}

	if (!$('.portfolio-slider-thumbnails2').hasClass('slick-initialized')) {
		$('.portfolio-slider-thumbnails2').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			focusOnSelect: true,
			asNavFor: '.portfolio-slider2',
			nextArrow: $('.portfolio-slider-thumbnails-wrap2 .arrow-next'),
			prevArrow: $('.portfolio-slider-thumbnails-wrap2 .arrow-prev'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					}
			    },
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 3,
					}
			    },
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2,
					}
			    },
			  ]

		});
	}

	if (!$('.portfolio-slider3').hasClass('slick-initialized')) {
		$('.portfolio-slider3').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			fade: true,
			arrows: false,
			asNavFor: '.portfolio-slider-thumbnails3',
		});
	}

	if (!$('.portfolio-slider-thumbnails3').hasClass('slick-initialized')) {
		$('.portfolio-slider-thumbnails3').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			focusOnSelect: true,
			asNavFor: '.portfolio-slider3',
			nextArrow: $('.portfolio-slider-thumbnails-wrap3 .arrow-next'),
			prevArrow: $('.portfolio-slider-thumbnails-wrap3 .arrow-prev'),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					}
			    },
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 3,
					}
			    },
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2,
					}
			    },
			  ]

		});
	}

	if (!$('.equipment-slider').hasClass('slick-initialized')) {
		$('.equipment-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			asNavFor: '.equipment-slider-thumbnails',
			vertical: true,
			verticalSwiping: true,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						vertical: false,
						verticalSwiping: false,
					}
			},
		  ]
		});
	}

	if (!$('.equipment-slider-thumbnails').hasClass('slick-initialized')) {
		$('.equipment-slider-thumbnails').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			vertical: true,
			focusOnSelect: true,
			asNavFor: '.equipment-slider',
			responsive: [
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 3,
						vertical: false,
						focusOnSelect: false,
					}
			},
		  ]

		});
	}

	$(".phone-number-input").inputmask({
		"mask": "+7 999-999-99-99",
	});

	$("#form").validate({
		errorPlacement: function (error, element) {}
	});

	$("#popup-form").validate({
		errorPlacement: function (error, element) {}
	});

	$("#form3").validate({
		errorPlacement: function (error, element) {}
	});

	$('.ffl-wrapper').floatingFormLabels();

	$('.anchore').smoothScroll({
		speed: 1000,
	});

	$("#form2").validate({
		rules: {
			email: {
				required: true,
			},
			name: {
				required: true,
			},
			city: {
				required: true,
			},
			textarea: {
				required: true,
			},
			phone: {
				required: true,
			}
		},

	});


	$('#form2').on("submit", function (e) {
		e.preventDefault();
		if ($('#form2').valid()) {}
	});

	$(".fancybox").fancybox({

	});

	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			step: 1000,
			max: 10000,
			values: [0, 5000],
			slide: function (event, ui) {
				$("#amount").val("" + ui.values[0] + " - " + ui.values[1]);
			}
		});
		$("#amount").val("" + $("#slider-range").slider("values", 0) +
			" -" + $("#slider-range").slider("values", 1));
	});

	$(".search-icon").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".parameters-wrap").find(".parameters-block").addClass("open");
	});

	$(".parameters-close").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".parameters-block").removeClass("open");
	});

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".container").find(".head-wrap").addClass("open");
		$("body").addClass("overflow");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".head-wrap").removeClass("open");
		$("body").removeClass("overflow");
	});
	
	
	new WOW().init();


});