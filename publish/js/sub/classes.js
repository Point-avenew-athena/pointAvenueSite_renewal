$(function(){
	//필터 옵션 클릭시, 상세 옵션 표출
	$('.option_list .option_item').click(function(){
		$(this).find('.filter_list_wrap').stop().slideToggle('fast');
		$(this).toggleClass('on');
	});
	
	//정렬 버튼 클릭시, 정렬기준 표출
	$('.classes .courses_wrap .sort_by_box .sort_item').click(function(){
		$(this).siblings('.sort_kind_item').stop().slideToggle();
	});
	
	//mobile :: filter 버튼 클릭시, 옵션내용 표출
	$('.option_wrap .filter_mo_btn').click(function(){
		$(this).parents('.option_wrap').addClass('on');
	});
	
	$('.option_wrap .filter_close_btn').click(function(){
		$('.option_wrap').removeClass('on');
	});
});