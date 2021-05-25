$(document).ready(function(){
	var visu_swiper = new Swiper('.main_visual_wrap .swiper-container', {
		slidesPerView: 1,
		pagination: {
			type: 'bullets',
			el: '.swiper-pagination',
			clickable: true
		}
	});
	
	var news_swiper = new Swiper('.news_wrap .swiper-container', {
		slidesPerView: 3, 
		touchRatio:0,
		spaceBetween:15,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: { // 화면의 넓이가 320px 이상일 때 
			768: { 
				slidesPerView: 2.1,
				touchRatio:1,
				spaceBetween:20,
			},
			640: { 
				slidesPerView: 1.5,
				touchRatio:1,
			}
		}
    });
	

});