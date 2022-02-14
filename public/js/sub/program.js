const courseFilters = [];
const cachedCourses = {};
let courseSort = 'newest';
const courseFilter = (option, value, on) => {
  const items = $('.class_box_type_01--item');
  if(on) {
    courseFilters.push({option, value});
  } else {
    courseFilters.splice(courseFilters.findIndex(filter => filter.option === option && filter.value === value), 1);
  }
}

const getCourses = (type, limit) => {
  console.log(courses);
  let typeCourses = courses;
  switch(type) {
    case 'elementary':
      typeCourses = typeCourses.filter(course => course.program === 'Elementary')
      break;
    case 'middlehigh':
      typeCourses = typeCourses.filter(course => course.program === 'Middle School')
      break;
    case 'debate':
      typeCourses = typeCourses.filter(course => course.program === 'Debate')
      break;
    case 'test':
      typeCourses = typeCourses.filter(course => course.program === 'Test Preparation')
      break;
  }

  let items = [];
  // filter
  if(courseFilters.length > 0) {
    for(const course of typeCourses) {
      for(const filter of courseFilters) {
        if(typeof course[filter.option] === "object") {
          if(course[filter.option].includes(filter.value)) {
            items.push(course);
          }
        } else if(filter.option === 'age') {
          const [min, max] = course[filter.option].split('-');
          if(Number(min) <= Number(filter.value) && Number(max) >= Number(filter.value)) {
            items.push(course);
          }
        } else {
          if(course[filter.option] === filter.value) {
            items.push(course);
          }
        }
      }
    }
  } else {
    items = typeCourses;
  }

  // unique
  items = items.filter((item, index, self) => self.indexOf(item) === index);

  // sort
  items = items.sort(course => {});

  if(limit > 0) {
    items = items.splice(0, limit);
  }

  return items;
}

const bindCourse = (course, domain) => {
  console.log(course);
  if(!cachedCourses[course.courseId]) {
    const template = $(courseTemplate);
    const agegrade = course.age ? `${domain ? '' : 'Ages'} ${course.age} ${domain ? 'Tuổi' : ''}` : course.grade;
    template.find('.class_box_type_01--img a').attr('href', `${domain}/programs/${course.urlName}`);
    template.find('.class_box_type_01--img img').attr('src', course.thumbnail).attr('alt', `${course?.urlName} thumbnail`);
    template.find('.age').html(agegrade);
    template.find('.times').html(`${course.hour}`);
    template.find('.title_r_03 a').html(course.name).attr('href', `${domain}/programs/${course.urlName}`);
    template.find('.class_type').html(course.type);
    cachedCourses[course.courseId] = template;
  }
  return cachedCourses[course.courseId];
}

const renderCourse = (type, limit = 0, hasType = false) => {
  console.log(window.location.href);
  const domain = window.location.href.includes('/vn') ? '/vn' : '';
  console.log(domain);
  const typeCls = hasType ? `.${type}` : '';
  const selector = `.courses_type_box${typeCls} .class_box_type_01`;
  const list = getCourses(type, limit);
  console.log(list);
  $(selector).html('');
  if(list.length > 0) {
    list.map(course => {
      console.log(course);
      $(selector).append(bindCourse(course, domain));
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
