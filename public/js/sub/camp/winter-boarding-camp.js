$(function(){
	var info_swiper = new Swiper('.testimonials_wrap .swiper-container', {
		slidesPerView: 1, 
		
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });
	
	/*=================== case_studies_swiper ==============*/
	var case_studies_swiper = new Swiper('.location_wrap .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1000: {  // 화면의 넓이가 1000px 이하일 때 
				slidesPerView: 2,
			},
			768: {  // 화면의 넓이가 768px 이하일 때 
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});

	$('.testimonials_wrap .swipe_type_02 .swipe_type_02--item a').click(function(){
		const img = $(this).find('img').attr('src');
		$('.testimonials_popup .img_box img').attr('src', img);
		$('.testimonials_popup').css("position","absolute");
		$('.testimonials_popup').css("top", ( $(window).height() - $('.testimonials_popup').outerHeight() ) / 2 + $(window).scrollTop() - 200 + "px" );
		$('.testimonials_popup').show();
		$('.dim').show();
		return this;
	});
});