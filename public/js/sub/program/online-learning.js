$(function(){
	
	
	var saying_block_swiper = new Swiper('.saying_block .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1000: {  // 화면의 넓이가 1000px 이하일 때 
				slidesPerView: 1,
			},
		},
		pagination: {
			el: '.saying_block .swiper-pagination',
			clickable: true
		},
	});

});