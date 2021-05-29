$(function(){
	var mentors_swiper = new Swiper('.mentors_wrap .swiper-container', {
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
	
	var testimonials_swiper = new Swiper('.testimonials_wrap .swiper-container', {
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
	
  var locations_swiper = new Swiper('.locations_cont .swiper-container', {
    slidesPerView: 3,
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
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
	

	/*mentor 클릭시, mentor 상세 팝업 노출*/
	$('.mentors_wrap .team_item > a').click(function(){
		/*
		* 
		$('.mentor_popup').show();
		changeTeacherData(teamMembers, document.querySelector('.mentor_info_box .ul_type_02'), this);
		toggleScroll();
		$('.dim').show();
		*/
	});
	
	/*Testimonials  클릭시, Testimonials 상세 팝업 노출*/
	$('.testimonials_wrap .swipe_type_02 .swipe_type_02--item a').click(function(){
		const img = $(this).find('img').attr('src');
		$('.testimonials_popup .img_box img').attr('src',img);
		$('.testimonials_popup').show();
		$('.dim').show();
	});
});