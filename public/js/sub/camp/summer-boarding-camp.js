$(function(){
	console.log(1);
	var info_swiper = new Swiper('.swipe_image .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });


		var mentors_swiper = new Swiper('.team_wrap .swiper-container', {
			slidesPerView: 5,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				1000: {
					// 화면의 넓이가 1000px 이하일 때
					slidesPerView: 2,
				},
				768: {
					// 화면의 넓이가 768px 이하일 때
					slidesPerView: 2,
					spaceBetween: 10,
				},
				640: {
					// 화면의 넓이가 640px 이하일 때
					slidesPerView: 1,
				},
			},
		});

		// $('.team_wrap .team_item > a').click(function () {
		// 	$('.layer_popup').center();
		// 	$('.mentor_popup_custom').show();
		// 	changeMentorDataCustom(teamMembers, document.querySelector('.mentor_popup_custom .ul_type_02'), this);
		// 	$('.dim').show();
		// });
	/*=================== case_studies_swiper ==============*/
	// var case_studies_swiper = new Swiper('.testimonials_wrap .swiper-container', {
	// 	slidesPerView: 4,
	// 	spaceBetween: 20,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	breakpoints: {
	// 		1000: {  // 화면의 넓이가 1000px 이하일 때 
	// 			slidesPerView: 2,
	// 		},
	// 		768: {  // 화면의 넓이가 768px 이하일 때 
	// 			slidesPerView: 1,
	// 			spaceBetween: 10,
	// 		}
	// 	}
	// });

	// $('.testimonials_wrap .swipe_type_02 .swipe_type_02--item a').click(function(){
	// 	const img = $(this).find('img').attr('src');
	// 	$('.testimonials_popup .img_box img').attr('src', img);
	// 	$('.testimonials_popup').css("position","absolute");
	// 	$('.testimonials_popup').css("top", ( $(window).height() - $(this).outerHeight() ) / 2 + $(window).scrollTop() - 200 + "px" );
	// 	$('.testimonials_popup').show();
	// 	$('.dim').show();
	// 	return this;
	// });
});