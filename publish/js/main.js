$(document).ready(function(){
	var visu_swiper = new Swiper('.main_visual_wrap .swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
		}
	});
	var step_swiper = new Swiper('.step_wrap .swiper-container', {
		slidesPerView: 4, 
		touchRatio:0,
		breakpoints: { // 화면의 넓이가 320px 이상일 때 
			766: { 
				slidesPerView: 1.8,
				touchRatio:1,
				spaceBetween: 0,
				centeredSlides:true
			}
		}
    });
	
	var news_swiper = new Swiper('.news_wrap .swiper-container', {
		slidesPerView: 3, 
		touchRatio:0,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: { // 화면의 넓이가 320px 이상일 때 
			768: { 
				slidesPerView: 2.1,
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
	

});