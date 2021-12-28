$(function(){
	
	
	var saying_block_swiper = new Swiper('.saying_block .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 20,
		navigation: {
			nextEl: '.saying_block  .swiper-button-next',
			prevEl: '.saying_block .swiper-button-prev',
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

	var results_swiper_01 = new Swiper('.results_swiper_01 .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 20,
		navigation: {
			nextEl: '.results_swiper_01  .swiper-button-next',
			prevEl: '.results_swiper_01  .swiper-button-prev',
		},
		breakpoints: {
			1000: {  // 화면의 넓이가 1000px 이하일 때 
				slidesPerView: 5,
			},
			768: {  // 화면의 넓이가 768px 이하일 때 
				slidesPerView: 4,
				spaceBetween: 10,
			},
			640: {  // 화면의 넓이가 640px 이하일 때 
				slidesPerView: 3,
			}
		}
	});
	
	var results_swiper_02 = new Swiper('.results_swiper_02 .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 20,
		navigation: {
			nextEl: '.results_swiper_02 .swiper-button-next',
			prevEl: '.results_swiper_02 .swiper-button-prev',
		},
		breakpoints: {
			1000: {  // 화면의 넓이가 1000px 이하일 때 
				slidesPerView: 5,
			},
			768: {  // 화면의 넓이가 768px 이하일 때 
				slidesPerView: 4,
				spaceBetween: 10,
			},
			640: {  // 화면의 넓이가 640px 이하일 때 
				slidesPerView: 3,
			}
		}
	});

});