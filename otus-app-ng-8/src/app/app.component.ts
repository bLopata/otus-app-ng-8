import { Component, OnInit } from '@angular/core';
import { StudentDataService } from "./student-data.service";
//@ts-ignore
import { Student, Course } from "./Student.ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentDataService]
})
export class AppComponent implements OnInit {
  title = 'otus-app';
  constructor(  ) { }

  students: Student[] = [];
  courses: Course[] = [];
  ngOnInit() {

  }
}
