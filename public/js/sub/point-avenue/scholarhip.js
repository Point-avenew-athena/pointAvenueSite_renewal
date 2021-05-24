$(function(){
	var process_step_swiper = new Swiper('.process_step_wrap .swiper-container', {
		slidesPerView: 3, 
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
			768: { 
				slidesPerView: 1.5,
				touchRatio:1,
				spaceBetween:20,
			}
		}
    });
	
	var story_swiper = new Swiper('.scholar_wrap .img_box .swiper-container', {
		slidesPerView: 1, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
		}
    });
});