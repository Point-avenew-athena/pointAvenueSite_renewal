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
	
	/*=================== Our Results swiper ==============*/
	var results_swiper_01 = new Swiper('.results_swiper_01 .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
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
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
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
	
	/*=================== case_studies_swiper ==============*/
	var case_studies_swiper = new Swiper('.case_studies_wrap .swiper-container', {
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
});