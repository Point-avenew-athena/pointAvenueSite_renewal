// let experience = document.querySelector('.mentor_info_box .ul_type_02');
$(document).ready(function () {
  /* ========= common :: start=============*/
  $('.contact_pop_btn').click(function () {
    $('.contact_popup').show();
    $('.dim').fadeIn();
  });

  /*======== web :: start============*/
  $('header .gnb_cont .gnb_menu_item').hover(
    function () {
      $(this).find('.sub_menu_wrap').stop().fadeIn();
    },
    function () {
      $(this).find('.sub_menu_wrap').hide();
    }
  );
  /*======== mobile :: start ==========*/
  $('header .btn_hamburger').click(function () {
    $('.mobile_nav_wrap').addClass('opened');
  });

  $('.mobile_nav_wrap .btn_close_menu').click(function () {
    $('.mobile_nav_wrap').removeClass('opened');
  });

  /*======== mobile :: end ==========*/
  /* scroll */
  $(window).on('scroll', function () {
    onScroll();
  });

  /*start*/
  $(window).on('load', function () {
    onScroll();
    var dWidth = $(document).width();
    if (dWidth <= 768) {
      $('header').addClass('fixed');
    }
  });
  $(window).on('resize', function () {
    var dWidth = $(document).width();
    if (dWidth <= 768) {
      $('header').addClass('fixed');
    }
  });

  function onScroll() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).innerHeight();

    var animOffsetHeight = windowHeight * 0.75;

    $('.anim_group .anim').each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + animOffsetHeight > offsetTop) {
        $(this).addClass('in');
      }
    });
  }

  //팝업 닫기 버튼 클릭시,
  $('.layer_popup .close_btn').click(function () {
    $(this).parents('.layer_popup').hide();
    cleanupListOfTeacher();
		toggleScroll(false);
    $('.dim').fadeOut();
  });

  /*====== classes filter 관련 script======*/
  //필터 옵션 클릭시, 상세 옵션 표출
  $('.option_list .option_item a').click(function () {
    $(this).siblings('.filter_list_wrap').stop().slideToggle('fast');
    $(this).parent().toggleClass('on');
  });

  //정렬 버튼 클릭시, 정렬기준 표출
  $('.classes .courses_wrap .sort_by_box .sort_item').click(function () {
    $(this).siblings('.sort_kind_item').stop().slideToggle();
  });

  //정렬 기준 클릭시 해당 텍스트로 변경
  $('.sort_by_box .sort_kind_item a').click(function () {
    var sortTxt = $(this).text();
    $('.sort_by_box .sort_item').text(sortTxt);
    $('.sort_kind_item').hide();
  });

  //mobile :: filter 버튼 클릭시, 옵션내용 표출
  $('.option_wrap .filter_mo_btn').click(function () {
    $(this).parents('.option_wrap').addClass('on');
  });

  //mobile :: filter 영역 내 close 버튼 클릭시 filter 영역 숨김
  $('.option_wrap .filter_close_btn').click(function () {
    $('.option_wrap').removeClass('on');
  });

  /*======tab cont 활성화 =======*/
  $('.tab_cont_area .tab_type_list_01 a').click(function (e) {
    e.preventDefault();
    var n = $('.tab_type_list_01 a').index($(this));
    $(this).parent().addClass('on').siblings().removeClass('on');
    $(this)
      .parents('.tab_cont_area')
      .find('.tab_cont_wrap')
      .find('.tab_cont')
      .eq(n)
      .addClass('on')
      .siblings()
      .removeClass('on');
  });

  /*==========file_box :: 파일 업로드=========*/
  var fileTarget = $('.file_box .upload_hidden');
  fileTarget.on('change', function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.upload_name').val(filename);
  });
});


//* 선생 정보 팝업 
function changeTeacherData (data, teacherExpWrapper, clickedElem){

  const id = clickedElem.dataset.id;
	const image = document.querySelector('.mentor_img_box > img');
	
	const name = document.querySelector('.mentor_img_box p.title_r_03');
	const position = document.querySelector('.mentor_img_box p.text--gray');
	
	experience = document.querySelector('.mentor_info_box .ul_type_02');
  
	data
		.filter((teacher) => teacher.id == id)[0]
		.exp.forEach((info) => {
			teacherExpWrapper.insertAdjacentHTML('beforeend', `<li>${info}</li>`);
		});

	image.src = clickedElem.dataset.img;
	name.textContent = clickedElem.dataset.name;
	position.textContent = clickedElem.dataset.position;
}
//* 선생 정보 업데이트시
function cleanupListOfTeacher(){
	const listTags = Array.from(experience.children);
  listTags.forEach((item) => item.remove());
}
//* 선생 팝업 떳을시 - 스크롤 막음
function toggleScroll (state = true) {
	state == true ? document.body.style.overflow= 'hidden' :  document.body.style.overflow = '';
}

//* Case studies 정보 팝업 
function changeStudiesData(data, studiesExpWrapper, clickedElem){
	const id = clickedElem.dataset.id;
	const image = document.querySelector('.case_studies_img_box .img_box > img');
	
	const name = document.querySelector('.case_studies_img_box p.title_r_03');
	const school = document.querySelector('.case_studies_img_box p.text--gray');
	
	experience = document.querySelector('.case_studies_info_box .ul_type_02');

	data
		.filter((teacher) => teacher.id == id)[0]
		.info.forEach((info) => {
			studiesExpWrapper.insertAdjacentHTML('beforeend', `<li>${info}</li>`);
		});

	image.src = clickedElem.dataset.img;
	name.textContent = clickedElem.dataset.name;
	school.textContent = clickedElem.dataset.school;
}
//* 선생 정보 업데이트시
function cleanupListOfStudies(){
	const listTags = Array.from(experience.children);
  listTags.forEach((item) => item.remove());
}
