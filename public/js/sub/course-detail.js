$(function () {
  $('.lesson_info_wrap .level_graph span').each((i, el) => {
    $(el).removeClass('full');
    if(i <= course.level-1) {
      $(el).addClass('full');
    }
  })
});