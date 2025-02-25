const express = require("express");
const router = express.Router();
const courses = require("../data/courses-vn.json");
const teachers = require("../data/teachers-vn.json");
const locations = require("../data/point-avenue/about-us/locations.json");
const ageFilter = (ageText, value) => {
  const [min, max] = ageText.split("-");
  return Number(min) <= Number(value) && Number(max) >= Number(value);
};
const options = (courses) => [
  {
    key: "location",
    name: "Địa chỉ",
    filters: [
      {
        idx: 1,
        name: "Hà Nội - Cầu Giấy",
        value: "Hanoi - Cau Giay",
        count: () =>
          courses.filter((course) =>
            course.location.includes("Hanoi - Cau Giay")
          ).length,
      },
      {
        idx: 2,
        name: "Hà Nội - Long Biên",
        value: "Hanoi - Long Bien",
        count: () =>
          courses.filter((course) =>
            course.location.includes("Hanoi - Long Bien")
          ).length,
      },
      {
        idx: 3,
        name: "Bangkok",
        value: "Bangkok",
        count: () =>
          courses.filter((course) => course.location.includes("Bangkok"))
            .length,
      },
    ],
  },
  {
    key: "type",
    name: "Hỉnh thức học",
    filters: [
      {
        idx: 1,
        name: "Online",
        value: "Online",
        count: () =>
          courses.filter((course) => course.type === "Online").length,
      },
      {
        idx: 2,
        name: "Offline",
        value: "Offline",
        count: () =>
          courses.filter((course) => course.type === "Offline").length,
      },
      {
        idx: 3,
        name: "Hybrid",
        value: "Hybrid",
        count: () =>
          courses.filter((course) => course.type === "Hybrid").length,
      },
    ],
  },
  {
    key: "age",
    name: "Độ tuổi",
    filters: (() => {
      const result = [];
      for (let i = 0; i < 15; i++) {
        const idx = i + 1;
        const value = i + 5;
        const count = courses.filter((course) =>
          ageFilter(course.age, value)
        ).length;
        if (count)
          result.push({
            idx,
            name: value,
            value,
            count: () =>
              courses.filter((course) => ageFilter(course.age, value)).length,
          });
      }
      return result;
    })(),
    // [
    //   { idx:1, name: '4', value: '4', count: () => courses.filter(course => ageFilter(course.age, 4)).length },
    //   { idx:2, name: '5', value: '5', count: () => courses.filter(course => ageFilter(course.age, 5)).length },
    //   { idx:3, name: '6', value: '6', count: () => courses.filter(course => ageFilter(course.age, 6)).length },
    //   { idx:4, name: '7', value: '7', count: () => courses.filter(course => ageFilter(course.age, 7)).length },
    //   { idx:5, name: '8', value: '8', count: () => courses.filter(course => ageFilter(course.age, 8)).length },
    //   { idx:6, name: '9', value: '9', count: () => courses.filter(course => ageFilter(course.age, 9)).length },
    //   { idx:7, name: '10', value: '10', count: () => courses.filter(course => ageFilter(course.age, 10)).length },
    //   { idx:8, name: '11', value: '11', count: () => courses.filter(course => ageFilter(course.age, 11)).length },
    //   { idx:9, name: '12', value: '12', count: () => courses.filter(course => ageFilter(course.age, 12)).length },
    //   { idx:10, name: '13', value: '13', count: () => courses.filter(course => ageFilter(course.age, 13)).length },
    //   { idx:11, name: '14', value: '14', count: () => courses.filter(course => ageFilter(course.age, 14)).length },
    //   { idx:12, name: '15', value: '15', count: () => courses.filter(course => ageFilter(course.age, 15)).length },
    //   { idx:13, name: '16', value: '16', count: () => courses.filter(course => ageFilter(course.age, 16)).length },
    //   { idx:14, name: '17', value: '17', count: () => courses.filter(course => ageFilter(course.age, 17)).length },
    //   { idx:15, name: '18', value: '18', count: () => courses.filter(course => ageFilter(course.age, 18)).length },
    // { idx:1, name: '4 - 7', value: '4-7', count: () => courses.filter(course => course.age === '4-7').length },
    // { idx:2, name: '5 - 10', value: '5-10', count: () => courses.filter(course => course.age === '5-10').length },
    // { idx:3, name: '6 - 10', value: '6-10', count: () => courses.filter(course => course.age === '6-10').length },
    // { idx:4, name: '7 - 12', value: '7-12', count: () => courses.filter(course => course.age === '7-12').length },
    // { idx:5, name: '8 - 10', value: '8-10', count: () => courses.filter(course => course.age === '8-10').length },
    // { idx:6, name: '8 - 12', value: '8-12', count: () => courses.filter(course => course.age === '8-12').length },
    // { idx:7, name: '11 - 12', value: '11-12', count: () => courses.filter(course => course.age === '11-12').length },
    // { idx:8, name: '11 - 13', value: '11-13', count: () => courses.filter(course => course.age === '11-13').length },
    // { idx:9, name: '11 - 14', value: '11-14', count: () => courses.filter(course => course.age === '11-14').length },
    // { idx:11, name: '11 - 16', value: '11-16', count: () => courses.filter(course => course.age === '11-16').length },
    // { idx:12, name: '12 - 14', value: '12-14', count: () => courses.filter(course => course.age === '12-14').length },
    // { idx:13, name: '14 - 16', value: '14-16', count: () => courses.filter(course => course.age === '14-16').length }
    // ]
  },
  // {
  //   key: 'grade',
  //   name: 'Grade',
  //   filters: [
  //     { idx:1, name: '7th - 12th', value: '7th - 12th grade', count: () => courses.filter(course => course.grade === '7th - 12th grade').length },
  //     { idx:2, name: '8th - 10th', value: '8th - 10th grade', count: () => courses.filter(course => course.grade === '8th - 10th grade').length },
  //     { idx:3, name: '9th - 10th', value: '9th - 10th grade', count: () => courses.filter(course => course.grade === '9th - 10th grade').length },
  //     { idx:4, name: '9th - 12th', value: '9th - 12th grade', count: () => courses.filter(course => course.grade === '9th - 12th grade').length },
  //     { idx:5, name: '11th - 12th', value: '11th - 12th grade', count: () => courses.filter(course => course.grade === '11th - 12th grade').length }
  //   ]
  // }
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
];

