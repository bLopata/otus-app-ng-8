var schoolData = require("./schoolData.json");

let appendId = (s, i) => Object.assign(s, { student_id: i + 1 });

exports.students = schoolData.students.map(appendId);
exports.courses = schoolData.classes;
