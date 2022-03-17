$(function(){
	console.log(1);
	var info_swiper = new Swiper('.mySwiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next-camp',
			prevEl: '.swiper-button-prev-camp',
		}
    });
		var info_swiper = new Swiper('.mySwiperMobile', {
			slidesPerView: 2,
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next-camp',
				prevEl: '.swiper-button-prev-camp',
			},
			breakpoints: {
				480: {
					// 화면의 넓이가 480px 이하일 때
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					// 화면의 넓이가 480px 이하일 때
					slidesPerView: 4,
					spaceBetween: 10,
				},
			},
		});

		var mentors_swiper = new Swiper('.mySwiperMentors', {
			slidesPerView: 4,
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next-mentor',
				prevEl: '.swiper-button-prev-mentor',
			},
			breakpoints: {
				480: {
					// 화면의 넓이가 480px 이하일 때
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					// 화면의 넓이가 768px 이하일 때
					slidesPerView: 4,
					spaceBetween: 10,
				},
				640: {
					// 화면의 넓이가 640px 이하일 때
					slidesPerView: 1,
				},
				1000: {
					// 화면의 넓이가 1000px 이하일 때
					slidesPerView: 2,
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

	const form = document.getElementById('register-form');
	form.addEventListener('submit', submitForm);

	function submitForm() {
		Swal.fire({
			text: "Thank you for your registration, we will be in touch shortly!",
			type: "success",
			icon: "success",
			timer: 3000
		})
	}
});