import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StudentSearchComponent } from "./components/student-search/student-search.component";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";
import { CourseUtilsService } from "./services/course-utils.service";
import { FilterPipe } from "./pipes/filter.pipe";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: "students", component: StudentSearchComponent },
  { path: "student/:id", component: StudentDetailsComponent },
  {
    path: "students",
    component: StudentSearchComponent,
    data: { title: "Student Database" }
  },
  { path: "", redirectTo: "/students", pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    StudentSearchComponent,
    StudentDetailsComponent,
    FilterPipe,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [CourseUtilsService]
})
export class AppModule {}
