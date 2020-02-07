const express = require("express");
const app = express();
const path = require("path");
// const bodyparser = require("body-parser");
var { students, courses } = require("./parseData.js");

// app.use(express.static(path.join(__dirname, "studentData.json")));
// app.use(bodyparser.json);
// app.use(bodyparser.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;
app.get("/courses", (req, res) => {
  res
    .status(200)
    .json(courses)
    .end();
});
app.get("/students", (req, res) => {
  res
    .status(200)
    .json(students)
    .end();
});
app.get("/student", (req, res) => {
  var response = [];
  console.log(req.query);
  if (typeof (req.query.name != "undefined")) {
    tokens = req.query.name.toLowerCase().split(" ");
    students.filter(s => {
      tokens.every(w => {
        (s.first.toLowerCase() + s.last.toLowerCase()).includes(w);
      });
      response.push(s);
    });
    if (Object.keys(req.query).length == 0) {
      response = students;
    }
    res.json(response);
  }
});
app.get("/student/:id", (req, res) => {
  const id = parseInt(req.params.id, 10),
    student = students.find(student => student.student_id === id);

  if (student !== undefined) {
    return res
      .status(200)
      .send({
        success: "true",
        message: "student details retrieved successfully",
        student
      })
      .end();
  } else {
    return res
      .status(404)
      .send({
        success: "false",
        message: "student with that id does not exist"
      })
      .end();
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
