import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from "./api.service";
// @ts-ignore
import { Student, Course } from "../models/Student.ts";

@Injectable()
export class StudentDataService {

  private uri = "localhost:4000"

  constructor(private api: ApiService, private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.api.getAllCourses();
  }

  /**
   * Method to retrieve all student records from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @returns An array of Student Observables.
   */
  getAllStudents(): Observable<Student[]> {
    return this.api.getAllStudents();
  }

  /**
   * Method to return a single student record from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @param studentId - Record index to retrieve.
   * @returns A single Student Observable.
   */
  getStudentById(studentId: number): Observable<Student> {
    return this.api.getStudentById(studentId);
  }

  search(query: String): Observable<Student[]> {
    if (!query.trim()) {
      // if not search query, return all students.
      return this.getAllStudents();
    }
    return this.http.get<Student[]>(`${this.uri}/student?name=${query}`).pipe(
      tap(x => x.length ?
         console.log(`found students matching "${query}"`) :
         console.log(`no students matching "${query}"`)),
      catchError(this.handleError<Student[]>('searchStudents', [])))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
