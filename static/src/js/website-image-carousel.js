$(window).load(function() {
	var numThumbnails = 5;				// number of thumbnails to show
	var pageSize = 5;					// number of thumbnails to scroll per page
	var autoplaySpeed = false;			// number of ms to wait between auto-scroll, or false for off
	var numImages = $('.website-multi-image-thumbnails img').length;


	$('.website-multi-image-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		autoplay: (autoplaySpeed ? true : false),
		pauseOnHover: true,
		infinite: true,
   		focusOnSelect: true,


		asNavFor: '.website-multi-image-thumbnails',
	});
	$('.website-multi-image-thumbnails').slick({
		slidesToShow: numThumbnails,
		slidesToScroll: pageSize,
		infinite: false,
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