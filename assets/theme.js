jQuery(document).ready(function($) {
	$(".btn-hamburger").click(function(e) {
		$(".mobile-nav").addClass("opened");
	});

	$(".mobile-nav .btn-close").click(function(e) {
		$(".mobile-nav").removeClass("opened");
	});
});