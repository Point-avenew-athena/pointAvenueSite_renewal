$(document).ready(function(){
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
	
	$('.mobile_nav_wrap .gnb_menu_item a').click(function(){
		$('.mobile_nav_body .sub_menu').slideUp();
		if(!$(this).parent().hasClass('on')){
			$(this).siblings('ul').stop().slideDown('fast');
			$(this).parent().addClass('on').siblings().removeClass('on');
		}else{
			$(this).siblings('ul').stop().slideUp('fast');
			$(this).parent().removeClass('on');
		}
	});
	
	$('.mobile_nav_wrap .btn_close_menu').click(function(){
		$('.mobile_nav_wrap').removeClass('opened');
	});
	
	$('footer .footer_sitemap .footer_sitemap_menu a').click(function(){
		$(this).siblings('ul').stop().slideToggle('fast');
		$(this).parent().toggleClass('on');
	});
	/*======== mobile :: end ==========*/
	/* scroll */
    $(window).on('scroll', function(){
        onScroll();
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
});