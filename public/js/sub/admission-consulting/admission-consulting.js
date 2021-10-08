$(function(){
	var info_swiper = new Swiper('.info_wrap .img_wrap .swiper-container', {
		slidesPerView: 1, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
    });
	
	var process_step_swiper = new Swiper('.process_step_wrap .swiper-container', {
		slidesPerView: 5, 
		touchRatio:0,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		breakpoints: {
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
	
	/*=================== mentors_wrap ==============*/
	var case_studies_swiper = new Swiper('.mentors_wrap .swiper-container', {
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
	
	/*=================== case_studies_swiper ==============*/
	var case_studies_swiper = new Swiper('.case_studies_wrap .swipe_type_01_wrap .swiper-container', {
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
	
	/*=================== video_wrap ==============*/
	var case_studies_swiper = new Swiper('.case_studies_wrap .video_wrap .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 20,
		centeredSlides:true,
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

	/* mentors 클릭시, mentors 상세 팝업 노출*/
	$('.admission_consulting .mentors_wrap .team_list a').click(function(){
		$('.layer_popup').center();
		$('.mentor_popup').show();
		changeMentorData(mentors, document.querySelector('.mentor_popup .ul_type_02'), this);
		$('.dim').show();
	});
	
	/* case-studies 클릭시,case-studies 상세 팝업 노출*/
	$('.admission_consulting .class_box_type_01 a').click(function(){
		$('.layer_popup').center();
		$('.case_studies_popup').show();
		changeStudiesData(studies, document.querySelector('.case_studies_info_box .ul_type_02'), this);
		$('.dim').show();
	});
});