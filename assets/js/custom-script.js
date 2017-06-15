// (function($) {

	
	

// })(jQuery);

jQuery(document).ready(function($){
  $('#reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
        
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1
        
      }
    }    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		
		
	});

	console.log('child-test');
});