router.get("/all-courses", function (req, res) {
  const elementaryCourses = courses
    .filter((course) => course.program === "Elementary")
    .splice(0, 3);
  const middleCourses = courses
    .filter((course) => course.program === "Middle School")
    .splice(0, 3);
  const debateCourses = courses
    .filter((course) => course.program === "Debate")
    .splice(0, 3);
  const testCourses = courses
    .filter((course) => course.program === "Test Prep")
    .splice(0, 3);
    console.log(elementaryCourses);
  res.render("programs/programs", {
    options: options(courses),
    courses,
    elementaryCourses,
    middleCourses,
    testCourses,
    debateCourses,
  });
});

router.get("/elementary-courses", function (req, res) {
  console.log(1);
  const filterCourse = courses.filter(
    (course) => course.program === "Elementary"
  );
  console.log('filterCourse', filterCourse);
  const elementaryTeachersData = teachers
    .filter((teacher) => teacher.positions.includes("Elementary Teacher"))
    .map((teacher) => {
      teacher.position = teacher.job;
      return teacher;
    });
  res.render("programs/elementary-course-vn", {
    options: options(filterCourse),
    courses: filterCourse,
    teamMembers: elementaryTeachersData,
  });
});

router.get("/middle-school-courses", function (req, res) {
  console.log(2);
  const filterCourse = courses.filter(
    (course) => course.program === "Middle School"
  );
  const middleHighTeachersData = teachers
    .filter((teacher) => teacher.positions.includes("Middle School Teacher"))
    .map((teacher) => {
      teacher.position = teacher.job;
      return teacher;
    });
  res.render("programs/middle-school-course-vn", {
    options: options(filterCourse),
    courses: filterCourse,
    teamMembers: middleHighTeachersData,
  });
});

router.get("/debate-courses", function (req, res) {
  console.log(3);
  const filterCourse = courses.filter((course) => course.program === "Debate");
  const debateTeachersData = teachers
    .filter((teacher) => teacher.positions.includes("Debate Teacher"))
    .map((teacher) => {
      teacher.position = teacher.job;
      return teacher;
    });
  res.render("programs/debate-course-vn", {
    options: options(filterCourse),
    courses: filterCourse,
    teamMembers: debateTeachersData,
  });
});

router.get("/test-preparation-courses", function (req, res) {
  console.log(4);
  const filterCourse = courses.filter(
    (course) => course.program === "Test Preparation"
  );
  const testPrepTeachersData = teachers
    .filter((teacher) => teacher.positions.includes("Test Preparation Teacher"))
    .map((teacher) => {
      teacher.position = teacher.job;
      return teacher;
    });
  res.render("programs/test-preparation-vn", {
    options: options(filterCourse),
    courses: filterCourse,
    teamMembers: testPrepTeachersData,
  });
});

// router.get('/admissions-consulting', function (req, res) {
//   const studies = require('../data/programs/case-studies.json');
//   res.render('admissions-consulting', { studies });
// });

router.get("/:urlName", function (req, res) {
  const { urlName } = req.params;
  const course = courses.filter((course) => course.urlName == urlName)[0];
  const filteredLocations = locations.filter((location) =>
    [1, 2, 3].includes(location.id)
  );
  let renderPath = "programs/course-detail";

  if (course.type === "Offline") {
    if (req.params.urlName === "english-learning") {
      renderPath = "programs/english-learning-vn";
    } else if (req.params.urlName === "elem-life-coaching-intermediate") {
      renderPath = "programs/elem-life-coaching-intermediate-vn";
    } else if (req.params.urlName === "elem-life-coaching-advanced") {
      renderPath = "programs/elem-life-coaching-advanced-vn";
    } else if (req.params.urlName === "engineering") {
      renderPath = "programs/engineering-vn";
    } else if (req.params.urlName === "coding") {
      renderPath = "programs/coding-vn";
    } else if (req.params.urlName === "ela-beginner") {
      renderPath = "programs/ela-beginner-vn";
    } else if (req.params.urlName === "reading-coach") {
      renderPath = "programs/reading-coach-vn";
    } else if (req.params.urlName === "writing-coach") {
      renderPath = "programs/writing-coach-vn";
    } else if (req.params.urlName === "ms-life-coaching-advanced") {
      renderPath = "programs/ms-life-coaching-advanced-vn";
    } else if (req.params.urlName === "ela-advanced") {
      renderPath = "programs/ela-advanced-vn";
    } else if (req.params.urlName === "ela-intermediate") {
      renderPath = "programs/ela-intermediate-vn";
    } else if (req.params.urlName === "ela-foundations") {
      renderPath = "programs/ela-foundations-vn";
    } else if (req.params.urlName === "ms-life-coaching") {
      renderPath = "programs/ms-life-coaching-vn";
    } else if (req.params.urlName === "online-debate-course") {
      renderPath = "programs/online-debate-course-vn";
    } else {
      renderPath = "programs/course-detail-offline-vn";
    }
  }
  res.render(renderPath, { course, locations: filteredLocations });
});

module.exports = router;
