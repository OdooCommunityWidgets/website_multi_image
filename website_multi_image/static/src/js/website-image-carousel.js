$(window).load(function() {
	var numThumbnails = 6;				// number of thumbnails to show
	var pageSize = 6;					// number of thumbnails to scroll per page
	var autoplaySpeed = 3000;			// number of ms to wait between auto-scroll, or false for off

	$('.website-multi-image-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		autoplay: (autoplaySpeed ? true : false),
		autoplaySpeed: autoplaySpeed,
		pauseOnHover: true,
		infinite: true,
   		focusOnSelect: true,

		asNavFor: '.website-multi-image-thumbnails',
	});
	$('.website-multi-image-thumbnails').slick({
		slidesToShow: numThumbnails,
		slidesToScroll: pageSize,
		infinite: true,
		centerMode: true,
		arrows: false,
   		focusOnSelect: true,

		asNavFor: '.website-multi-image-main'
	});

});
$(window).resize(function() {
	$('.js-slider').slick('resize');
});

$(window).on('orientationchange', function() {
	$('.js-slider').slick('resize');
});