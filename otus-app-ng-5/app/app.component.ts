import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "./services/course-utils.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private courseUtils: CourseUtilsService) {}
  ngOnInit() {
    this.courseUtils.students.forEach(this.courseUtils.addId(1));
  }
}
