$(function(){
	var info_swiper = new Swiper('.schedule_wrap .swiper-container', {
		slidesPerView: 1, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
    });
	
	var info_swiper = new Swiper('.future_wrap .swiper-container', {
		slidesPerView: 1, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
    });

	var team_swiper = new Swiper('.meet_team_wrap .swiper-container', {
		slidesPerView: 1, 
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
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

	/* title 클릭시, 활성화 */
	$('.summer_day_camp .camp_info_wrap .text_article .title_r_02').click(function(){
		$('.summer_day_camp .camp_info_wrap .text_article .title_r_02').removeClass('section_title');
		$(this).addClass('section_title').parent('li').addClass('on').siblings().removeClass('on');
	});
	
	$('.testimonials_wrap .swipe_type_02 .swipe_type_02--item a').click(function(){
		const img = $(this).find('img').attr('src');
		$('.testimonials_popup .img_box img').attr('src', img);
		$('.testimonials_popup').show();
		$('.dim').show();
	});
});