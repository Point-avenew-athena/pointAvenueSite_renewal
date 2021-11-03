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
		slidesPerView: 1, 
		
		effect:'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });

	/* title 클릭시, 활성화 */
	$('.day_camp .camp_info_wrap .text_article .title_r_02').click(function(){
		$('.day_camp .camp_info_wrap .text_article .title_r_02').removeClass('section_title');
		$(this).addClass('section_title').parent('li').addClass('on').siblings().removeClass('on');
	});


	$('.day_camp .tab_group li').click(function(){
		var n = $('.day_camp .tab_group li').index($(this));
		$(this).addClass('on').siblings().removeClass('on');
		$('.day_camp .video_box').eq(n).addClass('on').siblings().removeClass('on');
	});
	
	$('.testimonials_wrap .swipe_type_02 .swipe_type_02--item a').click(function(){
		const img = $(this).find('img').attr('src');
		$('.testimonials_popup .img_box img').attr('src', img);
		$('.testimonials_popup').css("position","absolute");
		$('.testimonials_popup').css("top", ( $(window).height() - $('.testimonials_popup').outerHeight() ) / 2 + $(window).scrollTop() - 200 + "px" );
		$('.testimonials_popup').show();
		$('.dim').show();
		return this;
	});
});