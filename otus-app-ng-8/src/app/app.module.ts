import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { ApiService } from './api.service';
import { CourseUtilsService } from './course-utils.service';
import { StudentDataService } from './student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentSearchComponent,
    StudentDetailsComponent,
    PageNotFoundComponent,
    FilterPipe,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, CourseUtilsService, StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
