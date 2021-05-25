let experience = document.querySelector('.mentor_info_box .ul_type_02');

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
	
	/*mentor 클릭시, mentor 상세 팝업 노출*/
	$('.mentors_wrap .team_item > a').click(function(){
		$('.mentor_popup').show();
    
    const id = this.dataset.id;
    const image = document.querySelector('.mentor_img_box > img');
    
    const name = document.querySelector('.mentor_img_box p.title_r_03');
    const position = document.querySelector('.mentor_img_box p.text--gray');
    
    experience = document.querySelector('.mentor_info_box .ul_type_02');

    teachers
      .filter((teacher) => teacher.id == id)[0]
      .exp.forEach((info) => {
        experience.insertAdjacentHTML('beforeend', `<li>${info}</li>`);
      });

    image.src = this.dataset.img;
    name.textContent = this.dataset.name;
    position.textContent = this.dataset.position;

		$('.dim').show();
	});
	
	/*Testimonials  클릭시, Testimonials 상세 팝업 노출*/
	$('.testimonials_wrap .team_item > a').click(function(){
		$('.testimonials_popup').show();
		$('.dim').show();
	});
});