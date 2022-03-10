$(function(){
	console.log(2);
	var info_swiper = new Swiper('.swipe_image .swiper-container', {
		slidesPerView: 1,
		// spaceBetween: 20, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
		}
    });
	
	/*=================== case_studies_swiper ==============*/
	var case_studies_swiper = new Swiper('.testimonials_wrap .swiper-container', {
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