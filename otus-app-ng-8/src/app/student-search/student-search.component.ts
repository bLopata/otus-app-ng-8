import { Component, OnInit } from "@angular/core";
import { StudentDataService } from "../student-data.service";
// @ts-ignore
import { Student } from "./Student.ts";
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-search-component",
  templateUrl: "./student-search.component.html",
  styleUrls: ["./student-search.component.css"]
})
export class StudentSearchComponent implements OnInit {
  students$: Observable<Student[]>
  private searchTerms = new Subject<string>();
  title = "Student Database";

  constructor(
    private studentDataService: StudentDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  search(term: string): void {
    this.searchTerms.next(term)
  }
  ngOnInit() {
    this.students$ = this.searchTerms.pipe(
      debounceTime(300),
      
      distinctUntilChanged(),

      switchMap((term: string) => this.studentDataService.search(term))
  )
  }
  navigateToSearch() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        name: this.searchTerms
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true
  })
}

}
