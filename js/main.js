$(function(){
	
$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('#owl1').owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false,
		navigationText: ['<img src="img/next.png" alt="left" width="0" height="0">', 'следующий отзыв <img src="img/nextArrow.png" alt="nextArrow.png" width="26" height="3">']
		// items: 3
		// itemsDesktop: [1199,4],
		// itemsDesktopSmall: [979,2],
		// itemsTablet: [768,3],
		// itemsMobile: [479,2]
	
	});

});