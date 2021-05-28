const courseFilters = [];
let courseSort = 'newest';
const courseFilter = (option, value, on) => {
  const items = $('.class_box_type_01--item');
  if(on) {
    courseFilters.push({option, value});
  } else {
    courseFilters.splice(courseFilters.findIndex(filter => filter.value === option && filter.value === value));
  }
}

const getCourses = (type, limit) => {
  let typeCourses = courses;
  switch(type) {
    case 'elementary':
      typeCourses = typeCourses.filter(course => course.program === 'Elementary')
      break;
    case 'middlehigh':
      typeCourses = typeCourses.filter(course => course.program === 'Middle & High School')
      break;
    case 'debate':
      typeCourses = typeCourses.filter(course => course.program === 'Debate')
      break;
    case 'test':
      typeCourses = typeCourses.filter(course => course.program === 'Test Prep')
      break;
  }

  let items = [];
  if(courseFilters.length > 0) {
    for(const course of typeCourses) {
      for(const filter of courseFilters) {
        if(course[filter.option] === filter.value) {
          items.push(course);
          break;
        }
      }
    }
  } else {
    items = typeCourses;
  }

  items = items.sort(course => {
  });

  if(limit > 0) {
    items = items.splice(0, limit);
  }

  return items;
}

const bindCourse = (course) => {
  const template = $(courseTemplate);
  template.find('.class_box_type_01--img a').attr('href', `/programs/${course.courseId}`);
  template.find('.class_box_type_01--img img').attr('src', course.thumbnail).attr('alt', `${course?.name} thumbnail`);
  template.find('.age').html(`Age ${course.age}`);
  template.find('.times').html(`${course.hour}`);
  template.find('.title_r_03 a').html(course.name).attr('href', `/programs/${course.courseId}`);
  template.find('.class_type').html(course.type);
  return template;
}

const renderCourse = (type, limit = 0) => {
  $('.courses_type_box .class_box_type_01').html('');
  getCourses(type, limit).map(course => {
    $('.courses_type_box .class_box_type_01').append(bindCourse(course));
  });
}

const renderCourses = (limit = 0) => {
  $('.courses_type_box.elementary .class_box_type_01').html('');
  getCourses('elementary', limit).map(course => {
    $('.courses_type_box.elementary .class_box_type_01').append(bindCourse(course));
  });
  $('.courses_type_box.middlehigh .class_box_type_01').html('');
  getCourses('middlehigh', limit).map(course => {
    $('.courses_type_box.middlehigh .class_box_type_01').append(bindCourse(course));
  });
  $('.courses_type_box.debate .class_box_type_01').html('');
  getCourses('debate', limit).map(course => {
    $('.courses_type_box.debate .class_box_type_01').append(bindCourse(course));
  });
  $('.courses_type_box.test .class_box_type_01').html('');
  getCourses('test', limit).map(course => {
    $('.courses_type_box.test .class_box_type_01').append(bindCourse(course));
  });
}
