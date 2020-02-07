import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudentDataService } from "../student-data.service";
import {CourseUtilsService} from "../course-utils.service"
// @ts-ignore
import { Student } from "./Student.ts";
import { Observable } from 'rxjs';

@Component({
  selector: "students-component",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  students: Student[];
  title = "Student Database";

  constructor(
    private router: Router,
    private studentDataService: StudentDataService,
    private courseUtils: CourseUtilsService,

  ) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentDataService
      .getAllStudents()
      .subscribe(students => (this.students = students));
  }

  computeGPA(studentClasses) {
    this.courseUtils.computeGPA(studentClasses)
  }

  /**
   * Routes to the corresponding /student/:id endpoint to display
   * full details of that student record.
   *
   * @param row - The row number of the selected student.
   */
  navigateTo(row: any) {
    this.router.navigate(["/student/" + row.student_id]);
  }
}
