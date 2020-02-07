import { Injectable, OnInit } from "@angular/core";
// @ts-ignore
import { Course } from "./Student.ts";
import { StudentDataService } from "./student-data.service";

@Injectable()
export class CourseUtilsService implements OnInit {
  courses: Course[];
  constructor(private studentDataService: StudentDataService) {}
  ngOnInit() {
    this.studentDataService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  /**
   * Method to compute the numerical grade point average based on the enrolled courses.
   *
   * @param studentClasses - Input array of courses, each containing a numerical `grade` property.
   * @returns A string representation of the cumulative GPA in fixed floating-point notation.
   */
  computeGPA(studentClasses): String {
    let sum = studentClasses.map(el => el.grade).reduce((a, b) => a + b),
      gradePointAverage = sum / studentClasses.length;
    return gradePointAverage.toFixed(2);
  }

  /**
   * Returns the report card for a student mapping the numerical grade and course id
   * to a letter grade and course name.
   *
   * @param studentClasses - The array of objects containing the students numerical grade
   * and course id.
   *
   * @returns A string which has the letter grade and course name for each enrolled course.
   */
  listClassesById(studentClasses): String {
    let letterGrades = {
      4: "A",
      3.5: "A-",
      3: "B",
      2.5: "B-",
      2: "C",
      1.5: "C-",
      1: "D",
      0.5: "D-",
      0: "F"
    };
    let grades = studentClasses
      .map(c => c["grade"])
      .map(num => letterGrades[num]);
    let courseNames = studentClasses.map(el => this.courses[el.id]);
    return [courseNames, grades]
      .reduce((a, b) => b.map((v, i) => v + " - " + a[i]))
      .join("\r\n");
  }
}
