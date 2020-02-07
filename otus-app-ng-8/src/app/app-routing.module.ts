import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { StudentsComponent }      from './students/students.component';
import { StudentDetailsComponent }  from './student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'student?*', component: StudentsComponent },
  { path: '**/*', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

