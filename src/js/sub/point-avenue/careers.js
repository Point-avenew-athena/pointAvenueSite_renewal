$(function(){	
	
	var process_step_swiper = new Swiper('.process_step_wrap .swiper-container', {
		slidesPerView: 5, 
		touchRatio:0,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: { // 화면의 넓이가 320px 이상일 때 
			1000: { 
				slidesPerView: 2.5,
				touchRatio:1,
				spaceBetween:0,
			},
			640: { 
				slidesPerView: 1.5,
				touchRatio:1,
				spaceBetween:20,
			}
		}
    });
	
	var members_say_swiper = new Swiper('.members_say_wrap .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1000: {  // 화면의 넓이가 1000px 이하일 때 
				slidesPerView: 3,
			},
			768: {  // 화면의 넓이가 768px 이하일 때 
				slidesPerView: 2,
				spaceBetween: 10,
			},
			640: {  // 화면의 넓이가 640px 이하일 때 
				slidesPerView: 1,
			}
		}
	});
});