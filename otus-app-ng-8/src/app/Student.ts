export interface StudentClass {
    id: Number;
    grade: Number;
  }
  
  export interface Course {
    id: String;
    name: String;
  }
  
  export interface Student {
    first: String;
    last: String;
    email: String;
    studentClasses: StudentClass[];
    student_id: Number; 
  }
  