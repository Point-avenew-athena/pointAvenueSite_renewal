const express = require('express');
const router = express.Router();
const courses = require('../data/courses')
const options = (courses) => [
  {
    key: 'location',
    name: 'Location',
    filters: [
      { idx:1, name: 'Hanoi - Cau Giay', value: 'Hanoi - Cau Giay', count: () => courses.filter(course => course.location === 'Hanoi - Cau Giay').length },
      { idx:2, name: 'Hanoi - Long Bien', value: 'Hanoi - Long Bien', count: () => courses.filter(course => course.location === 'Hanoi - Long Bien').length },
      { idx:3, name: 'Bangkok', value: 'Bangkok', count: () => courses.filter(course => course.location === 'Bangkok').length },
    ]
  },
  {
    key: 'type',
    name: 'Course Type',
    filters: [
      { idx:1, name: 'Online', value: 'Online', count: () => courses.filter(course => course.type === 'Online').length },
      { idx:2, name: 'Offline', value: 'Offline', count: () => courses.filter(course => course.type === 'Offline').length },
      { idx:3, name: 'Hybrid', value: 'Hybrid', count: () => courses.filter(course => course.type === 'Hybrid').length },
    ]
  },
  {
    key: 'age',
    name: 'Age',
    filters: [
      { idx:1, name: '5 - 10', value: '5-10', count: () => courses.filter(course => course.age === '5-10').length },
      { idx:2, name: '11 - 15', value: '11-15', count: () => courses.filter(course => course.age === '11-15').length },
      { idx:3, name: '16 - 18', value: '16-18', count: () => courses.filter(course => course.age === '16-18').length },
    ]
  },
  // {
  //   key: 'program',
  //   name: 'Program',
  //   filters: [
  //     { idx:1, name: 'Test Prep', value: 'Test Prep', count: () => courses.filter(course => course.program === 'Test Prep').length },
  //     { idx:2, name: 'Elementary', value: 'Elementary', count: () => courses.filter(course => course.program === 'Elementary').length },
  //     { idx:3, name: 'Middle & High School', value: 'Middle & High School', count: () => courses.filter(course => course.program === 'Middle & High School').length },
  //     { idx:4, name: 'Debate', value: 'Debate', count: () => courses.filter(course => course.program === 'Debate').length },
  //   ]
  // }
]

router.get('/', function (req, res) {
  const elementaryCourses = courses.filter(course => course.program === 'Elementary').splice(0, 3);
  const middleCourses = courses.filter(course => course.program === 'Middle & High School').splice(0, 3);
  const debateCourses = courses.filter(course => course.program === 'Debate').splice(0, 3);
  const testCourses = courses.filter(course => course.program === 'Test Prep').splice(0, 3);
  res.render('programs', { options: options(courses), courses, elementaryCourses, middleCourses, testCourses, debateCourses });
})

router.get('/elementary-courses', function (req, res) {
  const filterCourse = courses.filter(course => course.program === 'Elementary');
  const elementaryTeachersData = require('../src/data/programs/teachers/elementary.json');
  res.render('elementary-course', { options: options(filterCourse), courses: filterCourse, teachers: elementaryTeachersData });
});

router.get('/middle-high-school-courses', function (req, res) {
  const filterCourse = courses.filter(course => course.program === 'Middle & High School');
  const middleHighTeachersData = require('../src/data/programs/teachers/middle-high.json');
  res.render('middle-high-school-course', { options: options(filterCourse), courses: filterCourse, teachers: middleHighTeachersData });
});

router.get('/debate', function (req, res) {
  const filterCourse = courses.filter(course => course.program === 'Debate');
  console.log(filterCourse)
  const debateTeachersData = require('../src/data/programs/teachers/debate.json');
  res.render('debate-course', { options: options(filterCourse), courses: filterCourse, teachers: debateTeachersData });
});

router.get('/test-preparation', function (req, res) {
  const filterCourse = courses.filter(course => course.program === 'Test Prep');
  const testPrepTeachersData = require('../src/data/programs/teachers/test-prep.json');
  res.render('test-preparation', { options: options(filterCourse), courses: filterCourse, teachers: testPrepTeachersData });
});

router.get('/:courseId', function (req, res) {
  const { courseId } = req.params;
  const course = courses.filter(course => course.courseId == courseId)[0];
  let renderPath = 'course-detail';
  if(course.type === 'Offline') {
    renderPath = 'course-detail-offline';
  }
  res.render(renderPath, { course })
});

module.exports = router