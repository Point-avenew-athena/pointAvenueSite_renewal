const courseFilters = [];
const cachedCourses = {};
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
        if(typeof course[filter.option] === "object") {
          if(course[filter.option].includes(filter.value)) {
            items.push(course);
            break;
          }
        } else {
          if(course[filter.option] === filter.value) {
            items.push(course);
            break;
          }
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
  if(!cachedCourses[course.courseId]) {
    const template = $(courseTemplate);
    const agegrade = course.age ? `Age ${course.age}` : course.grade;
    template.find('.class_box_type_01--img a').attr('href', `/programs/${course.courseId}`);
    template.find('.class_box_type_01--img img').attr('src', course.thumbnail).attr('alt', `${course?.name} thumbnail`);
    template.find('.age').html(agegrade);
    template.find('.times').html(`${course.hour}`);
    template.find('.title_r_03 a').html(course.name).attr('href', `/programs/${course.courseId}`);
    template.find('.class_type').html(course.type);
    cachedCourses[course.courseId] = template;
  }
  return cachedCourses[course.courseId];
}

const renderCourse = (type, limit = 0, hasType = false) => {
  const typeCls = hasType ? `.${type}` : '';
  const selector = `.courses_type_box${typeCls} .class_box_type_01`;
  $(selector).html('');
  if(getCourses(type, limit).length > 0) {
    getCourses(type, limit).map(course => {
      $(selector).append(bindCourse(course));
    });
  } else {
    $(selector).append('<li>Not found data</li>');
  }
}

const renderCourses = (limit = 0) => {
  renderCourse('elementary', limit, true);
  renderCourse('middlehigh', limit, true);
  renderCourse('debate', limit, true);
  renderCourse('test', limit, true);
}
