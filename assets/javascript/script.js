$(document).ready(function() {

	var autoPlayInterval;

	function showNextImage() {
	//current visable image
	var currentImageNode = $('.pineapples:visible').get(0);
	//array of all images
	var allImages = $('.pineapples').get();
	//current index of visable image
	var currentIndex = allImages.indexOf(currentImageNode);
	//next image's index
	var nextIndex = (currentIndex + 1) % $('.pineapples').length;

	//on click hide current image
	$(currentImageNode).hide();

	//next image
	var nextImageNode = $('.pineapples').get(nextIndex);

	//on click show next image
	$(nextImageNode).show();

	}
	
	//hide all images
	$('.pineapples').hide();

	//show the first image
	$('.pineapples:eq(0)').show();

	//on click for the images
	$('.pineapples').on('click', function() {
	showNextImage();
	
	});

	//start button auto play
	$('.start').on('click', function() {
		autoPlayInterval = setInterval(function() {
			showNextImage();
		}, 1000);
		$('.start').hide();
		$('.stop').show();
		$('.pineapples').unbind('click');

	});

	//stop button to stop autoplay
	$('.stop').on('click', function () {
		clearInterval(autoPlayInterval);
		$('.stop').hide();
		$('.start').show();
		$('.pineapples').on('click', function() {
		showNextImage();
		});
	});

	$('.pineapples').on('click', function() {
		showNextImage();
	});

});
