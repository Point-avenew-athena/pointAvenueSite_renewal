$(function(){
	//필터 옵션 클릭시, 상세 옵션 표출
	$('.option_list .option_item a').click(function(){
		$(this).siblings('.filter_list_wrap').stop().slideToggle('fast');
		$(this).parent().toggleClass('on');
	});
	
	//정렬 버튼 클릭시, 정렬기준 표출
	$('.classes .courses_wrap .sort_by_box .sort_item').click(function(){
		$(this).siblings('.sort_kind_item').stop().slideToggle();
	});
	
	//정렬 기준 클릭시 해당 텍스트로 변경
	$('.sort_by_box .sort_kind_item a').click(function(){
		var sortTxt = $(this).text();
		$('.sort_by_box .sort_item').text(sortTxt);
		$('.sort_kind_item').hide();
	});
	
	//mobile :: filter 버튼 클릭시, 옵션내용 표출
	$('.option_wrap .filter_mo_btn').click(function(){
		$(this).parents('.option_wrap').addClass('on');
	});
	
	//mobile :: filter 영역 내 close 버튼 클릭시 filter 영역 숨김
	$('.option_wrap .filter_close_btn').click(function(){
		$('.option_wrap').removeClass('on');
	});
});