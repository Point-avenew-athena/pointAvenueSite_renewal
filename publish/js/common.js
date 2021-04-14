$(document).ready(function(){
	/* ========= common :: start=============*/
	$('.contact_pop_btn').click(function(){
		$('.contact_popup').show();
		$('.dim').fadeIn();
	});
	
	/*======== web :: start============*/
	$('header .gnb_cont .gnb_menu_item').hover(function() {
	  $(this).find('.sub_menu_wrap').stop().fadeIn();
	}, function(){
	  $(this).find('.sub_menu_wrap').hide();
	});
	/*======== mobile :: start ==========*/
	$('header .btn_hamburger').click(function(){
		$('.mobile_nav_wrap').addClass('opened');
	});
	

	
	$('.mobile_nav_wrap .btn_close_menu').click(function(){
		$('.mobile_nav_wrap').removeClass('opened');
	});
	
	/*======== mobile :: end ==========*/
	/* scroll */
    $(window).on('scroll', function(){
        onScroll();
    });
	
	/*start*/
    $(window).on('load', function() {
		onScroll();
		var dWidth = $(document).width();
		if(dWidth<=768){
			$('header').addClass('fixed');
		}
    });
	 $(window).on('resize', function() {
		var dWidth = $(document).width();
		if(dWidth<=768){
			$('header').addClass('fixed');
		}
	 });
	
	function onScroll() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).innerHeight();
		
		var animOffsetHeight = windowHeight * .75;
		
		$('.anim_group .anim').each(function(){
			var offsetTop = $(this).offset().top;
			if (  scrollTop + animOffsetHeight > offsetTop ) {
				$(this).addClass('in');
			}
		});
	};
	
	//팝업 닫기 버튼 클릭시,
	$('.layer_popup .close_btn').click(function(){
		$(this).parents('.layer_popup').hide();
		$('.dim').fadeOut();
	});
});