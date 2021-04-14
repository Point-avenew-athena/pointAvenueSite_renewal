$(function(){
	var visu_swiper = new Swiper('.team_wrap .swiper-container', {
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
	
	var visu_swiper = new Swiper('.locations_cont .swiper-container', {
		slidesPerView: 3,
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