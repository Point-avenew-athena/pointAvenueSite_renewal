$(function () {
  var mentors_swiper = new Swiper('.team_wrap .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1000: {
        // 화면의 넓이가 1000px 이하일 때
        slidesPerView: 3,
      },
      768: {
        // 화면의 넓이가 768px 이하일 때
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        // 화면의 넓이가 640px 이하일 때
        slidesPerView: 1,
      },
    },
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
  var story_swiper = new Swiper('.story_wrap .img_box .swiper-container', {
    slidesPerView: 1,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  /*mentor 클릭시, mentor 상세 팝업 노출*/
  $('.team_wrap .team_item > a').click(function () {
    $('.mentor_popup').show();
		changeTeacherData(teamMembers, document.querySelector('.mentor_info_box .ul_type_02'), this);
    $('.dim').show();
  });
});
